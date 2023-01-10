function VerificacaoDeEmail(){
    CampoNaoVazio = idemail.value.length > 0
    ComprimentoInvalido = idemail.value.length < 5

    if(CampoNaoVazio){
        document.getElementsByTagName("label")[0].classList.add("active")
    }else{
        document.getElementsByTagName("label")[0].classList.remove("active")
    }

    if (ComprimentoInvalido && CampoNaoVazio){
        document.getElementsByClassName("email-invalido")[0].style.display = "block"
        document.getElementById("idemail").className = "entrada-invalida"
    }else{
        document.getElementsByClassName("email-invalido")[0].style.display = "none"
        document.getElementById("idemail").className = "entradas"
    }
}

function VerificacaoDeSenha(){
    CampoNaoVazio = idsenha.value.length > 0
    ComprimentoInvalido = idsenha.value.length < 4 || idsenha.value.length > 60

    if(CampoNaoVazio){
        document.getElementsByTagName("label")[1].classList.add("active")
    }else{
        document.getElementsByTagName("label")[1].classList.remove("active")
    }

    if (ComprimentoInvalido && CampoNaoVazio){
        document.getElementsByClassName("senha-invalida")[0].style.display = "block"
        document.getElementById("idsenha").className = "entrada-invalida"
    }else{
        document.getElementsByClassName("senha-invalida")[0].style.display = "none"
        document.getElementById("idsenha").className = "entradas"
    }
}

function MostrarSenha(){
    ValorBotao = document.getElementsByClassName("mostra-senha")[0].innerHTML
    if (ValorBotao == "MOSTRAR"){
        document.getElementById("idsenha").type = "text"
        document.getElementsByClassName("mostra-senha")[0].innerHTML = "OCULTAR"
    }else{
        document.getElementById("idsenha").type = "password"
        document.getElementsByClassName("mostra-senha")[0].innerHTML = "MOSTRAR"
    }
}