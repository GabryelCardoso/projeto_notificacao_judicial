import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Notificacao from "../pages/Notificacao";
import Notificado from "../pages/Notificado";
import Validacao from "../pages/Validacao";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/notificacao" element={<Notificacao />} />
      <Route path="/notificado" element={<Notificado />} />
      <Route path="/validacao" element={<Validacao />} />
    </Routes>
  );
}
