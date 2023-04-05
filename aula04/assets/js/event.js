const logo = document.getElementById('logo');
const body = document.querySelector('body');
  
logo.onclick = mudarCor;

function mudarCor(){
  let cor1 = Math.floor(Math.random() * 255);
  let cor2 = Math.floor(Math.random() * 255);
  let cor3 = Math.floor(Math.random() * 255);
  let cor4 = (Math.floor(Math.random() * 9) * 0.1);

  
  body.style.backgroundColor = `rgba(${cor1}, ${cor2}, ${cor3}, ${cor4})`
  console.log(`${cor1}, ${cor2}, ${cor3}, ${cor4}`)
}