import React from 'react';

const ContactUs = () => {
  return (
    <div className="p-6 bg-gray-100 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">ارتباط با ما</h2>
      <div className="flex items-center mb-2">
        <span className="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v18H3V3z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" />
          </svg>
        </span>
        <span className="text-lg">021 - 88884423</span>
      </div>
      <div className="flex items-center mb-2">
        <span className="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v18H3V3z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" />
          </svg>
        </span>
        <a href="mailto:info@hajija.com" className="text-lg text-blue-600">info@hajija.com</a>
      </div>
      <div className="flex items-center mb-2">
        <span className="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v18H3V3z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" />
          </svg>
        </span>
        <span className="text-lg">تهران، جردن خیابان مطهری، رو به بانک پارسیان</span>
      </div>
    </div>
  );
};

export default ContactUs;