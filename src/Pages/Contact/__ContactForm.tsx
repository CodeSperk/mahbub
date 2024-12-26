import React from 'react';
import { BsSendArrowDown } from 'react-icons/bs';

const ContactForm = () => {
  return (
    <form
    className="space-y-6 md:w-1/2 lg:w-2/3 max-w-[520px]"
  >
    {/* Name & Email Fields */}
    <div className="flex flex-col gap-6 lg:flex-row">
      <div className="relative border py-3 px-4 rounded-lg lg:w-1/2">
        <label className="absolute -top-2.5 text-[var(--clr-secondary)] text-sm">
          Name
        </label>
        <input
          type="text"
          name="user_name"
          placeholder="Insert your name"
          className="border-none outline-none bg-transparent w-full"
          required
        />
      </div>
      <div className="relative border py-3 px-4 rounded-lg lg:w-1/2">
        <label
          htmlFor=""
          className="absolute -top-2.5 text-[var(--clr-secondary)] text-sm"
        >
          Email
        </label>
        <input
          type="email"
          name="user_email"
          placeholder="example@gmail.com"
          className="w-full border-none outline-none bg-transparent"
          required
        />
      </div>
    </div>

    {/* Subject Field */}
    <div className="relative border py-3 px-4 rounded-lg">
      <label
        htmlFor=""
        className="absolute -top-2.5 text-[var(--clr-secondary)] text-sm"
      >
        Subject
      </label>
      <input
        type="text"
        name="subject"
        placeholder="Write subject here"
        className="w-full border-none outline-none bg-transparent"
        required
      />
    </div>

    {/* Message Field */}
    <div className="relative border py-3 px-4 rounded-lg">
      <label
        htmlFor=""
        className="absolute -top-2.5 text-sm"
      >
        Message
      </label>
      <textarea
        rows={4}
        name="message"
        className="w-full border-none outline-none bg-transparent"
        placeholder="Write your feedback..."
        required
      ></textarea>
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="flex items-center gap-2 bg-[#FFB400] hover:bg-[#daab3d] text-white py-3 px-6 rounded"
    >
      Send Message <BsSendArrowDown />
    </button>
    
  </form>
  );
};

export default ContactForm;