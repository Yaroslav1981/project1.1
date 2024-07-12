import '../scss/style.scss';
import '../css/styles.min.css';
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

document.querySelector('#btn-burger').addEventListener('click',(e) => {
    document.querySelector('.section-header').classList.toggle('section-header--active-nav');
});
window.addEventListener('resize',(e) => {
    document.querySelector('.section-header').classList.remove('section-header--active-nav');
});



const swiper1 = new Swiper('.section-hero', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 400,
  
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    
  
    
  });
const swiper2 = new Swiper('.slider-blog-wrapper', {
    // Optional parameters
    //direction: 'horizontal',
    loop: true,
    speed: 400,
  
    pagination: {
        el: '.dots-blog',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
  
    
  });
  const swiper3 = new Swiper('.quotes-slider-container', {
    // Optional parameters
    //direction: 'horizontal',
    loop: true,
    speed: 400,
  
    pagination: {
        el: '.dots-quots',
        clickable: true,
      },
      
    
  });