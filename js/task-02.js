const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector("ul");

const liEl = ingredients.map((ingredient) =>{
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = ingredient;
  console.log(itemEl);
  return itemEl;
})

ulEl.append(...liEl);

