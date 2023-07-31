
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
var cpf = document.querySelector('#cpf');

function isCPF(cpf =0){
   cpf = cpf.replace(/\.|-/g,"");
   let soma= 0; 
   soma +=  cpf[0] *10;                      //vai implementar 
   soma +=  cpf[1] *9; 
   soma +=  cpf[2]  *8
   soma +=  cpf[3] *7; 
   soma +=  cpf[4] *6; 
   soma +=  cpf[5] *5; 
   soma +=  cpf[6] *4; 
   soma +=  cpf[7] *3; 
   soma +=  cpf[8] *2; 
   soma = (soma*10) %11;



   if(soma ==10 || soma ==11 )
    soma=0;

  

   soma +=  cpf[0] *11;                      //vai implementar 
   soma +=  cpf[1] *10; 
   soma +=  cpf[2]  *9
   soma +=  cpf[3] *8; 
   soma +=  cpf[4] *7; 
   soma +=  cpf[5] *6; 
   soma +=  cpf[6] *5; 
   soma +=  cpf[7] *4; 
   soma +=  cpf[8] *3; 
   soma +=  cpf[9] *2;
   soma = (soma*10) %11; 
   if(soma ==10 || soma ==11 )
   soma=0;


   if(soma != cpf[10] && cpf[9]) {
      false
      alert('CPF invalido')
      return
      
   }

  

   console.log('primeiro dg ' + soma)
   return true;

}
cpf.addEventListener('focusout',()=> isCPF(cpf.value))






















//const validacao = document.querySelector('.btn')

//validacao.addEventListener('click', ()=>{
//    calculaIdade()
//})

 // validacao de Idade
 //function calculaIdade( ){
   // let dateInput = document.getElementById("nascimento");
    //let input = dateInput.value
    //let niver = new Date(input);

   // const  idade = Math.floor((Date.now() - niver) / (31557600000));
     //   if(idade < 18){
       //     alert("Você ainda não é maior de idade!")
      //  }else {

         //   window.location='./cupom.html'

      //  }
      //  return idade
  //  }
//
 



