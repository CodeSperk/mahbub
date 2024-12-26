import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { RiMailSendFill } from 'react-icons/ri';

const LeftContact = () => {
  return (
    <div className="flex flex-col justify-start space-y-8 lg:space-y-12 md:w-1/2 lg:w-1/3 max-w-fit text-lg">
    {/* Address Field */}
    <div className="flex gap-4">
      <div className="bg-[#f1e2bf] flex justify-center items-center px-3 rounded-md">
        <FaLocationDot className="text-[#FFB400] mx-auto text-3xl" />
      </div>
      <div>
        <h5 className="font-semibold">Address</h5>
        <p>Savar, Dhaka, Bangladesh</p>
      </div>
    </div>

    {/* Phone Field */}
    <div className="flex gap-4">
      <div className="bg-[#f1e2bf] flex justify-center items-center px-3 rounded-md">
        <FaPhoneAlt className="text-[#FFB400] mx-auto text-3xl" />
      </div>
      <div>
        <h5 className="font-semibold">Phone</h5>
        <p>+880 1521 251 146</p>
      </div>
    </div>

    {/* Email Field */}
    <div className="flex gap-4">
      <div className="bg-[#f1e2bf] flex justify-center items-center px-3 rounded-md">
        <RiMailSendFill className="text-[#FFB400] mx-auto text-3xl" />
      </div>
      <div>
        <h5 className="font-semibold">Email</h5>
        <p>inbx.mahbub@gmail.com</p>
      </div>
    </div>
  </div>
  );
};

export default LeftContact;