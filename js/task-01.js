const navItemEl = document.querySelectorAll('li.item');
console.log("Number of categories: ", navItemEl.length);
navItemEl.forEach(function(item) {
    console.log("Category: ", item.children[0].textContent);
    console.log("Elements: ", item.children[1].children.length);
});

