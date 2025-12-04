import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function QuestionItem({ q }) {
  const [open, setOpen] = useState(false);
  const correct = q.answerIndex;

  return (
    <div className="glass p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-md text-slate-200">Q.{q.qno}</div>
          <div className="font-bold mt-1 text-xl">{q.question}</div>
          <div className="mt-3 grid sm:grid-cols-2 gap-2">
            {q.options.map((opt, idx) => {
              const isCorrect = idx === correct;
              return (
                <div
                  key={idx}
                  className={`rounded-md px-3 py-2 text-lg  border ${
                    isCorrect
                      ? "border-green-400 bg-green-400/10 text-green-200"
                      : "border-white/15 bg-white/5 text-slate-200"
                  }`}
                >
                  {String.fromCharCode(97 + idx)}). {opt}
                </div>
              );
            })}
          </div>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="shrink-0 inline-flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 px-3 py-2 text-sm font-medium"
        >
          More info
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -6 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            className="mt-4 rounded-lg bg-white/5 p-4"
          >
            <div className="expl-text">{q.explanation}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
