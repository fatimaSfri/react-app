import React, { useState } from 'react';

const DiscountCodeComponent = () => {
  const [discountCode] = useState("ABC123"); // کد تخفیف (می‌توانید آن را تغییر دهید)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(discountCode)
      .then(() => {
        alert("کد تخفیف کپی شد!");
      })
      .catch(err => {
        console.error("کپی کردن ناموفق بود:", err);
      });
  };

  return (
    <div className="flex flex-col items-center p-4 space-y-4">
      {/* دکمه نمایش کد تخفیف */}
      <button className="bg-blue-500 text-white px-6 py-3 rounded w-full">
        {discountCode}
      </button>

      {/* دکمه کپی کردن کد تخفیف */}
      <button 
        onClick={copyToClipboard} 
        className="bg-green-500 text-white px-6 py-3 rounded w-full"
      >
        کپی کد تخفیف
      </button>
    </div>
  );
};

export default DiscountCodeComponent;