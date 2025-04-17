function requisitarPagina(url){
  const ajax = new XMLHttpRequest();
  //Requisição não iniciada, state = 0
  console.log(ajax.readyState)
  //conexão estabelecida com o servidor, state = 1
  ajax.open('GET', url)
  console.log(ajax.readyState)

  //de alguma logica que fique olhando para o progsso da req
  ajax.onreadystatechange = () => {
    console.log(ajax.readyState)
  }

  ajax.send()

  // console.log(ajax)
}