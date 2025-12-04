import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import UnitPage from "./pages/UnitPage.jsx";

export default function App() {
  return (
    <BrowserRouter basename="/QA">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/:unitName" element={<UnitPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
