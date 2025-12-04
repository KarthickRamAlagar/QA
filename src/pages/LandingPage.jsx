import { units } from "../data/unitsData.js";
import UnitCard from "../components/UnitCard.jsx";
import { motion } from "framer-motion";

import Header from "../components/LandingPage/Header.jsx";
import Hero from "../components/LandingPage/Hero.jsx";
import QnA from "../components/LandingPage/QnA.jsx";
import Footer from "../components/LandingPage/Footer.jsx";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-base-900">
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero />

      {/* QnA Section */}
      <QnA />

      {/* Units grid */}
      <section className="px-4 md:px-8 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {units.map((u, idx) => (
            <motion.div
              key={u.key}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <UnitCard unit={u} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
