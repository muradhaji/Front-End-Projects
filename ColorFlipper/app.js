const btnhex = document.getElementById("btnhex");
const btnrgb = document.getElementById("btnrgb");
const btnrgba = document.getElementById("btnrgba");
const btnhsl = document.getElementById("btnhsl");
const btnhsla = document.getElementById("btnhsla");
const colorspan = document.querySelector(".colorspan");

btnhex.addEventListener('click', function () {
  let hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  let randomHexCode = '#';
  for(let i = 0 ; i < 6 ; i++)
    randomHexCode += hex[getRandomNumber(0, hex.length-1)]
  console.log(randomHexCode);
  setBackGroundColor(randomHexCode);
  setColorSpan(randomHexCode);
});

btnrgb.addEventListener('click', function () {
  let red = getRandomNumber(0,255);
  let green = getRandomNumber(0,255);
  let blue = getRandomNumber(0,255);
  let randomRgbCode = "rgb(" + red + "," + green + "," + blue + ")";
  setBackGroundColor(randomRgbCode);
  setColorSpan(randomRgbCode);
});

btnrgba.addEventListener('click', function () {
  let red = getRandomNumber(0,255);
  let green = getRandomNumber(0,255);
  let blue = getRandomNumber(0,255);
  let alpha = getRandomNumber(0,100) / 100;
  let randomRgbaCode = "rgba(" + red + "," + green + "," + blue + "," + alpha + ")";
  setBackGroundColor(randomRgbaCode);
  setColorSpan(randomRgbaCode);
});

btnhsl.addEventListener('click', function () {
  let hue = getRandomNumber(0,359);
  let saturation = getRandomNumber(0,100);
  let lightness = getRandomNumber(0,100);
  let randomHslCode = "hsl(" + hue + "," + saturation + "%," + lightness + "%)";
  setBackGroundColor(randomHslCode);
  setColorSpan(randomHslCode);
});

btnhsla.addEventListener('click', function () {
  let hue = getRandomNumber(0,359);
  let saturation = getRandomNumber(0,100);
  let lightness = getRandomNumber(0,100);
  let alpha = getRandomNumber(0,100) / 100;
  let randomHslaCode = "hsl(" + hue + "," + saturation + "%," + lightness + "%," + alpha + ")";
  setBackGroundColor(randomHslaCode);
  setColorSpan(randomHslaCode);
});

function getRandomNumber(min, max) {
  return min + Math.floor(Math.random()*(max-min+1));
}

function setBackGroundColor(color) {
  document.body.style.backgroundColor = color;
}

function setColorSpan(color) {
  colorspan.innerHTML = color;
}
