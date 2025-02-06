"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, User, MessageSquare, Send, Loader2 } from "lucide-react";

const ContactMe = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Check if all form fields are filled
  useEffect(() => {
    const { name, email, message } = formData;
    setIsFormValid(
      name.trim() !== "" &&
        email.trim() !== "" &&
        message.trim() !== "" &&
        isValidEmail(email)
    );
  }, [formData]);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      // Success - clear form
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      // Show success message (you can implement this using a toast notification)
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      // Show error message
      alert("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        {/* Name Input */}
        <div className="relative">
          <User className="absolute left-3 top-3 h-5 w-5 text-accent" />
          <Input
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="pl-11 bg-[#232329] border-none h-12 text-white/60"
            required
          />
        </div>

        {/* Email Input */}
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-5 w-5 text-accent" />
          <Input
            type="email"
            placeholder="Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="pl-11 bg-[#232329] border-none h-12 text-white/60"
            required
          />
        </div>

        {/* Message Textarea */}
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-accent" />
          <Textarea
            placeholder="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="pl-11 bg-[#232329] border-none min-h-[200px] resize-none text-white/60"
            required
          />
        </div>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className={`w-full h-12 bg-[#232329] border border-accent text-accent 
          hover:bg-accent hover:text-white transition-all duration-300
          disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#232329] 
          disabled:hover:text-accent`}
        disabled={!isFormValid || isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactMe;
