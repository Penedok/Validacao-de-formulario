
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

// CPF
import cpfValido from "./validacoes.js";
import maiorDeIdade from "./valida-idade.js";


var input = document.querySelectorAll('[required]');

input.forEach((campoInput) =>{
   campoInput.addEventListener('blur',()=> validaCampo(campoInput))


})

function validaCampo(campoInput){

   if(campoInput.name == "cpf" && campoInput.value <=11){
         cpfValido(campoInput)
   }
   if(campoInput.name =='aniversario' && campoInput.value !=""){
      maiorDeIdade(campoInput)
   }
}

//

const formulario= document.querySelector('[data-formulario]')




formulario.addEventListener("submit",(e)=>{
   e.preventDefault()

   alert('eai')
   const listaRespostas ={
      "nome": e.target.elements['nome'].value,
      "email": e.target.elements['email'].value,
      "aniversario": e.target.elements['aniversario'].value,
      "cpf": e.target.elements['cpf'].value,
      "cep": e.target.elements['cep'].value,
      "logradouro": e.target.elements['logradouro'].value,
      "bairro": e.target.elements['bairro'].value,
      "cidade": e.target.elements['cidade'].value,
      "estado": e.target.elements['estado'].value
   }

   localStorage.setItem('cadastro' , JSON.stringify(listaRespostas));
   window.location.href ="../cupom.html";



})






































