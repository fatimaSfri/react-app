

export default function TwoRoom() {
  return (
    <div className="mb-6 border-b pb-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-gray-700 font-bold text-lg">مسافران اتاق 2</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="نام و نام خانوادگی مسافر اصلی"
              className="p-3 border border-gray-300 rounded-lg focus:outline-blue-500 w-full"
            />
            <input
              type="text"
              placeholder="موبایل مسافر اصلی"
              className="p-3 border border-gray-300 rounded-lg focus:outline-blue-500 w-full"
            />
            <input
              type="text"
              placeholder="نام و نام خانوادگی مسافر"
              className="p-3 border border-gray-300 rounded-lg focus:outline-blue-500 w-full"
            />
            <input
              type="text"
              placeholder="موبایل مسافر"
              className="p-3 border border-gray-300 rounded-lg focus:outline-blue-500 w-full"
            />
          </div>
        </div>

  )
}
