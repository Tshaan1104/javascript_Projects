const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

console.log(document.querySelector('.search')); // Should log the search element
console.log(document.querySelector('.btn')); // Should log the button element
console.log(document.querySelector('.input')); // Should log the input element

btn.addEventListener('click', () => {
    search.classList.toggle("active");
    input.focus();
});

