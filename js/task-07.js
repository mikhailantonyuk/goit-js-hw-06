const inputEl = document.querySelector('input#font-size-control');
const textEl = document.querySelector('span#text');
const valueEl = inputEl.value;

inputEl.addEventListener('input',changeTextSize);

function changeTextSize(event) {
    textEl.style.fontSize = event.currentTarget.value + "px";
}