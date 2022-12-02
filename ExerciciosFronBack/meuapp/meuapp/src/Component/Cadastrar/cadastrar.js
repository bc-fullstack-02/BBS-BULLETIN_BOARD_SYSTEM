import React from "react";

function Cadastrar() {
    return (
        <div className="Background">
            <div className="modal">
                <h1>CADASTRAR</h1>
                <form>
                    <input type="text" name="name" id="name" placeholder="Digite seu nome" required />
                    <input type="text" name="email" id="email" placeholder="Digite seu email" required />
                    <input type="password" name="password" id="password" placeholder="Digite sua senha" required />
                    <button>CADASTRAR</button><br></br>
                </form>
            </div>
        </div>
    )
}
export default Cadastrar;