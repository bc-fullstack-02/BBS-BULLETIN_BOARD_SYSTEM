import './App.css';
import {BrowserRouter, Routes,Route,Link} from "react-router-dom";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Usuarios from "./pages/usuarios";
import Container from './Layout/Container';
import Navbar from './Layout/navbar';
import Footer from './Layout/footer';
import Us from './Layout/user';

export default function App() {
    return (
     
        <BrowserRouter>
            <Navbar />
            <Container>              
                <Routes>
                    
                    <Route exact path="/" element={<Home />} />
                    <Route path="/usar" element={<Us />} />
                    <Route path="/contato" element={<Contato />} />
                    <Route path="/usuarios" element={<Usuarios />} />
                </Routes>
            </Container>
            <Footer/>
        </BrowserRouter>
    );
}

