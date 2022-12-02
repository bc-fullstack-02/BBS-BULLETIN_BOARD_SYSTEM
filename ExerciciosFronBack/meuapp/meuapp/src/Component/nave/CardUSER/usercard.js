import React from "react";
function CardUser() {
    return (
        <section className="Users">
            <div className="UsuariosContainer">
                <div className="card">
                    <h2>NOME USUARIO</h2>
                    <h3>Repositorios</h3>
                    <div className="information">
                        <img src={""} alt="" />
                        <p>Contato</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default CardUser;