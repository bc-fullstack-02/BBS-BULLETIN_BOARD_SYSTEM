import React from "react";
import logo from '../../IMG/logo.png';
function Home() {
  return (
    <>
      <nav>
        <div className="navConteudo">
          <img src={logo} alt=" Logo da nossa aplicacao" />
          <h1>B-B-S</h1>
          <button>LOGIN</button>

        </div>
      </nav>
      <section className="input-section">
        <form>
          <h1>PESQUISAR</h1>
          <div className="input-group">
            <label user="users">Usuarios :</label>
            <input type="text" id="users" placeholder="Nome do usuario" />
            <label user="repos">Repositorios :</label>
            <input type="text" id="repos" placeholder="Nome do repositorio" />
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
          <div className="card">
            <h2>NOME USUARIO</h2>
            <h3>Repositorios</h3>
            <div className="information">
              <img src={""} alt="" />
              <p>Contato</p>
            </div>
          </div>
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