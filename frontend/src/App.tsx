import { Routes, Route } from "react-router-dom";
import Cadastro from "./components/Cadastro";
import Login from "./components/Login";
import ListaUsuarios from "./components/ListaUsuarios"; // Página de listagem

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/usuarios" element={<ListaUsuarios />} />
    </Routes>
  );
}
