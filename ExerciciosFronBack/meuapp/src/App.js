import './App.css';
import {BrowserRouter, Routes,Route,Link} from "react-router-dom";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Usuarios from "./pages/usuarios";
import Container from './Layout/Container';

export default function App() {
    return (
     
        <BrowserRouter>
          <div>
            <Link to="/">Home</Link>
            <Link to="contato">Contato</Link>
            <Link to="usuarios">Usuarios</Link>
          </div>
            <Container>              
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/contato" element={<Contato />} />
                    <Route path="/usuarios" element={<Usuarios />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

