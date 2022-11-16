import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Home from './components/pages/Home';
import  Contato from './components/pages/Contato';
import Company from './components/pages/Company';
import Clientes from './components/pages/clientes';




function App() {
  return (
    <Router>
      <Routes exact path="/">
        <Home/>
      </Routes>
      <Routes exact path="/contato">
        <Contato/>
      </Routes>
      <Routes exact path="/clientes">
        <Clientes/>
      </Routes>
      <Routes exact path="/company">
        <Company/>
      </Routes>
    </Router>

  );
}

export default App;
