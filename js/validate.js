import('js/cep.js')


let autoFillEnabled = false;

document.querySelector('#toggle-auto-fill').addEventListener('click', function() {
    autoFillEnabled = !autoFillEnabled;
    if (autoFillEnabled) {
        ativarPreenchimentoAutomatico();
        this.textContent = 'Desativar Preenchimento Automático';
    } else {
        limparCampos();
        this.textContent = 'Ativar Preenchimento Automático';
    }
});

function ativarPreenchimentoAutomatico() {
    let today = new Date().toISOString().split('T')[0];
    document.querySelector('#data-nasc').value = today;
    document.querySelector('#nome').value = 'Teste Teste';
    document.querySelector('#cpf').value = '145.382.206-20';
    document.querySelector('#email').value = 'teste@teste.com';
    document.querySelector('#telefone').value = '(35) 3551-4228';
     let cep = '37830-006'
    document.querySelector('#cep').value = cep;
    document.querySelector('#numero').value = '99999';
    document.querySelector('#complemento').value = 'Cinema';
    getCity(cep);
}

function limparCampos() {
    document.querySelector('#data-nasc').value = '';
    document.querySelector('#nome').value = '';
    document.querySelector('#cpf').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#telefone').value = '';
    document.querySelector('#cep').value = '';
    document.querySelector('#numero').value = '';
    document.querySelector('#cidade').value = '';
    document.querySelector('#estado').value = '';
    document.querySelector('#rua').value = '';
    document.querySelector('#complemento').value = '';
}

const formOficina = document.querySelector('#form-oficina');

formOficina.addEventListener('submit', function(e) {
    if (!validarFormulario()) {
        e.preventDefault();
        return;
    }

    console.log('Formulário validado com sucesso!');
});


function validarFormulario() {
    let validacoes = [
        validarObrigatorio(),
        validarIdade(),
        validarEmail(),
        validarTelefone(),
        // validarCEP(),
        validarCPF(),
    ]

    for (let validacao of validacoes) {
        if (!validacao.status) {
            console.log(validacao.status);
            exibeMensagem(validacao.mensagem);
            return false;
        }
    }

    return true;
}

function validarObrigatorio() {

    campos = document.querySelectorAll('.obrigatorio');
    for (let campo of campos) {
        if (campo.value == '') {

            campoName = campo.getAttribute('name');

            let validacao = {
                status: false,
                mensagem: `O campo ${campoName} é obrigatório`
            }
            return validacao;
        }
    }

    let validacao = {
        status: true,
        mensagem: ''
    }

    return validacao;
}

function validarIdade(){

    let dataNascimento = document.querySelector('#data-nasc').value;

    let dataAtual = new Date();

    let anoNascimento = new Date(dataNascimento).getFullYear();
    let anoAtual = dataAtual.getFullYear();

    let idade = anoAtual - anoNascimento;
    console.log(idade);

    if (idade < 18) {

        let validacao = {
            status: false,
            mensagem: 'Você precisa ter mais de 18 anos para se cadastrar'
        }
        return validacao;
    }

    if (idade > 400) {
        console.log('IDADE > 400')
        let validacao = {
            status: false,
            mensagem: 'Este site não aceita Highlanders'
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

function validarEmail() {
    let email = document.querySelector("#email").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        return {
            status: false,
            mensagem: 'O e-mail fornecido não é válido'
        };
    }
    return {
        status: true,
        mensagem: ''
    };
}

function validarTelefone() {
    let telefone = document.querySelector('#telefone').value;
    const telefonePattern = limparCaracteresEspeciais(telefone);
    console.log(telefonePattern)
    if (telefonePattern.length > 11 || telefonePattern.length < 8) {
        return {
            status: false,
            mensagem: 'Telefone inválido!'
        };
    }

    return {
        status: true,
        mensagem: '',
    };

}

// function validarCEP() {
//     let cep = document.querySelector('#cep').value;
//     const cepPattern = limparCaracteresEspeciais(cep);
//     if (cepPattern.length != 8) {
//         return {
//             status: false,
//             mensagem: 'CEP inválido!'
//         };
//     }
//
//     return {
//         status: true,
//         mensagem: '',
//     };
// }

function calcularDigitoVerificador(cpf, peso) {
    let soma = 0;
    for (let i = 0; i < cpf.length; i++) {
        soma += parseInt(cpf[i]) * peso--;
    }
    let resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
}

function validarCPF() {
    cpf = document.querySelector("#cpf").value;
    cpfPattern = limparCaracteresEspeciais(cpf);
console.log(cpfPattern)
    if (cpfPattern.length !== 11) {
        console.log('cpf com != de 11 digito')
        return {
            status: false,
            mensagem: 'CPF deve ter 11 dígitos.',
        };
    }

    if (/^(\d)\1{10}$/.test(cpfPattern)) {
        console.log('cpf digitos iguais')

        return {
            status: false,
            mensagem: 'CPF não pode ter todos os dígitos iguais.',
        };
    }

    let primeiroDigito = calcularDigitoVerificador(cpfPattern.substring(0, 9), 10);
    let segundoDigito = calcularDigitoVerificador(cpfPattern.substring(0, 10), 11);

    if (cpfPattern[9] == primeiroDigito && cpfPattern[10] == segundoDigito) {
        console.log('deu certo')
        return {
            status: true,
            mensagem: 'CPF válido.',
        };
    } else {
        console.log('deu ruim')
        return {
            status: false,
            mensagem: 'CPF inválido.',
        };
    }
}


function limparCaracteresEspeciais(entrada) {
    if (typeof entrada !== 'string') {
        console.error('A entrada deve ser uma string.');
        return '';
    }
    return entrada.replace(/[().\-\s]/g, '');
}