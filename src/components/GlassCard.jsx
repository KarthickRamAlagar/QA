import { motion } from "framer-motion";

export default function GlassCard({ children, className = "", onClick }) {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`glass card-hover p-4 ${className}`}
    >
      {children}
    </motion.div>
  );
}
