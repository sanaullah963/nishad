"use client";

import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "কাজ করবে তো?",
      answer: "✅ ইনশাআল্লাহ ১০০% কাজ করবে ।  ২ থেকে ৩ দিন সেবনের পরেই আপনি বুঝতে পারবেন এটা কাজ করছে কিনা।"
    },
    {
      question: "দাম কত ?",
      answer: "দাম ৬৯৯ টাকা । ডেলিভারি চার্জ  ফ্রি। ",
    },
    {
      question: "কি কি থাকবে?",
      answer: `
      ৩০ পিস ট্যাবলেট।
      ১ কৌটা ক্যালসিয়াম কৌটা ফ্রি`,
    },
    {
      question: "কবে পাবো?",
      answer: "✅ঢাকার ভিতরে ১ দিন ।। ঢাকার বাইরে ২-৩ দিন লাগবে,",
    },
    {
      question: "খাওয়ার নিয়ম?",
      answer: "প্রতিদিন রাতে খাবার পরে ভরা পেটে, ১টি করে ঔষধ সেবন করবেন। কেলসিয়াম টাও রাতে খাবেন।",
    },
    {
      question: "সাইড ইফেক্ট আছে?",
      answer: "🟢একদম প্রাকৃতিক ফর্মুলা, কোনো সাইড ইফেক্ট নেই। এই ট্যাবলেটটি প্রাকৃতিক উপাদানে তৈরি যা সম্পূর্ণ নিরাপদ এবং বহু মানুষ ব্যবহার করে উপকার পেয়েছেন।",
    },
    {
      question: "গ্যাসের ঔষধ খেতে হবে?",
      answer: "এমনিতে লাগবেনা, তবে আপনার যদি গ্যাসের সমসস্যা থাকে তাহলে মাঝে মাঝে খেকেই হবে।",
    },
    {
      question: "কত দিন খেতে হবে?",
      answer: "১ জনের জন্য ১ মাস জথেস্ট।",
    },
    {
      question: "১ কৌটায় কতপিস ক্যালসিয়াম?",
      answer: "৩০ পিস",
    },
    {
      question: "সব কিছু কি একসাথে ৬৯৯ টাকা?",
      answer: "হ্যা!",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-md mx-auto w-full bg-white shadow-lg rounded-md p-1 ">
      
      <div className="space-y-3 ">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg ">
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full flex justify-between  items-center px-4 py-1 text-left font-medium text-gray-800 ${openIndex === index && 'border rounded-lg'} `}
            >
              {faq.question}
              <span className="ml-2 ">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="px-2 text-md pb-3 text-gray-500">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
