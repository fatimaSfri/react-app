import ResponsiveAccordionMenu from "./ResponsiveMenu"
import About from "./About"
import Logo from "./Logo"

export default function Footer() {
  return (
    <div className="w-full max-md:pb-24 rounded-t-3xl bg-white  mt-10">
        {/* circle */}
       <div className="h-14 w-full  flex md:justify-center max-md:justify-end items-center ">
        <div className="w-20 h-16 rounded-full bg-gray-200 flex items-center justify-center -mt-14 max-md:ml-20">
        <div className="w-10 h-10 border border-[#4156D9] bg-blue-100 rounded-full  flex justify-center items-center ">
            <img src="./img/icon/arrow-circle.png" alt="" className="p-[6px]" />
        </div>
        </div>
       </div>

       {/* section 1 */}
       <div className="border border-red-900 w-full flex">
        <div className="border border-sky-900 md:w-9/12 max-md:full overflow-hidden px-6">
            <h2> داستان جاجیجا چیست؟</h2>
            <p className="max-md:text-[12px] text-justify ">  
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.</p>
        </div>
        <div className="w-3/12 h-[150px] max-md:hidden">
            <img src="./img/Group 189.png" alt="" className="w-full h-full px-10"/>
        </div>
       </div>
       <div className="flex justify-between items-center max-md:flex-col">
      {/* menu */}
       <ResponsiveAccordionMenu></ResponsiveAccordionMenu>

      {/* us */}
      <About></About>

      {/* logo */}
       <Logo></Logo>
      </div>

      <div className="w-11/12 rounded-2xl bg-gray-200 h-20 m-10 flex items-center justify-between">
      <p>تمامی حقوق</p>
      <div className="bg-black w-4/12 h-20 flex justify-center items-center text-white">
      Design & Develop By Sevin Team
      </div>
      </div>
    </div>
  )
}
