import '../scss/style.scss';

let accordions = document.querySelectorAll('.accordion__item');
console.log(accordions);

for(let accordion of accordions) {
    accordion.addEventListener('mouseover', function (e) {
        accordion.setAttribute("class", "accordion__item accordion__item--active");
    });
     accordion.addEventListener('mouseout', function (e) {
         accordion.setAttribute("class", "accordion__item");
     });
    }
