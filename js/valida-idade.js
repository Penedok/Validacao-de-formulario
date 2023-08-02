

export default function maiorDeIdade(campoInput){
    const dataNascimento = new Date(campoInput.value);
    if(!validaIdade(dataNascimento)){
        alert('O usuário não é maior de idade')
    };


    console.log(validaIdade(dataNascimento))

}

function validaIdade(data){
    const dataAtual = new Date(); //data atual
    const dataMais18 = new Date (data.getUTCFullYear() +18, data.getUTCMonth(), data.getUTCDate())

   return dataAtual >= dataMais18;   //compara de é maior ou =18anos

}