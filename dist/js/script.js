
const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});
const counters = document.querySelectorAll('.skills__ratings-counter'),
    lines = document.querySelectorAll('.skills__ratings-line span');

<<<<<<< HEAD
const counters = document.querySelectorAll('.skills__ratings-counter'),
    lines = document.querySelectorAll('.skills__ratings-line span');
=======
counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});
>>>>>>> 667db1386c570908d52d6addb73e495079690e6b

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});



