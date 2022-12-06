 
//import scss de style 
import css from './main.scss';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';

import Home from './Inicio/Home';
import Login from './Inicio/login';
import Perfil from './Inicio/Perfil';

function App() {

 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/perfil" element={<Perfil/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
