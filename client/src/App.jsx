//======PAQUETES Y LIBRERIAS
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//======IMPORTACIONES DE COMPONENTES
import CheckoutForm from "./components/Premium/CheckoutForm";
import Admin from "./pages/Admin";
import ChatRoom from "./pages/ChatRoom/ChatRoom";
import Desktop from "./pages/Desktop/Desktop";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";

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
        <Route path="/stripe" element={<CheckoutForm />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
};
