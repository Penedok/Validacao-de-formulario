
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



const validacao = document.querySelector('.btn')

validacao.addEventListener('click', ()=>{
    calculaIdade()
})

 // validacao de Idade
 function calculaIdade( ){
    let dateInput = document.getElementById("nascimento");
    let input = dateInput.value
    let niver = new Date(input);

    const  idade = Math.floor((Date.now() - niver) / (31557600000));
        if(idade < 18){
            alert("Você ainda não é maior de idade!")
        }else {

            window.location='./cupom.html'

        }
        return idade
    }

 



