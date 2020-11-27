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

    // const scrollTo = document.querySelector(link); 중복제거
    // scrollTo.scrollIntoView({behavior: "smooth"});
    scrollIntoView(link);

});

// 3. Handle click on "contact me" button on home
const homeContact = document.querySelector('.home__contact');
homeContact.addEventListener('click', (e) =>{
    const link = e.target.dataset.aaaa;
    console.log(link);
    if(link === undefined){
        return;
    }

    scrollIntoView(link);

    // const scrollTo = document.querySelector(link); 중복제거
    // scrollTo.scrollIntoView({behavior: "smooth"});

});



//4. Transparent home (스크롤시)
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    console.log(`window.scrollY : ${window.scrollY}`);
    console.log(1 - window.scrollY / homeHeight);
    home.style.opacity = 1 - window.scrollY / homeHeight;
});





// 중복 제거 하기 위해 함수 만듬.
function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});    
}

