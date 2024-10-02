import React, { useState, useEffect } from "react";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
    const fieldErrors = validateField(name, formData[name]);
    setErrors({ ...errors, ...fieldErrors });
  };

  const validateField = (fieldName, value) => {
    let fieldErrors = {};
    switch (fieldName) {
      case "name":
        if (!value.trim()) fieldErrors.name = "Name is required";
        break;
      case "email":
        if (!value.trim()) {
          fieldErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          fieldErrors.email = "Email is invalid";
        }
        break;
      case "subject":
        if (!value.trim()) fieldErrors.subject = "Subject is required";
        break;
      case "message":
        if (!value.trim()) fieldErrors.message = "Message is required";
        break;
      default:
        break;
    }
    return fieldErrors;
  };

  const validateForm = () => {
    const fieldErrors = {};
    Object.keys(formData).forEach((key) => {
      const fieldError = validateField(key, formData[key]);
      Object.assign(fieldErrors, fieldError);
    });
    setErrors(fieldErrors);
    return Object.keys(fieldErrors).length === 0;
  };

  useEffect(() => {
    setIsFormValid(validateForm());
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
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
          setTouched({});
        } else {
          setSuccessMessage("Failed to send your message. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setSuccessMessage("Failed to send your message. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 rounded-lg">
      {successMessage && (
        <p className="text-accent text-center mb-4">{successMessage}</p>
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
            onBlur={handleBlur}
            placeholder="Enter your name"
            className={`mt-1 block w-full px-3 py-2 border ${
              touched.name && errors.name ? "border-red-500" : "border-gray-300"
            } bg-transparent rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
          />
          {touched.name && errors.name && (
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
            onBlur={handleBlur}
            placeholder="Enter your email"
            className={`mt-1 block w-full px-3 py-2 border ${
              touched.email && errors.email
                ? "border-red-500"
                : "border-gray-300"
            }  bg-transparent rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
          />
          {touched.email && errors.email && (
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
            onBlur={handleBlur}
            placeholder="Enter the subject"
            className={`mt-1 block w-full px-3 py-2 border ${
              touched.subject && errors.subject
                ? "border-red-500"
                : "border-gray-300"
            }  bg-transparent rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
          />
          {touched.subject && errors.subject && (
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
            onBlur={handleBlur}
            placeholder="Enter your message"
            className={`mt-1 block w-full px-3 py-2 border ${
              touched.message && errors.message
                ? "border-red-500"
                : "border-gray-300"
            }  bg-transparent rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
          ></textarea>
          {touched.message && errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className={`inline-flex justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md  ${
              isFormValid && !isSubmitting
                ? "bg-accent hover:bg-accent/90 text-primary"
                : "bg-[#232329] opacity-50 cursor-not-allowed text-white"
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactMe;
