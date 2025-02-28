

export default function InfoUser() {
  return (
   <>
    <div className="mb-6 border-b pb-4">
    <h2 className="text-blue-600 font-bold text-lg mb-4">
      اطلاعات رزرو کننده
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <input
        type="text"
        placeholder="نام و نام خانوادگی رزرو کننده"
        className="p-3 border border-gray-300 rounded-lg focus:outline-blue-500 w-full"
      />
      <input
        type="text"
        placeholder="موبایل رزرو کننده"
        className="p-3 border border-gray-300 rounded-lg focus:outline-blue-500 w-full"
      />
      <input
        type="text"
        placeholder="کد ملی (اختیاری)"
        className="p-3 border border-gray-300 rounded-lg focus:outline-blue-500 w-full"
      />
    </div>
  </div>
  </>
  )
}
