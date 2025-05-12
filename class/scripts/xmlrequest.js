function requisitarPagina(url){

  document.getElementById('conteudo').innerHTML = ''

  if(!document.getElementById('loading')){
  const imgLoading = document.createElement('img')
  imgLoading.id = 'loading'
  imgLoading.src = '/ajax/class/scripts/loading.gif'
  imgLoading.className = 'rounded mx-auto d-block'

  document.getElementById('conteudo').appendChild(imgLoading)
  }
  const ajax = new XMLHttpRequest();
  //Requisição não iniciada, state = 0
  // console.log(ajax.readyState)
  //conexão estabelecida com o servidor, state = 1
  ajax.open('GET', url)
  // console.log(ajax.readyState)

  //de alguma logica que fique olhando para o progsso da req
  ajax.onreadystatechange = () => {
    if(ajax.readyState === 4 && ajax.status === 200){
      // console.log(ajax.readyState)
      // console.log(ajax.status)
      // console.log(ajax.responseText)

      document.getElementById('conteudo').innerHTML = ajax.responseText
  }
  }
  ajax.send()

  // console.log(ajax)
}