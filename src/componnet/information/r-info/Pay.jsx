import React, { useState } from "react";

function PaymentOptions() {
  const [selectedOption, setSelectedOption] = useState("wallet");

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      {/* گزینه ۱: پرداخت از کیف پول */}
      <div
        className={`p-4 mb-4 border rounded-lg ${
          selectedOption === "wallet" ? "border-blue-500 bg-blue-50" : "border-gray-300"
        }`}
        onClick={() => setSelectedOption("wallet")}
      >
        <div className="flex items-center justify-between">
          <span className="text-gray-700 font-medium">پرداخت از کیف پول</span>
          <div className="flex items-center gap-3">
            <button
              className={`text-sm px-4 py-1 rounded-md ${
                selectedOption === "wallet"
                  ? "bg-blue-100 text-blue-500 border border-blue-500"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              انتخاب شد
            </button>
            <input
              type="checkbox"
              checked={selectedOption === "wallet"}
              readOnly
              className="w-5 h-5 text-blue-500 border border-gray-300 rounded-md focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* گزینه ۲: پرداخت از درگاه امن */}
      <div
        className={`p-4 mb-4 border rounded-lg ${
          selectedOption === "gateway" ? "border-blue-500 bg-blue-50" : "border-gray-300"
        }`}
        onClick={() => setSelectedOption("gateway")}
      >
        <div className="flex items-center justify-between">
          <span className="text-gray-700 font-medium">
            پرداخت از درگاه پرداخت امن (زرین‌پال)
          </span>
          <div className="flex items-center gap-3">
            <button
              className={`text-sm px-4 py-1 rounded-md ${
                selectedOption === "gateway"
                  ? "bg-blue-100 text-blue-500 border border-blue-500"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              {selectedOption === "gateway" ? "انتخاب شد" : "قفل می‌باشد"}
            </button>
            <input
              type="checkbox"
              checked={selectedOption === "gateway"}
              readOnly
              className="w-5 h-5 text-blue-500 border border-gray-300 rounded-md focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* دکمه تایید */}
      <button
        className="w-full bg-blue-500 text-white py-3 rounded-lg font-bold hover:bg-blue-600 transition"
        onClick={() =>
          alert(
            `روش پرداخت انتخابی: ${
              selectedOption === "wallet" ? "کیف پول" : "درگاه امن"
            }`
          )
        }
      >
        تایید نهایی پرداخت
      </button>
    </div>
  );
}

export default PaymentOptions;