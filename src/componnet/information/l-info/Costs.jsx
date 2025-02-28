

export default function Costs() {
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        <div className="bg-blue-100 p-2 rounded-lg">
          <span className="text-blue-600 font-bold">01 نفر</span>
        </div>
      </div>
      <div className="text-gray-700">
        مبلغ نفر اضافه:{" "}
        <span className="text-gray-900 font-bold">2,000,000 تومان</span>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="text-center">
        <span className="block text-gray-500">تیم شارژ ورود هتل:</span>
        <span className="font-bold">2,750,000 تومان</span>
      </div>
      <div className="text-center">
        <span className="block text-gray-500">تیم شارژ خروج هتل:</span>
        <span className="font-bold">2,750,000 تومان</span>
      </div>
    </div>
  </div>
  )
}
