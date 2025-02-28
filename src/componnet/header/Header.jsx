
const Header = () => {
   

   
      return (
        <div className="flex flex-col " dir="rtl">
          {/* بخش بالا برای سایز PC */}
          <header className="bg-white border border-red-900 h-20 p-4 flex justify-between items-center">
            <div className='w-40 max-md:hidden'>
              <img src="./img/HAJIJA.png" alt="" />
            </div>
            <div className='bg-gray-400 rounded-2xl p-2 flex  items-center justify-between max-md:hidden'>
              <div className='flex items-center justify-between p-4'>
                <div>صفحه ی اصلی</div>
                <div>اقامتگاه</div>
                <div>مقالات</div>
                <div>راه های ارتباطی </div>
              </div>
              <div className='w-10'><img src="./img/Group 1895.png" alt="" /></div>
            </div>
              <div className='w-4/12 border border-red-900 bg-blue-400 flex items-center justify-center max-md:hidden '>
                <p>ساشا آذرخش آلوچه</p>
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