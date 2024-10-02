import React, { useState } from "react";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name.trim()) formErrors.name = "Name is required";
    if (!formData.email.trim()) formErrors.email = "Email is required";
    if (!formData.subject.trim()) formErrors.subject = "Subject is required";
    if (!formData.message.trim()) formErrors.message = "Message is required";
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);
      setErrors({});
      try {
        const response = await fetch("/api/sendEmail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        if (result.success) {
          setSuccessMessage("Your message has been sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
          setSuccessMessage("Failed to send your message. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setSuccessMessage("Failed to send your message. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 rounded-lg">
      {successMessage && (
        <p className="text-green-500 text-center mb-4">{successMessage}</p>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white/60"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } bg-transparent rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white/60"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            }  bg-transparent rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-white/60"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.subject ? "border-red-500" : "border-gray-300"
            }  bg-transparent rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
          />
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-white/60"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.message ? "border-red-500" : "border-gray-300"
            }  bg-transparent rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`inline-flex justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#232329] hover:bg-[#3e3e42] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactMe;
