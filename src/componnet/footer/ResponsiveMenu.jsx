import  { useState } from 'react';

const ResponsiveAccordionMenu = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-4  border border-red-900">
     <div className='flex max-md:flex-col border border-red-900  p-2 justify-between md:items-center'>
      {/* عنوان‌های منو */}
      <div className="hidden md:block mb-4">
        <h2 className="text-lg font-semibold">راهنمای مشتریان</h2>
        <p>درباره ما</p>
        <p>تماس با ما</p>
        <p> سوالات متداول</p>
        <p>  حقوق کاربران</p>
        <p> قوانین و مقررات </p>
        <p> وبلاگ حاجیجا</p>
      </div>

      <div className="hidden md:block mb-4">
        <h2 className="text-lg font-semibold">محصولات ما</h2>
        <p>درباره ما</p>
        <p>تماس با ما</p>
        <p> سوالات متداول</p>
        <p>  حقوق کاربران</p>
        <p> قوانین و مقررات </p>
        <p> وبلاگ حاجیجا</p>
      </div>

      <div className="hidden md:block mb-4">
        <h2 className="text-lg font-semibold">اقامتگاه</h2>
        <p> شهر تهران</p>
        <p>شهر مشهد </p>
        <p> شهر کردستان</p>
        <p>شهر شیراز </p>
        <p>شهر خوزستان </p>
        <p>شهر تبریز </p>
      </div>

      {/* منوی جمع‌شونده برای موبایل */}
      <div className="md:hidden">
        <div className="border-b mb-2">
          <h2 
            className="flex justify-between items-center cursor-pointer py-4 text-lg font-semibold text-gray-800" 
            onClick={() => toggleAccordion(0)}
          >
            راهنمای مشتریان
            <span>{openIndex === 0 ? '−' : '+'}</span>
          </h2>
          {openIndex === 0 && (
            <div className="pl-4">
              <p>درباره ما</p>
              <p>تماس با ما</p>
              <p>محصولات متنوع</p>
            </div>
          )}
        </div>

        <div className="border-b mb-2">
          <h2 
            className="flex justify-between items-center cursor-pointer py-4 text-lg font-semibold text-gray-800" 
            onClick={() => toggleAccordion(1)}
          >
            محصولات ما
            <span>{openIndex === 1 ? '−' : '+'}</span>
          </h2>
          {openIndex === 1 && (
            <div className="pl-4">
              <p>محصول ۱</p>
              <p>محصول ۲</p>
              <p>محصول ۳</p>
            </div>
          )}
        </div>

        <div>
          <h2 
            className="flex justify-between items-center cursor-pointer py-4 text-lg font-semibold text-gray-800" 
            onClick={() => toggleAccordion(2)}
          >
            اقامتگاه
            <span>{openIndex === 2 ? '−' : '+'}</span>
          </h2>
          {openIndex === 2 && (
            <div className="pl-4">
              <p>امکانات ۱</p>
              <p>امکانات ۲</p>
              <p>امکانات ۳</p>
            </div>
          )}
        </div>
      </div>
      </div>
    </div>
  );
};

export default ResponsiveAccordionMenu;