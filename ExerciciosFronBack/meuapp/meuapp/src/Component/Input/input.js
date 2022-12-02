import React from 'react';

function Input() {
    return (
        <section className="input-section">
            <form>
                <h1>Pesquisar Usuarios</h1>
                <div className="input-group">
                    <input type="text" name="name" id="name" placeholder="Digite o nome do usuario" />
                    <input type="text" name="Respository" id="Respository" placeholder="Digite o nome do Respository" />
                </div>
            </form>
        </section>
    );
}
export default Input;