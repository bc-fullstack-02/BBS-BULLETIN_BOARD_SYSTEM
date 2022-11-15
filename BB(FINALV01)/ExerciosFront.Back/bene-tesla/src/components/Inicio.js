import './inicio.module.css';
function Inicio(){
    return(
        <div>
            <h1>Bulletin board System</h1>
            <p>Este é um sistema de mensagens</p>
            <article>
                <h2>Como funciona?</h2>
                <p id="sis">Este sistema funciona da seguinte forma:</p>
                <ul>
                    <li>1. Você pode criar uma conta</li>
                    <li>2. Você pode fazer login</li>
                    <li>3. Você pode criar uma mensagem</li>
                    <li>4. Você pode ver as mensagens</li>
                </ul>

            </article>
        </div>
    )
}
export default Inicio;