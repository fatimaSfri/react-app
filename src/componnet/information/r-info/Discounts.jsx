import React, { useState } from "react";

function DiscountCode() {
  const [discountCode, setDiscountCode] = useState("NMJ2516NJH");
  const [discountAmount, setDiscountAmount] = useState(2000000);

  const handleApplyDiscount = () => {
    alert(`کد تخفیف "${discountCode}" اعمال شد!`);
  };

  return (
    <div className="relative max-w-sm  border border-blue-400 rounded-lg p-4 bg-white shadow-md m-4 mx-6" >
      {/* دکمه‌های تزئینی در کناره‌ها */}
      <div className="absolute -left-3 top-10 w-6 h-6 bg-gray-200  rounded-full"></div>
      <div className="absolute -right-3 top-10 w-6 h-6 bg-gray-200  rounded-full"></div>

      <h2 className="text-right text-lg font-bold text-gray-800 mb-2">
        اعمال کد تخفیف
      </h2>

      {/* خط تکه‌تکه بالای توضیحات */}
      <div className="border-t border-dashed border-gray-300 mb-4"></div>

      <p className="text-right text-sm text-gray-600 mb-4">
        مشترک گرامی کد تخفیف خود را وارد نمایید.
      </p>

      <div className="flex items-center gap-2 mb-4">
        <input
          type="text"
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-md bg-green-100 text-green-800 font-bold text-center outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          onClick={handleApplyDiscount}
          className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
        >
          اعمال کد تخفیف
        </button>
      </div>

      <div className="text-right text-sm text-gray-600">
        <span>مبلغ تخفیف:</span>
        <span className="font-bold text-gray-800 mr-2">
          {discountAmount.toLocaleString()} تومان
        </span>
      </div>
    </div>
  );
}

export default DiscountCode;