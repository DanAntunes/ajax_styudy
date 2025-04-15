function requisitarPagina(url){
  const ajax = new XMLHttpRequest();

  ajax.open('GET', url)
  ajax.send()

  console.log(ajax)
}