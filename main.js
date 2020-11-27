'use strict';

// 1. 위에 있는 navbar를 투명하게 만들기 
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

//2. scroll to section
//Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click',(e) => {
    // html element 속성 값중 data- 뒤에있는 속성의 값을 가져오기위해
    //dataset.(data-뒤에있는 속성이름)으로 가져온다.
    
    const link = e.target.dataset.aaaa;
    if(link === undefined){
        return;
    }

    console.log(link);

    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: "smooth"});


});
// navbarMenu.addEventListener('click',function (){
//     console.log('asdasdas');
//     console.log(this.className);
// });

