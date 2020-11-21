'use strict';

// 위에 있는 navbar를 투명하게 만들기 
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    //console.log(window.scrollY);
    // console.log(`navbarHeight : ${navbarHeight}`);
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }

});

