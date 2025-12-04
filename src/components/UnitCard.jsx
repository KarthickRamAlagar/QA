import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
export const units = [
  {
    key: "u1",
    title: "Unit I",
    description: "Basic aptitude concepts",
    route: "unit1",
    color: "from-blue-600/40 to-blue-900/40",
  },
  {
    key: "u2",
    title: "Unit II",
    description: "Reasoning & logic",
    route: "unit2",
    color: "from-pink-600/40 to-pink-900/40",
  },
  {
    key: "u3",
    title: "Unit III",
    description: "Quantitative problems",
    route: "unit3",
    color: "from-green-600/40 to-green-900/40",
  },
  {
    key: "u4",
    title: "Unit IV",
    description: "Data interpretation",
    route: "unit4",
    color: "from-purple-600/40 to-purple-900/40",
  },
  {
    key: "u5",
    title: "Unit V",
    description: "General awareness",
    route: "unit5",
    color: "from-yellow-600/40 to-yellow-900/40",
  },
  {
    key: "u6",
    title: "Unit VI",
    description: "Practice questions",
    route: "unit6",
    color: "from-red-600/40 to-red-900/40",
  },
];

export default function UnitCard({ unit }) {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="rounded-xl overflow-hidden"
    >
      {/* Gradient background layer */}
      <div className={`bg-gradient-to-br ${unit.color} p-5`}>
        {/* Glass inner layer */}
        <div className="glass p-5 rounded-xl">
          <h3 className="text-xl font-semibold">{unit.title}</h3>
          <p className="text-md text-slate-300 mt-2">{unit.description}</p>

          <button
            onClick={() => navigate(`/Apptitude/${unit.route}`)}
            className="mt-4 inline-flex items-center justify-center
        rounded-md bg-white/10 hover:bg-white/20 px-4 py-2 text-md font-medium"
          >
            More info
          </button>
        </div>
      </div>
    </motion.div>
  );
}
