const counterValue = document.querySelector("#value");
const decBtn = document.querySelector('[data-action="decrement"]');
const incBtn = document.querySelector('[data-action="increment"]');
decBtn.addEventListener('click',() => {
    counterValue.textContent -=1;
})
incBtn.addEventListener('click', () => {
    counterValue.textContent = Number(counterValue.textContent)+1;
})