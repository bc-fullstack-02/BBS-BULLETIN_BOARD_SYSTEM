import react from 'react';
import logo from '../../IMG/logo.png';
function navbar(){
    return(
        <nav>
            <div className="navConteudo">
                <img src={logo} alt=" Logo da nossa aplicacao" />
                <h1>B-B-S</h1>
                <button>LOGIN</button>

            </div>
        </nav>
    )
}
export default navbar;