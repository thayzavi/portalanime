// logica cadastro
// função para validar o form
function validarFormulario(){
    var Usuario = document.getElementById("Usuario").value;
    var contato  = document.getElementById("senha").value;
    var senha = document.getElementById("senha").value;
    var confirmasenha = document.getElementById("confirmasenha").value;
    if (Usuario === ""){
        alert("Por favor preecha o Nome.");
        return false;
    }
    if (contato === ""){
        alert("Preecha o campo email.");
        return false;
    }
    if (senha === ""){
        alert("Por favor preecha o campo senhar.");
        return false;
    }
    if (confirmasenha === ""){
        alert("Confirme a senha.");
        return false;
    }
    redirecionarhome();
}
// função para ir para outra página
function redirecionarhome (){
window.location.href = "index.html"
}