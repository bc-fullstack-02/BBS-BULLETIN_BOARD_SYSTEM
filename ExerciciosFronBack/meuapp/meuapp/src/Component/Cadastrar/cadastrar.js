import React from "react";
import { Link } from "react-router-dom";

function Cadastrar({ setIsLogin }) {
    return (
        <div className="Background">
            <div className="modal">
                <h1>CRIAR UMA NOVA CONTA</h1>
                
                <form >
                    <input type="text" name="name" id="name" placeholder="Digite seu nome" required />
                    <input type="text" name="Sobrenome" placeholder="Digite seu sobrenome" required />
                    <input type="text" name="email" id="email" placeholder="Digite seu email" required />
                    <input type="password" name="password" id="password" placeholder="Digite sua senha" required />
                    <label>DATA DE NASCIMENTO</label>
                    <input type="date" name="date" id="date" required />
                    <label>SEXO</label>
                    <select name="sexo" id="sexo">
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                        <option value="outro">Outro</option>
                    </select>

                    <button>CADASTRAR</button><br></br>
                    <div className="Cadastro">
                        <Link onClick={setIsLogin}>JA TENHO CONTA</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Cadastrar;