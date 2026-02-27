import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import ExecutiveDashboard from "./pages/ExecutiveDashboard";
import OfficerPortal from "./pages/OfficerPortal";
import CitizenPortal from "./pages/CitizenPortal";
import Blueprint from "./pages/Blueprint";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/executive" element={<ExecutiveDashboard />} />
        <Route path="/officer" element={<OfficerPortal />} />
        <Route path="/citizen" element={<CitizenPortal />} />
        <Route path="/blueprint" element={<Blueprint />} />
        {/* Add GIS route later if needed, or embed in Executive */}
      </Routes>
    </BrowserRouter>
  );
}
