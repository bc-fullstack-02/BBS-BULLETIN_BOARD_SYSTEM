import React from "react";
import { Link } from "react-router-dom";
import logo from '../../IMG/logo.png';

function Cadastrar({ setIsLogin }) {
    function verificarsenha(params) {
        const senha = document.getElementById("senha").value;
        const confirmaSenha = document.getElementById("confirmaSenha").value;
        const DisdableCADA = document.getElementById("DisdableCADA");
        if (senha === confirmaSenha) {
            DisdableCADA.disabled = false;
        }
        else {

            DisdableCADA.disabled = true;
        }
    }


    return (
        <div className="Background">
            <div className="modal">
                <h1>BEM VINDO</h1>
                <img src={logo} alt="Logo" />
                <form >
                    <input type="text" name="name" id="name" placeholder="Digite seu nome" required />
                    <input type="text" name="Sobrenome" placeholder="Digite seu sobrenome" required />
                    <input type="text" name="email" id="email" placeholder="Digite seu email" required />
                    <input type="password" name="senha" id="senha" placeholder="Digite sua senha" required />
                    <input type="password" name="confirmaSenha" id="confirmaSenha" placeholder="Confirme sua senha" required />
                    <button id="DisdableCADA" onClick={verificarsenha}>CADASTRAR</button><br></br>
                    <div className="Cadastro">
                        <Link onClick={setIsLogin}>JA TENHO CONTA</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Cadastrar;