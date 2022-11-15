function eventos(){
    return(
        <div>
            <h1>Eventos</h1>
            <button onClick={click}>Clique aqui</button>
        </div>
    )
}
function click(){
    alert("Clicou")
}
export default eventos;