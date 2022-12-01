import React from "react";
import {Outlet,Link} from 'react-router-dom';
function Rotas() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="./home">Home</Link>
          </li>
          <li>
            <Link to="./dash">Dash</Link>
          </li>

        </ul>
      </nav>
      <Outlet />
        
    </>
  );
}
export default Rotas;