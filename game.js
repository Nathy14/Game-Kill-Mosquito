

var height = 0
var width = 0
var lives = 1
var time = 10

var createMosquitoTime = 1500

var level = window.location.search
level = level.replace('?','')

if(level === 'normal'){
  //1500 ms
  createMosquitoTime = 1500
}else if (level === 'hard'){
  //1000ms
  createMosquitoTime = 1000
}else if(level === 'chucknorris'){
  //750ms
  createMosquitoTime = 750
}

function adjustGameSize(){
  height = window.innerHeight
  width = window.innerWidth
}

adjustGameSize()

//timer logic
var cronometro = setInterval(function(){
  time -=1
  if(time < 0){
    clearInterval(cronometro)
    clearInterval(createMosquito)
    window.location.href = 'vitory.html'
  }else{
  document.getElementById('cronometro').innerHTML = time
  }
},1000)


function randomPosition(){

  //remove mosquito if it already exists
  if(document.getElementById('mosquito')){
    document.getElementById('mosquito').remove()


    //losting lifes logic
    if(lives>3){
      window.location.href = 'gameover.html'
    }else{
      document.getElementById('life' + lives).src = "imagens/coracao_vazio.png"
      lives++
    }
  }

  var positionX = Math.floor(Math.random() * width) - 90
  var positionY = Math.floor(Math.random() * height) - 90

  positionX = positionX <0 ? 0 : positionX
  positionY = positionY <0 ? 0 : positionY

  //creating mosquito
  var mosquito = document.createElement('img')
  mosquito.src = 'imagens/mosquito.png'
  mosquito.className = randomMosquitoSize() +' '+ randomMosquitoSide()
  mosquito.style.left = positionX + 'px'
  mosquito.style.top = positionY + 'px'
  mosquito.style.position = 'absolute'
  mosquito.id = 'mosquito'
  mosquito.onclick = function(){
    this.remove()
  }
  document.body.appendChild(mosquito)
}

function randomMosquitoSize(){

  var mosquitoClass = Math.floor(Math.random() * 3)

  switch (mosquitoClass) {
    case 0:
      return 'mosquito1'
    case 1:
      return 'mosquito2'
    case 2:
      return 'mosquito3'
  }
}

function randomMosquitoSide(){

  var mosquitoSide = Math.floor(Math.random()*2)

  switch (mosquitoSide) {
    case 0:
      return 'sideB'
    case 1:
      return 'sideA'
  }
}
