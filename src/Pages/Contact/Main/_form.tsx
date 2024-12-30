"use client"
import React, { useState } from "react";
import FormField from "./__formField";
import { Send } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("@/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send message. Please try again.");
    }

    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-[#13111C]">
      {showSuccess && (
        <div className="mb-4 p-4 bg-orange-500 text-white rounded-lg flex items-center gap-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          Message sent successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <FormField
            label="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <FormField
          label="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />

        <FormField
          label="Your Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          multiline
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg 
               transition duration-200 flex items-center gap-2 disabled:opacity-50 
               disabled:cursor-not-allowed hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]"
        >
          {isSubmitting ? (
            <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin" />
          ) : (
            <>
              Send Message
              <Send className="w-5 h-5" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
