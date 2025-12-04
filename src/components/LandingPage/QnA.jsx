import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
const QnA = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      q: "What does this site do?",
      a: "It provides aptitude practice with formulas, MCQs, and explanations in an animated, responsive UI.",
    },
    {
      q: "How are the units organized?",
      a: "Units are grouped by topic: Mathematical Ability, Logical Reasoning, Language Ability, Indian Economy, and Current Affairs.",
    },
    {
      q: "Can I view explanations?",
      a: "Yes, each MCQ has a 'More info' button to reveal a clear explanation.",
    },
  ];
  return (
    <section className="px-4 md:px-8 py-2 md:py-10">
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="p-4">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full text-left font-bold flex justify-between items-center  text-lg md:text-2xl
                     transition-all duration-300
                     hover:bg-white/10 hover:backdrop-blur-md hover:shadow-lg rounded hover:p-8 hover:rounded-lg"
            >
              {faq.q}
              <span className="flex items-center justify-center w-8 h-8 bg-white text-blue-500 text-2xl rounded-full shadow">
                {openIndex === i ? "−" : "+"}
              </span>
            </button>

            {openIndex === i && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-2 text-slate-300"
              >
                {faq.a}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default QnA;
