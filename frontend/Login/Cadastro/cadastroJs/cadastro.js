let senha = document.getElementById("senha");
let confirmarSenha = document.getElementById("confirmarSenha");
let cadastrar = document.getElementById("cadastrar");
confirmarSenha.addEventListener("keyup", function() {
    if (senha.value != confirmarSenha.value) {
        confirmarSenha.setCustomValidity("Senhas diferentes");
    } else {
        confirmarSenha.setCustomValidity("");
    }
});
//estamos verificando a idade do usuario, se for menor de 18 anos, ele não pode se cadastrar 
let idade = document.getElementById('idade');
let cadastra = document.getElementById('cadastrar');
cadastra.disabled = true;
idade.addEventListener('keyup', function() {
    if (idade.value >= 18) {
        cadastra.disabled = false;
    } else {
        cadastra.disabled = true;
    }
});
//verificar  email
let email = document.getElementById('email');
let cadastro = document.getElementById('cadastro');
cadastro.disabled = true;
email.addEventListener('keyup', function() {
    if (email.value.indexOf('@') != -1) {
        cadastro.disabled = false;
    } else {
        cadastro.disabled = true;
    }
});