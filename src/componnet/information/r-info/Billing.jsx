

function PaymentSummary() {
  return (
    <div className="relative max-w-sm mx-auto border border-blue-400 rounded-lg p-4 bg-white shadow-md">
      
      <div className="absolute -left-3 top-10 w-6 h-6 bg-white border border-blue-400 rounded-full overflow-hidden">
      </div>
      <div className="absolute -right-3 top-10 w-6 h-6 bg-white border border-blue-400 rounded-full overflow-hidden">
      </div>

      {/* عنوان */}
      <h2 className="text-right text-lg font-bold text-gray-800 mb-2">
        صورت‌حساب پرداختی
      </h2>

      {/* خط تکه‌تکه */}
      <div className="border-t border-dashed border-gray-300 mb-4"></div>

      {/* آیتم‌های صورت‌حساب */}
      <div className="text-right text-sm text-gray-600 space-y-2">
        <div className="flex justify-between">
          <span>قیمت کل ۳ شب</span>
          <span className="font-bold text-gray-800">۱۵,۰۰۰,۰۰۰ تومان</span>
        </div>
        <div className="flex justify-between">
          <span>مبلغ کسر شده کد تخفیف</span>
          <span className="font-bold text-gray-800">۲,۰۰۰,۰۰۰ تومان</span>
        </div>
        <div className="flex justify-between">
          <span>مالیات و حق سرویس</span>
          <span className="font-bold text-gray-800">۵۰۰,۰۰۰ تومان</span>
        </div>
      </div>

      {/* دکمه پرداخت */}
      <div className="mt-6">
        <button className="w-full py-3 bg-green-500 text-white font-bold rounded-md hover:bg-green-600">
          <span>مجموع مبلغ پرداختی</span>
          <span className="mr-2">۱۸,۵۰۰,۰۰۰ تومان</span>
        </button>
      </div>
    </div>
  );
}

export default PaymentSummary;