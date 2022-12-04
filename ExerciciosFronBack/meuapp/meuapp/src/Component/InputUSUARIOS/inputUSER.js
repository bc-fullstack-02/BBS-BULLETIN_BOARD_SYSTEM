import React from 'react';

function Input() {
    return (
        <section className="inputUSER">
            <form>
                <h1>Adicionar Usuarios</h1>
                <div className="Usuarios">
                    <input type="text" name="name" id="name" placeholder="Digite o nome do usuario" />
                    <input type="text" name="Respository" id="Respository" placeholder="Digite o nome do Respository" />
                    <button type="submit">Adicionar Usuarios</button>
                </div>
            </form>
        </section>
    );
}
export default Input;