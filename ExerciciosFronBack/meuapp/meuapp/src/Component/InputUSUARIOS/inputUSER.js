import React from 'react';
import CardUser from "../../Component/CardUSER/usercard";
function inputUSER() {
    return (
        
        <>
            <section className="input-section">
                <form>
                    <h1>Adicionar Usuarios</h1>
                    <div className="input-group">
                        <input type="text" name="name" id="name" placeholder="Digite o nome do usuario" />
                        <select name="type" id="type">
                            <option>
                                Selecione o tipo de Tarefa
                            </option>
                            <option value="1">Cria sistema de Login</option>
                            <option value="2">Criar o Backend da Aplicacao</option>
                            <option value="3">Criar o Frontend da Aplicacao</option>
                            <option value="4">Criar o Banco de Dados</option>
                            <option value="5">Manutencao no banco de Dados</option>
                            <option value="6">Manutencao no Frontend</option>
                            <option value="7">Manutencao no Backend</option>
                            <option value="8">Manutencao no Sistema de Login</option>
                        </select>
                    </div>
                    <button type="submit">Adicionar</button>
                </form>
                
            </section>
            <CardUser />
            <CardUser />
            <CardUser />
            <CardUser />
            <CardUser />
            <CardUser /> 
            </>
    );
}
export default inputUSER;