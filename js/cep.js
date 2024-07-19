function getCity(cep) {
    const cidade = document.querySelector("#cidade");
    const estado = document.querySelector("#estado");
    const rua = document.querySelector("#rua");
    const bairro = document.querySelector("#bairro");

    rua.removeAttribute("readonly");
    bairro.removeAttribute("readonly");

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            if (data.erro || !data.localidade || !data.uf) {
                cidade.value = '';
                estado.value = '';
                rua.value = '';
                bairro.value = '';

                alert('CEP inválido ou não encontrado.');

                return;
            }

            cidade.value = data.localidade;
            estado.value = data.uf;

            if (data.logradouro) {
                rua.value = data.logradouro;
                rua.setAttribute("readonly", "readonly");
            }

            if (data.bairro) {
                bairro.value = data.bairro;
                bairro.setAttribute("readonly", "readonly");
            }

        })
        .catch(error => {
            console.error(error);
        });
}

document.querySelector("#cep").addEventListener("blur", function() {
    const cep = this.value.replace(/\D/g, '');
    if (cep.length === 8) {
        getCity(cep);
    } else {
        alert('CEP deve ter 8 dígitos.');
    }
});
