import Off from "../off/Off"

export default function Hotel() {
  return (
    <div className="flex max-md:flex-col items-center justify-around max-md:gap-6">
        <div className="md:w-[420px]  max-md:w-11/12 border flex max-md:mx-auto justify-center">
            <img src="./img/hotel.png" alt="" className=""/>
        </div>
         {/* all */}
        <div className="md:w-8/12 max-md:w-full  border border-red-500 flex flex-col gap-4">
           {/* clock  */}
            <div className="bg-white rounded-2xl flex flex-col border w-full ">
                <div className="border border-red-900">
                    <p> مشخصات رزرو هتل </p>
                </div>
                <div className="w-full border border-green-900 flex max-sm:flex-col">

                <div className="border border-red-900 flex md:w-1/3 max-md:w-full h-20 items-center gap-6 justify-center">
                <div>
                  <img src="./img/icon/clock.png" alt=""  className="h-12" />
                </div>
                <div>
                    <div>تاریخ</div>
                    <div>ساعت</div>
                </div>
                </div>

                <div className="border border-red-900 flex md:w-1/3 max-md:w-full h-20 items-center gap-6 justify-center">
                <div>
                  <img src="./img/icon/clock.png" alt=""  className="h-12" />
                </div>
                <div>
                    <div>تاریخ</div>
                    <div>ساعت</div>
                </div>
                </div>
                
                

                <div className="border border-red-900 flex md:w-1/3 max-md:w-full h-20 items-center gap-6 justify-center">
                <div>
                  <img src="./img/icon/clock.png" alt=""  className="h-12" />
                </div>
                <div>
                    <div>تاریخ</div>
                    <div>ساعت</div>
                </div>
                </div>
                </div>

            <div className="w-full border border-green-900 flex max-sm:flex-col">

                <div className="border border-red-900 flex md:w-1/3 max-md:w-full h-20 items-center gap-6 justify-center">
                <div>
                  <img src="./img/icon/clock.png" alt=""  className="h-12" />
                </div>
                <div>
                    <div>تاریخ</div>
                    <div>ساعت</div>
                </div>
                </div>

                <div className="border border-red-900 flex md:w-1/3 max-md:w-full h-20 items-center gap-6 justify-center">
                <div>
                  <img src="./img/icon/clock.png" alt=""  className="h-12" />
                </div>
                <div>
                    <div>تاریخ</div>
                    <div>ساعت</div>
                </div>
                </div>
                
                

                <div className="border border-red-900 flex md:w-1/3 max-md:w-full h-20 items-center gap-6 justify-center">
                <div>
                  <img src="./img/icon/clock.png" alt=""  className="h-12" />
                </div>
                <div>
                    <div>تاریخ</div>
                    <div>ساعت</div>
                </div>
                </div>
                </div>
                  <div></div>
            </div>
        
           {/* discount */}
            <div className="bg-amber-300 w-full flex justify-between items-center max-sm:flex-col max-sm:gap-6 ">
              <div className="flex flex-col p-4">
                <p>کد تخفیف هتل</p>
                <p>ساشا اذرخش آلوچه عزیز!</p>
                <p> *کد تخفیف معادل (30%) برای اتاق دوبلکس رویال - هتل </p>
              </div>
                <div className="border border-red-900 sm:w-3/12 max-sm:w-full ">
                 <Off></Off>
                </div>


            </div>
        </div>
      
    </div>
  )
}
