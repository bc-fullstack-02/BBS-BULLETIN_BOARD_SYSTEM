import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Home from "Inicio/Home";
import Login from "Inicio/Login";
import Perfil from "Inicio/Perfil";
import Navbar from "Inicio/Navbar";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "theme";



function App() {
  const  mode  = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
         < CssBaseline />
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/perfil/userId" element={<Perfil />} />
        </Routes>
       
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
