import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Notificacao from "../pages/Notificacao";
import Notificado from "../pages/Notificado";
import Validacao from "../pages/Validacao";
import Dashboard from "../pages/Dashboard";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/notificacao" element={<Notificacao />} />
      <Route path="/notificado/:notificacaoId" element={<Notificado />} />
      <Route path="/validacao" element={<Validacao />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
