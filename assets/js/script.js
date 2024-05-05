alert("Seja bem vindo")

let imagens=["./assets/img/Bike1.jpg", "./assets/img/Bike2.jpg", "./assets/img/Bike3.jpg", "./assets/img/Bike4.jpg"];
let index = 0;
let time =3000;

function slideShow(){

document.getElementById("imgbanner").src=imagens[index];
index++;

    if(index == imagens.length){
        index=0;
    }
    setTimeout("slideShow()", time);
}
slideShow();


var cores = ["#ff0000", "#00ff00", "#0000ff"];
var indiceCorAtual = 0;   
    
function mudarCor() {
    
    var corpo = document.body;
    corpo.style.backgroundColor = cores[indiceCorAtual];
    indiceCorAtual = (indiceCorAtual + 1) % cores.length;
}






function validarFormulario() {
    // Obter os valores do nome e senha inseridos no formulário
    var nome = document.getElementById("nome").value;
    var senha = document.getElementById("senha").value;

    if (nome === "usuario" && senha === "1234") {
        alert("Redirecionando")
        window.location.href = "quiz.html";
        return false; // Impede o envio do formulário após o redirecionamento
    } else {
        alert("Nome de usuário ou senha incorretos!");
        return true; // Impedir o envio do formulário
    }
}
