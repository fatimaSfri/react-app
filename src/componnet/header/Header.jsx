
const Header = () => {
   

   
      return (
        <div className="flex flex-col " dir="rtl">
          {/* بخش بالا برای سایز PC */}
          <header className="bg-white border border-red-900 h-20 p-4 flex justify-between items-center">
            <div className='w-40 max-md:hidden'>
              <img src="./img/HAJIJA.png" alt=""  className="px-3"/>
            </div>
            <div className='bg-gray-200 rounded-lg px-1 w-5/12 flex p-1 items-center max-md:hidden'>
            <ul className="flex items-center justify-evenly w-full font-bold mx-2">
  <li>صفحه اصلی</li>
  <div className="border-l border-gray-500 h-5 mx-2"></div>
  <li>اقامتگاه</li>
  <div className="border-l border-gray-500 h-5 mx-2"></div>
  <li>مقالات</li>
  <div className="border-l border-gray-500 h-5 mx-2"></div>
  <li>راه های ارتباطی</li>
</ul>
              <div className='w-12'><img src="./img/Group 1895.png" alt="" /></div>
            </div>
              <div className='w-[180px] border border-blue-900 bg-[#007AFF] flex items-center justify-evenly max-md:hidden rounded-lg m-4 py-3 '>
                <p className="text-white">ساشا آذرخش آلوچه</p>
                <img src="./img/icon/arrow-left.svg" alt="" className='w-4'/>
              </div>
              <div className='md:hidden w-full flex justify-center items-center'>
                <img src="./img/Group 2761.png" alt=""  className='min-w-[200px] max-w-[250px] p-4'/>
              </div>

          </header>
    
         
         
    
          {/* بخش پایین برای سایز موبایل و تبلت */}
          <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-md p-2 flex justify-around md:hidden z-10 ">
            <button className="flex flex-col items-center">
              <span>👤</span>
              <span>ورود/ثبت‌نام</span>
            </button>
            <button className="flex flex-col items-center">
              <span>🛠️</span>
              <span>خدمات دیگر</span>
            </button>
            <button className="flex flex-col items-center">
              <span>❤️</span>
              <span>علاقه‌مندی‌ها</span>
            </button>
            <button className="flex flex-col items-center">
              <span>🏠</span>
              <span>خانه</span>
            </button>
          </footer>
        </div>
      );
    };
    
    

export default Header;