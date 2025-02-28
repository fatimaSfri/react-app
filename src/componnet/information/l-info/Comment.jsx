
export default function Comment() {
  return (
    <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-red-600 font-bold text-lg">نظر اضافه مسافر</h2>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
              حذف
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="نام و نام خانوادگی نظر اضافه"
              className="p-3 border border-gray-300 rounded-lg focus:outline-blue-500 w-full"
            />
            <input
              type="text"
              placeholder="کد ملی (عدد لاتین وارد شود)"
              className="p-3 border border-gray-300 rounded-lg focus:outline-blue-500 w-full"
            />
          </div>
        </div>
  )
}
