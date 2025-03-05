// logica login
 // função para validar o form
 function validarFormulario(){
    var Usuario = document.getElementById("Usuario").value;
    var senha = document.getElementById("senha").value;

    if (Usuario === ""){
        alert("Por favor preecha o campo usuário.");
        return false;
    }
    if (senha === ""){
        alert("Confirme a senha.");
        return false;
    }
    redirecionarhome();
}
// função para ir para outra página
function redirecionarhome (){
window.location.href = "index.html"
}