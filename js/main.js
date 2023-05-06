const btn = document.querySelector('.verifica')

btn.addEventListener('click',()=>{
  let $cep = document.getElementById('cep').value.replace(/\D/g, '');
  let url = 'https://viacep.com.br/ws/' + $cep + '/json';
  let request = new XMLHttpRequest();

  request.open('GET', url);
  request.onerror = function () {
    document.getElementById('input-mensagem-erro').innerHTML = 'API OFFLINE OU CEP INVALIDO';
    

  }

  request.onload = () =>{
    let response = JSON.parse(request.responseText)

    const logradouro = document.querySelector("#logradouro")
    const bairro =  document.querySelector("#bairro")
    const cidade = document.querySelector("#cidade")
    const estado = document.querySelector("#estado")

    if(response.erro === true){
        document.getElementById('input-mensagem-erro').innerHTML = 'Cep nao encontrado'

    }else{
        
        logradouro.value = response.logradouro;
        bairro.value = response.bairro;
        cidade.value = response.localidade;
        estado.value = response.uf             
    }

  }

  request.send();
})







