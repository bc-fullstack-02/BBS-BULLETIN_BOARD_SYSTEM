import React,{UseContext} from 'react'
import { userContext } from '../../Context/UserContext';
import logo from '../../IMG/logo.png';


function navbar ({ openModal }){
  
    
  
        return(           
                <nav>
                    <div className="navConteudo">
                        <img src={logo} alt=" Logo da nossa aplicacao" />
                        <h1>B-B-S</h1>
                        <button onClick={openModal}>LOGIN</button>
                    </div>
                </nav>
            
        )
}
export default navbar;