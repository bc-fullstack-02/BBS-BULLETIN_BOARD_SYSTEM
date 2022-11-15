function eventos(){
    return(
        <div>
            <form action="">
                <input type="text" name="nome" id="nome" placeholder="Nome"/>
                <input type="text" name="idade" id="idade" placeholder="Idade"/>
                <input type="text" name="cidade" id="cidade" placeholder="Cidade"/>
                <input type="text" name="estado" id="estado" placeholder="Estado"/>
                <input type="text" name="pais" id="pais" placeholder="Pais"/>
                <input type="text" name="id" id="id" placeholder="ID"/>
                <button  type="submit" onClick={cadastrar}>Cadastrar</button>
            </form>
           
        </div>
    
    )
}
function cadastrar(){
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const cidade = document.getElementById("cidade").value;
    const estado = document.getElementById("estado").value;
    const pais = document.getElementById("pais").value;
    const id = document.getElementById("id").value;
    const pessoa = {
        nome: nome,
        idade: idade,
        cidade: cidade,
        estado: estado,
        pais: pais,
        id: id
    }
    document.write(pessoa.nome + " " + pessoa.idade + " " + pessoa.cidade + " " + pessoa.estado + " " + pessoa.pais + " " + pessoa.id);
    //a ideia aqui e usar um formulario nesse estilo so que com mais dados e mostrando s eo usuario esta ativo ou nao
    
}  

export default eventos;