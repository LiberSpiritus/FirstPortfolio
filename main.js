'use strict';

// 1. 위에 있는 navbar를 투명하게 만들기 
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    //console.log(window.scrollY);
    // console.log(`navbarHeight : ${navbarHeight}`);
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
        navbarMenu.classList.remove('open');
    } else {
        navbar.classList.remove('navbar--dark');
    }

});


//2. scroll to section
//Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (e) => {
    // html element 속성 값중 data- 뒤에있는 속성의 값을 가져오기위해
    //dataset.(data-뒤에있는 속성이름)으로 가져온다.

    const link = e.target.dataset.aaaa;
    if (link === undefined) {
        return;
    }

    console.log(link);

    // const scrollTo = document.querySelector(link); 중복제거
    // scrollTo.scrollIntoView({behavior: "smooth"});

    scrollIntoView(link);
});

// 9. 모바일 사이즈에서 三 버튼 누를시 메뉴 활성화 시키기 (toggle)
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');

});

// 3. Handle click on "contact me" button on home
const homeContact = document.querySelector('.home__contact');
homeContact.addEventListener('click', (e) => {
    const link = e.target.dataset.aaaa;
    console.log(link);
    if (link === undefined) {
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
    // console.log(`window.scrollY : ${window.scrollY}`);
    // console.log(1 - window.scrollY / homeHeight);
    home.style.opacity = 1 - window.scrollY / homeHeight;
});


// 5. Show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight / 2) {
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove('visible');
    }
});

// 클릭시 홈으로 스크롤 되게
arrowUp.addEventListener('click', (e) => {
    scrollIntoView('#home');
});

//6. Projects
const workBtnContainer = document.querySelector('.work__category');
const categoryBtns = document.querySelectorAll('[data-filter]');
const activeBtn = document.querySelector('.category__btn.active');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');



workBtnContainer.addEventListener('click', (e) => {
    //1) My work 탭 클릭시 원하는 값 가져오기 ex)data-filter에 정의 되어있는 값!
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter == null) { return; }

    // 8. Remove selection from the previous item select the new one
    // My Work 탭 클릭시 상태값 바꾸기
    const active = document.querySelector('.category__btn.selected');
    active.classList.remove('selected');
    const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
    target.classList.add('selected');


    //7. My Work Project Filtering & Animation - 영상 보면서 살짝 이해가 안갔으나 pass
    //setTimeout => 해당 함수를 지정한 시간만큼 실행하라고 던져놓고, 해당 코드블록을 빠져 나옴.
    projectContainer.classList.add('anim-out');
    setTimeout(() => {

        projects.forEach((project) => {
            //2) 포트폴리오 썸네일(project) 객체안에 들어있는 data-type 값 가져오기
            const type = project.dataset.type;
            console.log(`type: ${type}`);

            //3) My work탭에 있는 data-filter 값이 '*' 이거나
            //My work탭에 있는 data-filter 값과, 포트폴리오 썸네일 에 있는 data-type값과 같으면 보이게하고(invisible class 삭제),
            //아니면 사라지게 함(invisible class 추가)
            if (filter === '*' || filter === type) {
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        });
        projectContainer.classList.remove('anim-out');
    }, 300);

    // for(let project of projects){
    //     console.log(project);
    // }

    // console.log('---------------');

    // for(let i = 0; i < projects.length; i++){
    //     console.log(projects[i]);
    // }



});




//1. 모든 섹션 요소들과 메뉴아이템들을 가지고 온다

const sectionIds = [
    '#home',
    '#about',
    '#skills',
    '#work',
    '#grow',
    '#contact'
];


const sections = sectionIds.map(id => document.querySelector(id));
const navItems = sectionIds.map(id =>
    document.querySelector(`[data-aaaa="${id}"]`)
);

// console.log(sections);
// console.log(navItems);

//2. IntersectionObserver를 이용해서 모든 섹션들을 관찰한다
//3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시키기

let selectedNavIndex = 0;
let selectedNavItem = navItems[0];

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
}

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (!entry.inIntersecting && entry.intersectionRatio > 0) {
            const index = sectionIds.indexOf(`#${entry.target.id}`);
            // console.log(index, entry.target.id);
            // 방향 찾기 - 스크롤링이 아래로 되어서 페이지가 올라옴
            if (entry.boundingClientRect.y < 0) {
                selectedNavIndex = index + 1;
            } else { // 스크롤링이 위로 되어서 페이지가 내려옴
                selectedNavIndex = index - 1;
            }

        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach(section => observer.observe(section));

window.addEventListener('wheel', () => {
    // wheel : 사용자가 마우스 휠을 이용할때만 발생하는 이벤트
    console.log(window.scrollY);
    console.log(window.innerHeight);
    console.log(document.body.clientHeight);
    if (window.scrollY === 0) { // 맨위로 도달
        //scrollY 값이 0 일때 (wheel 이벤트와 상관 없음)
        selectedNavIndex = 0;
        //인덱스를 0으로 주어 Home을 가리킴
    } else if (Math.round(window.scrollY + window.innerHeight) >= document.body.clientHeight) { // 맨 아래로 도달
        //window의 scollY 와 보여지는 window의 높이(viewport)의 합이 document의 전체 높이와 같을 경우(사용자가 페이지의 마지막까지 wheel 했을 경우)
        selectedNavIndex = navItems.length - 1;
        //navItem의 길이(6)에서 1을 뺀 5번째의 인덱스를 선택 (SelectedNavIndex : Contact)
    }
    selectNavItem(navItems[selectedNavIndex]);
    //selectNavItem 함수에 navItems[selectedNavIndex] 맨 마지막 Nav의 index인 Contact 일경우 인자값은 (navItems[5]) 인자를 호출하여 호출
});

// 중복 제거 하기 위해 스크롤 함수 만듬.
function scrollIntoView(selector) {
    console.log(`selector : ${selector}`);
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: "smooth" });
    selectNavItem(navItems[sectionIds.indexOf(selector)]);
    // 찾은 객체의 인덱스 값을 반환을 시켜주기 위해 indexof를 사용
}

// 기존에 선택됐던 인덱스의 active 클래스를 지운 뒤 새로 선택된 인덱스에 active를 추가
function selectNavItem(selected) {
    selectedNavItem.classList.remove('active');
    selectedNavItem = selected;
    selectedNavItem.classList.add('active');
}



