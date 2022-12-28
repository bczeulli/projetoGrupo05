const primeiroNome = document.getElementById("first_name");
const sobrenome = document.getElementById("last_name");
const email = document.getElementById("email");
const cpf = document.getElementById("00NDn00000GaHOj");
const celular = document.getElementById("mobile");
const mensagem = document.getElementById("description");
const buton = document.getElementById("enviar");
const celularMascara = (value) => {
    if (!value) return "";
    value = value.replace(/\D/g,'');
    value = value.replace(/(\d{2})(\d)/,"($1) $2");
    value = value.replace(/(\d)(\d{4})$/,"$1-$2");
    return value;
}

const cpfMascara = (value) => {
    if (!value) return "";
    value = value.replace(/\D/g,'');
    value = value.replace(/(\d{3})(\d)/ , "$1.$2");
    value = value.replace(/(\d{3})(\d)/ , "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
    return value;
}

primeiroNome.addEventListener("blur", () => {
    let validacaoPrimeiroNome = document.getElementById("primeiroNomeValidation");
    let labelNome = document.getElementById("labelNome");
    if(primeiroNome.value){
        validacaoPrimeiroNome.innerText = "";
        labelNome.style.color = "white";
        labelNome.style.marginTop = "0px";
        labelNome.style.color = "#fff";
    } else {
        
        validacaoPrimeiroNome.style.color = "white";
        validacaoPrimeiroNome.innerText = "Campo obrigatório";
        labelNome.style.color = "red";
        labelNome.style.marginTop = "10px";
    }
})

sobrenome.addEventListener("blur", () => {
    let validacaoSobrenome = document.getElementById("sobrenomeValidation");
    let labelSobrenome = document.getElementById("labelSobrenome");
    if(sobrenome.value){
        primeiroNome.style.marginBottom = "30px";
        validacaoSobrenome.innerText = "";
        labelSobrenome.style.color = "white";
        labelSobrenome.style.marginTop = "0px";
        labelSobrenome.style.color = "#fff";
    } else {
        primeiroNome.style.marginBottom = "20px";
        validacaoSobrenome.style.color = "white";
        validacaoSobrenome.innerText = "Campo obrigatório";
        labelSobrenome.style.color = "red";
        labelSobrenome.style.marginTop = "10px";
    }
})

email.addEventListener("blur", () => {
    let validacaoEmail = document.getElementById("emailValidation");
    let labelEmail = document.getElementById("labelEmail");
    if(email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        sobrenome.style.marginBottom = "30px";
        validacaoEmail.innerText = "";
        labelEmail.style.color = "white";
        labelEmail.style.marginTop = "0px";
        labelEmail.style.color = "#fff";
    } else {
        sobrenome.style.marginBottom = "20px";
        validacaoEmail.style.color = "white";
        validacaoEmail.innerText = "E-mail não é válido!";
        labelEmail.style.color = "red";
        labelEmail.style.marginTop = "10px";
    }
})

celular.addEventListener("keyup", (event) => {
    let input = event.target;
    input.value = celularMascara(input.value)
    
})

celular.addEventListener("blur", () => {
    let validacaoCelular = document.getElementById("celularValidation");
    let labelCelular = document.getElementById("labelCelular");
    if(celular.value){
        email.style.marginBottom = "30px";
        validacaoCelular.innerText = "";
        labelCelular.style.color = "white";
        labelCelular.style.marginTop = "0px";
        labelCelular.style.color = "#fff";
    } else {
        email.style.marginBottom = "20px";
        validacaoCelular.style.color = "white";
        validacaoCelular.innerText = "Campo obrigatório";
        labelCelular.style.color = "red";
        labelCelular.style.marginTop = "10px";
    }
})

cpf.addEventListener("blur", (event) => {
    let validacaoCpf = document.getElementById("cpfValidation");
    let labelCpf = document.getElementById("labelCpf");
    let input = event.target;
    input.value = cpfMascara(input.value)
    if(cpf.value){
        email.style.marginBottom = "30px";
        validacaoCpf.innerText = "";
        labelCpf.style.color = "white";
        labelCpf.style.marginTop = "0px";
        labelCpf.style.color = "#fff";
    } else {
        email.style.marginBottom = "20px";
        validacaoCpf.style.color = "white";
        validacaoCpf.innerText = "CPF não é válido!";
        labelCpf.style.color = "red";
        labelCpf.style.marginTop = "10px";
    }
})

mensagem.addEventListener("blur", () => {
    let validacaoMensagem = document.getElementById("mensagemValidation");
    let labelMensagem = document.getElementById("labelMensagem");
    if(mensagem.value){
        celular.style.marginBottom = "30px";
        validacaoMensagem.innerText = "";
        labelMensagem.style.color = "white";
        labelMensagem.style.marginTop = "0px";
        labelMensagem.style.color = "#fff";
    } else {
        celular.style.marginBottom = "20px";
        validacaoMensagem.style.color = "white";
        validacaoMensagem.innerText = "Campo obrigatório";
        labelMensagem.style.color = "red";
        labelMensagem.style.marginTop = "10px";
    }
})

/* buton.addEventListener("click", () =>{
    setTimeout(() => {
        location.reload();
      }, 3000)
}) */