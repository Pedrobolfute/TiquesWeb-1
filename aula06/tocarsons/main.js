let teclas = document.getElementsByClassName('tecla')

for(let i = 0; i <= teclas.length; i++){
  teclas[i].addEventListener('click', eventFunc)
}

function eventFunc(){
  let peguei = this.textContent
  let idDoSom = `som_tecla_${peguei}`.toLowerCase()
  let som = document.getElementById(idDoSom)
  som.play()
}