import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import UnitPage from "./pages/UnitPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Apptitude" replace />} />
      <Route path="/Apptitude" element={<LandingPage />} />
      <Route path="/Apptitude/:unitName" element={<UnitPage />} />
      <Route path="*" element={<Navigate to="/Apptitude" replace />} />
    </Routes>
  );
}
