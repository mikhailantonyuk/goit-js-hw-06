function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColor = getRandomHexColor();
const btnEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');
const bodyEl = document.querySelector('body')
const changeRandomColor = (event) => {
  bodyEl.style.backgroundColor = changeColor;
  spanEl.textContent = bodyEl.style.backgroundColor;
}

btnEl.addEventListener('click', changeRandomColor);