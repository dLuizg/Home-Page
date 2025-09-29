function toggleMode(){
  const html = document.documentElement
  
  //Define o switch
  html.classList.toggle("light")

  //Prepara para a mudança de imagem pela tag

  const img = document.querySelector("#profile img")

  //Troca de imagem
  if(html.classList.contains('light')){
    img.setAttribute("src", "./assets/Avatar.png")
  }else{
    img.setAttribute("src", "./assets/Avatar.png")
  }

}