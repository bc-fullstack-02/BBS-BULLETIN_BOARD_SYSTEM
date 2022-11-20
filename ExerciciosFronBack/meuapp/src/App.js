import './App.css';
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes,Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Usuarios from "./pages/usuarios";

export default function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Contato" element={<Contato/>}/>
                    <Route path="/usuarios" element={<Usuarios/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
