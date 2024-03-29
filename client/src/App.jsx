//======PAQUETES Y LIBRERIAS
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//======IMPORTACIONES DE COMPONENTES
import Admin from "./pages/Admin";
import ChatRoom from "./pages/ChatRoom/ChatRoom";
import Desktop from "./pages/Desktop/Desktop";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Subscription from "./pages/Subscription/Subscription";
import DetailPrueba from "./components/Detail/DetailPrueba";
import Terms from "./pages/Terms/Terms";
import MatchTeam from "./pages/MatchTeam/MatchTeam";
import NotFound from "./pages/NotFound/NotFound";
//======IMPORTACIONES DE FUNCIONES NUESTRAS
//======ESTILO E IMAGENES
//import { UIProvider } from "../src/components/Context/ContextUI";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/desktop" element={<Desktop />} />
        <Route path="/chatroom" element={<ChatRoom />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/matchteam" element={<MatchTeam />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/users/:nickname" element={<DetailPrueba />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
