import './pessoa.css';
function Pessoa({nome, idade, cidade, estado, pais}) {
    return (
    <div>
        <p className="nome">Nome: {nome}</p>
        <p className="idade">Idade: {idade}</p>
        <p className="cidade">Cidade: {cidade}</p>
        <p className="estado">Estado: {estado}</p>
        <p className="pais">País: {pais}</p>
    </div>

    );
}
export default Pessoa;