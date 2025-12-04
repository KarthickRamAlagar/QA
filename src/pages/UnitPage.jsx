import { useParams } from "react-router-dom";
import { useState } from "react";
import { units } from "../data/unitsData.js";
import FormulaCard from "../components/FormulaCard.jsx";
import QuestionItem from "../components/QuestionItem.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import Header from "../components/LandingPage/Header.jsx";
export default function UnitPage() {
  const { unitName } = useParams();
  const unit = units.find((u) => u.route === unitName);

  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 10;

  if (!unit) {
    return (
      <div className="min-h-screen grid place-items-center bg-base-900">
        <div className="glass p-6">
          <div className="text-xl font-semibold">Unit not found</div>
          <div className="text-slate-300 mt-2">
            Check route like /Apptitude/Unit-I
          </div>
        </div>
      </div>
    );
  }

  // Pagination logic
  const indexOfLast = currentPage * questionsPerPage;
  const indexOfFirst = indexOfLast - questionsPerPage;
  const currentQuestions = unit.questions.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(unit.questions.length / questionsPerPage);

  return (
    <div className="min-h-screen px-4 md:px-8 py-10 bg-base-900">
      <Header />
      <header className="mb-8 mt-5 ml-3">
        <h1 className="text-3xl md:text-4xl font-bold">{unit.title}</h1>
        <p className="mt-2 text-slate-300 text-lg">{unit.description}</p>
      </header>

      <SectionHeader title="QuickFormulas" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-10">
        {unit.cards.map((c, idx) => (
          <FormulaCard
            key={idx}
            title={c.title}
            items={c.items}
            color={c.color}
          />
        ))}
      </div>

      <SectionHeader
        title="MCQs with answers"
        subtitle="Click More info to view the explanation in a readable style"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {currentQuestions.map((q) => (
          <QuestionItem key={q.qno} q={q} />
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center items-center mt-8 space-x-2">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
          className="px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 disabled:opacity-40"
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded-md ${
              currentPage === i + 1
                ? "bg-indigo-500 text-white"
                : "bg-white/10 hover:bg-white/20"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
          className="px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
}
