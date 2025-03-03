// // import React, { useState } from "react";

// // // سوالات و گزینه‌ها
// // const questions = [
// //   { id: 1, text: "سوال ۱: رنگ مورد علاقه شما چیست؟", options: ["قرمز", "آبی", "سبز"] },
// //   { id: 2, text: "سوال ۲: حیوان مورد علاقه شما چیست؟", options: ["سگ", "گربه", "پرنده"] },
// //   { id: 3, text: "سوال ۳: فصل مورد علاقه شما چیست؟", options: ["بهار", "تابستان", "پاییز"] },
// //   { id: 4, text: "سوال ۴: غذای مورد علاقه شما چیست؟", options: ["پیتزا", "سوشی", "سالاد"] },
// // ];

// // // تمام محصولات مرتبط با ترکیب‌های پاسخ‌ها
// // const products = {};
// // for (let i = 0; i < 3; i++) {
// //   for (let j = 0; j < 3; j++) {
// //     for (let k = 0; k < 3; k++) {
// //       for (let l = 0; l < 3; l++) {
// //         products[`${i},${j},${k},${l}`] = `محصول ${i + 1}-${j + 1}-${k + 1}-${l + 1}`;
// //       }
// //     }
// //   }
// // }

// // // استایل‌ها برای ظاهر زیبا
// // const styles = {
// //   container: {
// //     fontFamily: "Arial, sans-serif",
// //     maxWidth: "600px",
// //     margin: "0 auto",
// //     padding: "20px",
// //     textAlign: "center",
// //   },
// //   question: {
// //     marginBottom: "20px",
// //   },
// //   option: {
// //     display: "block",
// //     margin: "10px auto",
// //     padding: "10px 20px",
// //     fontSize: "16px",
// //     cursor: "pointer",
// //     border: "2px solid #007bff",
// //     borderRadius: "5px",
// //     backgroundColor: "#f9f9f9",
// //     color: "#007bff",
// //     transition: "background-color 0.3s, color 0.3s",
// //   },
// //   selectedOption: {
// //     backgroundColor: "#007bff",
// //     color: "#fff",
// //   },
// //   product: {
// //     marginTop: "30px",
// //     fontSize: "24px",
// //     fontWeight: "bold",
// //     color: "#28a745",
// //   },
// // };

// // const Questionnaire = () => {
// //   const [answers, setAnswers] = useState([null, null, null, null]);

// //   // تابع برای تغییر پاسخ‌ها
// //   const handleAnswerChange = (questionIndex, optionIndex) => {
// //     const newAnswers = [...answers];
// //     newAnswers[questionIndex] = optionIndex;
// //     setAnswers(newAnswers);
// //   };

// //   // بررسی آیا همه سوالات پاسخ داده شده‌اند
// //   const isComplete = answers.every((answer) => answer !== null);

// //   // محصول انتخاب شده بر اساس پاسخ‌ها
// //   const selectedProduct = isComplete ? products[answers.join(",")] : null;

// //   return (
// //     <div style={styles.container}>
// //       <h1>پرسشنامه انتخاب محصول</h1>
// //       {questions.map((question, qIndex) => (
// //         <div key={question.id} style={styles.question}>
// //           <h3>{question.text}</h3>
// //           {question.options.map((option, oIndex) => (
// //             <button
// //               key={oIndex}
// //               style={{
// //                 ...styles.option,
// //                 ...(answers[qIndex] === oIndex && styles.selectedOption),
// //               }}
// //               onClick={() => handleAnswerChange(qIndex, oIndex)}
// //             >
// //               {option}
// //             </button>
// //           ))}
// //         </div>
// //       ))}
// //       {isComplete && (
// //         <div style={styles.product}>
// //           <p>محصول پیشنهادی برای شما:</p>
// //           <p>{selectedProduct}</p>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Questionnaire;



// import React, { useState } from "react";

// // سوالات و گزینه‌ها
// const questions = [
//   { id: 1, text: "سوال ۱: رنگ مورد علاقه شما چیست؟", options: ["قرمز", "آبی", "سبز"] },
//   { id: 2, text: "سوال ۲: حیوان مورد علاقه شما چیست؟", options: ["سگ", "گربه", "پرنده"] },
//   { id: 3, text: "سوال ۳: فصل مورد علاقه شما چیست؟", options: ["بهار", "تابستان", "پاییز"] },
//   { id: 4, text: "سوال ۴: غذای مورد علاقه شما چیست؟", options: ["پیتزا", "سوشی", "سالاد"] },
// ];

// // محصولات مرتبط با ترکیب‌های پاسخ‌ها
// const products = {
//   "0,0,0,0": {
//     name: "محصول ۱",
//     description: "این محصول برای افرادی است که رنگ قرمز، حیوان سگ، فصل بهار و غذای پیتزا را دوست دارند.",
//     image: "https://via.placeholder.com/300",
//   },
//   "0,0,0,1": {
//     name: "محصول ۲",
//     description: "این محصول برای افرادی است که رنگ قرمز، حیوان سگ، فصل بهار و غذای سوشی را دوست دارند.",
//     image: "https://via.placeholder.com/300",
//   },
//   // سایر ترکیب‌ها را اینجا اضافه کنید
//   // برای سادگی، فقط دو حالت اول را تعریف کرده‌ام
// };

