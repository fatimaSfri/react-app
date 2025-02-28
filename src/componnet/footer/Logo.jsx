import React from 'react';

const SubscriptionSection = () => {
  return (
    <div className="p-6 bg-gray-100 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-right">شمارتو ثبت کن از تخفیف‌ها خبر دار شو</h2>
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="ثبت شماره تلفن"
          className="border rounded-l-lg p-2 flex-grow"
        />
        <button className="bg-blue-600 text-white rounded-r-lg px-4">
          ثبت شماره
        </button>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-center">
          <img
            src="https://via.placeholder.com/80" // جایگزین با لینک لوگوی شما
            alt="Logo 1"
            className="mb-2"
          />
          
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://via.placeholder.com/80" // جایگزین با لینک لوگوی شما
            alt="Logo 2"
            className="mb-2"
          />
          
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://via.placeholder.com/80" // جایگزین با لینک لوگوی شما
            alt="Logo 3"
            className="mb-2"
          />
          
        </div>
      </div>
      <div className="text-right mt-4">
    
      </div>
    </div>
  );
};

export default SubscriptionSection;