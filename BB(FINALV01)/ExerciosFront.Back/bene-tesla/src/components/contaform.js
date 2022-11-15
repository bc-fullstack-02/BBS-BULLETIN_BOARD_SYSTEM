import './conta.module.css';
function conta() {
    return (
        <div>
            <h1>Criar conta</h1>
            <form>
                <label>Nome</label>
                <input type="text" name="nome" id="nome" placeholder="Digite seu nome"></input>
                <label>Email</label>
                <input type="email" name="email" id="email" placeholder="Digite seu email"></input>
                <label>Senha</label>
                <input type="password" name="senha" id="senha" placeholder="Digite sua senha"></input>
                <input type="password" name="senha" id="senha2" placeholder="Confirme sua senha"></input>
                <button type="submit" onClick={criarConta}>Criar conta</button>
            </form>
        </div>
    )
}
function criarConta() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const senha2 = document.getElementById("senha2").value;
    //verificar se as senhas sao iguais
    if (senha !== senha2) {
        alert("As senhas não são iguais");
    } else {
        alert("Conta criada com sucesso");
    }
    //verificar se o email  conte  @
    if (email.indexOf("@") === -1) {
        alert("Email inválido");
    } else {
        alert("Email válido");
    }
    //verificar se o nome tem mais de 3 caracteres
    if (nome.length < 3) {
        alert("Nome inválido");
    }
    else {
        alert("Nome válido");
    }

}


export default conta;