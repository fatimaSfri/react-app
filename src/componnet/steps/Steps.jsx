import React, { useState } from 'react';

const steps = [
  "گام اول: مشخصات فردی",
  "گام دوم: پرداخت وجه",
  "گام سوم: تایید نهایی",
  "گام چهارم: دریافت اطلاعات",
];

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <div className="flex flex-col ">
      {/* مراحل برای سایز لپ‌تاپ */}
      <div className="hidden md:flex justify-between items-center p-4 bg-gray-100">
        {steps.map((step, index) => (
          <div key={index} className="step flex-1 text-center p-4 border rounded-lg">
            <span>{step}</span>
          </div>
        ))}
      </div>

      {/* اسلاید برای سایز موبایل */}
      <div className="md:hidden p-4 text-center">
        <div className="border p-4 rounded-lg bg-gray-100">
          <span>{steps[currentStep]}</span>
        </div>
        <div className="flex justify-center mt-2">
          <div className="flex space-x-2">
            {steps.map((_, index) => (
              <div key={index} className={`h-1 ${currentStep === index ? 'bg-blue-500' : 'bg-gray-300'} w-full`} style={{ width: '30px' }}></div>
            ))}
          </div>
        </div>
      </div>

      {/* محتوای اصلی */}
      <main className="flex-grow p-4">
        {/* محتوای شما در اینجا */}
      </main>
    </div>
  );
};

export default App;