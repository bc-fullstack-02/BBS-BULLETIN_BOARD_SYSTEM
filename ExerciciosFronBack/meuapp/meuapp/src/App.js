/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./pages/Inicio/home";
import Dash from "./pages/Dash/dash";
import Rotas from "./pages/routes/rotas";
import css from "./styles/main.scss";
export default function App() {
  return (

    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dash" element={<Dash />} />
        <Route path="*" element={<Rotas />} />
      </Routes>
    </BrowserRouter>
  );
}

