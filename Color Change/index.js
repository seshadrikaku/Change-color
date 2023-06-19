
const colorButton = document.getElementById('colorButton');
const mybody = document.getElementById('body');

function test() {

  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  body.style.background = `rgb(${red}, ${green}, ${blue})`;

  document.getElementById("colorCode").innerHTML = `rgb(${red},${green},${blue})`;
}


