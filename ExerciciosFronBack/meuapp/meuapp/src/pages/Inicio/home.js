import React from "react";
import Nav from "../../Component/nave/navbar";
function Home() {
  return (
    <>
      <Nav />
      <section className="input-section">
    <form>
      <h1>Pesquisar Usuarios</h1>
      <div className="input-group">
           <input type="text" name="name" id="name" placeholder="Digite o nome do usuario" />
            <input type="text" name="Respository" id="Respository" placeholder="Digite o nome do Respository" />
      </div>
    </form>
      </section>
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
    </>
  );
}
export default Home;