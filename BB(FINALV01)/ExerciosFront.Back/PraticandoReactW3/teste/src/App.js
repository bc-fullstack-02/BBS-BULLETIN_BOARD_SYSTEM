import ReactDom from 'react-dom/client';
import {BrowserRouter, Routes,Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home.js';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Layout>
      <section>
        <h1>Welcome Ao primeiro Crud</h1>
      </section>

    </BrowserRouter>
    
  );
}
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App />);