// const Questionnaire = () => {
//   const [answers, setAnswers] = useState([null, null, null, null]);

//   // تابع برای تغییر پاسخ‌ها
//   const handleAnswerChange = (questionIndex, optionIndex) => {
//     const newAnswers = [...answers];
//     newAnswers[questionIndex] = optionIndex;
//     setAnswers(newAnswers);
//   };

//   // بررسی آیا همه سوالات پاسخ داده شده‌اند
//   const isComplete = answers.every((answer) => answer !== null);

//   // محصول انتخاب شده بر اساس پاسخ‌ها
//   const selectedProduct = isComplete ? products[answers.join(",")] : null;

//   return (
//     <div className="min-h-screen bg-gray-100 py-8 px-4">
//       <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
//         <h1 className="text-2xl font-bold text-center mb-6">پرسشنامه انتخاب محصول</h1>
//         {questions.map((question, qIndex) => (
//           <div key={question.id} className="mb-6">
//             <h3 className="text-lg font-semibold mb-2">{question.text}</h3>
//             <div className="space-y-2">
//               {question.options.map((option, oIndex) => (
//                 <button
//                   key={oIndex}
//                   className={`w-full py-2 px-4 rounded-lg transition-colors ${
//                     answers[qIndex] === oIndex
//                       ? "bg-blue-500 text-white"
//                       : "bg-gray-200 hover:bg-gray-300"
//                   }`}
//                   onClick={() => handleAnswerChange(qIndex, oIndex)}
//                 >
//                   {option}
//                 </button>
//               ))}
//             </div>
//           </div>
//         ))}
//         {isComplete && selectedProduct && (
//           <div className="mt-8 text-center">
//             <h2 className="text-xl font-bold mb-4">محصول پیشنهادی برای شما:</h2>
//             <div className="bg-gray-50 p-4 rounded-lg">
//               <img
//                 src={selectedProduct.image}
//                 alt={selectedProduct.name}
//                 className="w-48 h-48 mx-auto mb-4 rounded-lg"
//               />
//               <h3 className="text-lg font-semibold">{selectedProduct.name}</h3>
//               <p className="text-gray-600 mt-2">{selectedProduct.description}</p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Questionnaire;




import React, { useState } from "react";

// سوالات و گزینه‌ها
const questions = [
  { id: 1, text: "سوال ۱: رنگ مورد علاقه شما چیست؟", options: ["قرمز", "آبی", "سبز"] },
  { id: 2, text: "سوال ۲: حیوان مورد علاقه شما چیست؟", options: ["سگ", "گربه", "پرنده"] },
  { id: 3, text: "سوال ۳: فصل مورد علاقه شما چیست؟", options: ["بهار", "تابستان", "پاییز"] },
  { id: 4, text: "سوال ۴: غذای مورد علاقه شما چیست؟", options: ["پیتزا", "سوشی", "سالاد"] },
];

// تابع برای تولید خودکار محصولات
const generateProducts = () => {
  const products = {};
  const options = [0, 1, 2]; // گزینه‌های ممکن (0, 1, 2)

  for (let i = 0; i < options.length; i++) {
    for (let j = 0; j < options.length; j++) {
      for (let k = 0; k < options.length; k++) {
        for (let l = 0; l < options.length; l++) {
          const key = `${i},${j},${k},${l}`;
          products[key] = {
            name: `محصول ${i + 1}-${j + 1}-${k + 1}-${l + 1}`,
            description: `این محصول برای افرادی است که گزینه ${questions[0].options[i]} (رنگ)، ${questions[1].options[j]} (حیوان)، ${questions[2].options[k]} (فصل)، و ${questions[3].options[l]} (غذا) را انتخاب کرده‌اند.`,
            image: `https://via.placeholder.com/300?text=محصول+${i + 1}-${j + 1}-${k + 1}-${l + 1}`,
          };
        }
      }
    }
  }

  return products;
};

const products = generateProducts();

const Questionnaire = () => {
  const [answers, setAnswers] = useState([null, null, null, null]);

  // تابع برای تغییر پاسخ‌ها
  const handleAnswerChange = (questionIndex, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  // بررسی آیا همه سوالات پاسخ داده شده‌اند
  const isComplete = answers.every((answer) => answer !== null);

  // محصول انتخاب شده بر اساس پاسخ‌ها
  const selectedProduct = isComplete ? products[answers.join(",")] : null;

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">پرسشنامه انتخاب محصول</h1>
        {questions.map((question, qIndex) => (
          <div key={question.id} className="mb-6">
            <h3 className="text-lg font-semibold mb-2">{question.text}</h3>
            <div className="space-y-2">
              {question.options.map((option, oIndex) => (
                <button
                  key={oIndex}
                  className={`w-full py-2 px-4 rounded-lg transition-colors ${
                    answers[qIndex] === oIndex
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  onClick={() => handleAnswerChange(qIndex, oIndex)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
        {isComplete && selectedProduct && (
          <div className="mt-8 text-center">
            <h2 className="text-xl font-bold mb-4">محصول پیشنهادی برای شما:</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-48 h-48 mx-auto mb-4 rounded-lg"
              />
              <h3 className="text-lg font-semibold">{selectedProduct.name}</h3>
              <p className="text-gray-600 mt-2">{selectedProduct.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Questionnaire;