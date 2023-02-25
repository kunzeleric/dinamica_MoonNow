let inputs = Array.from(document.querySelectorAll('input'));
let verificadorGeral = document.querySelector('.verificarCadastro');
let form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validarForm();
});

const validarForm = () => {
    let validacao = true;
    inputs.some((element)=> {
        if(element.value.length === 0){
            verificar(null, element);
            verificadorGeral.style.display = 'block';
            verificadorGeral.innerHTML = "Favor preencher os campos acima!";
            validacao = false;
        }
    })

    if(validacao){
        sucesso();
    }
}

const verificar = (event = null, element = null) => {
    const target = event ? event.target : element;
    if(target.value.trim().length === 0) falha(target);
    else(limparParagrafo(target));

}

const limparParagrafo = (element) => {
    let verificador = element.parentNode.children[1];
    verificador.innerHTML = "";
    verificador.style.display = "none";

    verificadorGeral.style.display = 'none';

}

const falha = (element) => {
    let verificador = element.parentNode.children[1];
    verificador.style.display = 'block';
    verificador.innerHTML = "Este campo é obrigatório!";

    verificadorGeral.innerHTML = "Favor preencher os campos acima!";
    verificadorGeral.style.display = 'block';
}

const sucesso = () => {
    console.log("Sucesso!");
    verificadorGeral.style.display = "block";
    verificadorGeral.style.color = 'green';
    verificadorGeral.innerHTML = 'Cadastro realizado!';

    setTimeout(()=>{
        form.reset();
        location.reload();
    }, 5000);
}