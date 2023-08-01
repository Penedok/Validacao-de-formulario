
//validacao de CEP
async function buscandoCep(ceps){
   try{
    var buscandoCEPNaApi = await fetch(`https://viacep.com.br/ws/${ceps}/json/`);
    var traduzindoApi = await buscandoCEPNaApi.json();
    if(traduzindoApi.erro){
       throw Error('CEP invalido')
    }
    var logradouro = document.querySelector('#logradouro');
    var bairro = document.querySelector('#bairro');
    var cidade = document.querySelector('#cidade');
    var estado = document.querySelector('#estado')
    
    logradouro.value = traduzindoApi.logradouro;
    bairro.value = traduzindoApi.bairro;
    cidade.value = traduzindoApi.localidade;
    estado.value = traduzindoApi.uf

    console.log(traduzindoApi)
    return traduzindoApi;
   }
   catch(erro){
    console.log(erro)
   }
}

var inputCEP = document.querySelector("#cep");

inputCEP.addEventListener("focusout", ()=> buscandoCep (inputCEP.value))



//


//var inputCPF = document.querySelector('#cpf')
//var numeroCPF = inputCPF.value;

//function validaCPF(numeroCPF){


//   console.log(numeroCPF)
//   if(!checaCPFRepetido (numeroCPF)){
      
//      alert("O CPF não é valido")

 //  }
//}

//function checaCPFRepetido(numeroCPF){
//   const valoresRepetidos = [
 //     '00000000000',
   //   '11111111111',
   //   '22222222222',
   //   '33333333333',
    //  '44444444444',
   //   '55555555555',
    //  '66666666666',
    //  '77777777777',
    //  '88888888888',
     // '99999999999'
  // ]
 //  let cpfValido = true;

  // valoresRepetidos.forEach(valor => {
   //   if (valor === numeroCPF){
   //      cpfValido = false;
  //    }
 //  })

  // return cpfValido
//}



//inputCPF.addEventListener('focusout', () => validaCPF(numeroCPF.value))

//calculo..



















































//const validacao = document.querySelector('.btn')

//validacao.addEventListener('click', ()=>{
 //   calculaIdade()
//})

  //validacao de Idade
// function calculaIdade( ){
 //   let dateInput = document.getElementById("nascimento");
  //  let input = dateInput.value
  //  let niver = new Date(input);

   // const  idade = Math.floor((Date.now() - niver) / (31557600000));
    //    if(idade < 18){
    //        alert("Você ainda não é maior de idade!")
    //    }else {

     //      window.location='./cupom.html'

     //   }
    //    return idade
 // }
 



