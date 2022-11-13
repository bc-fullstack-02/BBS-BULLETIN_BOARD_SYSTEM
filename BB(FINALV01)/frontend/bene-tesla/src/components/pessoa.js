function Pessoa(props){
    return (
        <div>
    
        <p className="nome">Nome: {props.name}</p>
        <p className="idade">Idade: {props.idade}</p>
        <p className="cidade">Cidade: {props.cidade}</p>
        <p className="estado">Estado: {props.Estado}</p>
        <p className="pais">País: {props.pais}</p>
        </div>

    );
}
export default Pessoa;