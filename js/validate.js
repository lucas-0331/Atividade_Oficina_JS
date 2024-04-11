

const formOficina = document.querySelector('#form-oficina');

formOficina.addEventListener('submit', function(e) {

    if (!validarFormulario()) {
        e.preventDefault();
        return;        
    }

    console.log('Formulário validado com sucesso!');
});


function validarFormulario(){

    let validacaoIdade = validarIdade();

    if (!validacaoIdade.status) {
        exibeMensagem(validacaoIdade.mensagem);
        return false;
    }

    return true;

}

function validarIdade(){
    
    let dataNascimento = document.querySelector('#data-nasc').value;

    let dataAtual = new Date();

    let anoNascimento = new Date(dataNascimento).getFullYear();
    let anoAtual = dataAtual.getFullYear();

    let idade = anoAtual - anoNascimento;

    if (idade < 18) {

        let validacao = {
            status: false,
            mensagem: 'Você precisa ter mais de 18 anos para se cadastrar'
        }

        return validacao;
    }

    let validacao = {
        status: true,
        mensagem: ''
    }

    return validacao;
}

function exibeMensagem(mensagem) {

    let aviso = document.querySelector("#form-warning");

    aviso.textContent = mensagem;
}

