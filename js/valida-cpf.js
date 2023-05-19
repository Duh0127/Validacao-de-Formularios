export default function ehUmCPF(campo) {
    const cpf = campo.value.replace(/\.|-/g, "");
    
    if(validaNumerosRepetidos(cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)){
        console.log("Esse CPF não existe!");
    }
    else{
        console.log("CPF VÁLIDO!");
    }
}
// export default = quando esse arquivo for chamado, ele vai ser executado, por default, esse função, no outro arquivo js

function validaNumerosRepetidos(cpf) {
    const numerosRepetidos = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999'
    ]

    return numerosRepetidos.includes(cpf)
}


function validaPrimeiroDigito(cpf){
    let soma = 0;
    let multiplicador = 10;

    //cpf[tamanho] - o tamanho aumenta com o for, nisso ele é atribuído dentro do array de CPF, pegando apenas o número de cada INDEX do array
    for(let tamanho = 0; tamanho < 9; tamanho++){
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11;
    if(soma == 10 || soma == 1){
        soma = 0;
    }

    return soma != cpf[9];
}


function validaSegundoDigito(cpf){
    let soma = 0;
    let multiplicador = 11;

    //cpf[tamanho] - o tamanho aumenta com o for, nisso ele é atribuído dentro do array de CPF, pegando apenas o número de cada INDEX do array
    for(let tamanho = 0; tamanho < 10; tamanho++){
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11;
    if(soma == 10 || soma == 1){
        soma = 0;
    }

    return soma != cpf[10];
}