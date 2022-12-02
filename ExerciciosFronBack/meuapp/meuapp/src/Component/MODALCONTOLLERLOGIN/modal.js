
import React, { useState } from "react";
import Login from "../../Component/login/login";
import Cadastrar from "../../Component/Cadastrar/cadastrar";

function ModalControllerLogin() {
    const [isLogin, setIsLogin] = useState(true);

    function setLoginForm() {
        setIsLogin(true);
    }
    function setCadastrarForm() {
        setIsLogin(false);
    }
    return (
        <>
            {isLogin ? <Login setIsLogin={setCadastrarForm} /> : <Cadastrar setIsLogin={setLoginForm}/>}


        </>
    );
}
export default ModalControllerLogin;