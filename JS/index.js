var nome = "John paim";
var cargo = "Desenvolvedor"
var cargoNoHtml = document.getElementById("cargo-no-html");
var nomeHtml = document.getElementById("nome-do-html");
var texto2 = document.getElementById("texto-2");
var texto1 = document.getElementById("texto-1");

function digaOla(){
    alert("Olá, seja muito bem vindo!")
}


function trocarCargoNoHtml(cargo){
    cargoNoHtml.innerHTML = cargo
}

function colocarNomeNoHtml(nome){
nomeHtml.innerHTML = nome
}

function logarNome(){
    console.log(nome)
}

function clickNoProjetos(){
    console.log("Clicou no botão projetos");
    texto2.style.display = "block";
    texto1.style.display = "none";
}

function clickNoSobre(){
    console.log("clicou no botão  sobre");
    texto1.style.display = "block";
    texto2.style.display = "none";
}

colocarNomeNoHtml(nome)
trocarCargoNoHtml(cargo)
digaOla ()