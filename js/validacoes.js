
export default function cpfValido(campoInput){
    const cpf = campoInput.value.replace(/\.|-/g,"");
   if (validaNumerosRepetidos(cpf) || validaPrimeiroDigito(cpf) ||validaSegundoDigito(cpf)){
         alert('Esse CPF não existe!')
   }

}  

function validaNumerosRepetidos(cpf){
    const numeroRepetidos = [
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
   return numeroRepetidos.includes(cpf)
}

function validaPrimeiroDigito(cpf){
    let soma = 0;
    let multiplicador =10;

    for(let tamanho =0; tamanho <9; tamanho ++){
        soma += cpf[tamanho] *multiplicador;  // a variavel soma vai recolher o CPF pela posição do laço e vai multiplciar peli multiplicador que começou pelo 10
        multiplicador --; //e aqui o multiplicador vai subtraindo
    }
    soma = (soma *10) % 11;

    if(soma ==10 || soma ==11){
        soma =0;
    }

    return soma != cpf[9];

}

function validaSegundoDigito(cpf){

    let soma= 0;
    let multiplicador =11;

    for(let tamanho =0; tamanho < 10; tamanho++){
        soma += cpf[tamanho] *multiplicador
        multiplicador--
    }

    soma = (soma *10) %11;
    if (soma ==10 || soma ==11){
        soma =0;
    }

    return soma != cpf[10]

}