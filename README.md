# 첫 포트폴리오 (First Portfollio)

링크 : https://liberspiritus.github.io/FirstPortfolio/

정작 현업에서 퍼블리싱을 해왔지만, 이렇다할 포트폴리오가 없었고
무엇보다 제가 PR할수 있는 포트폴리오 페이지가 필요하다 생각해서 만들었습니다.  
(반응형으로 제작 되었습니다 - CSS flex 기반 페이지 이기에
IE 6-9 에선 제대로 보여지지 않을수 있습니다.)

**1. Home**

```
   '나연욱'이란 사람이 어떤 사람인지 간략하게 소개 했고
   Contact me 클릭시 최 하단 페이지로 스크롤 되어 보여집니다.
```

**2. About me**

```
   저에 대한 간략한 소개와, 어떤 기술을 습득 중인지와 경력 사항을 적었습니다
```

**3. Skills**

```
   현재 제가 습득중인 기술 입니다.
```

**4. My work**

```
   제가 작업한 페이지를 탭 형식으로 보여지게 했습니다.
   (보여지기는 8개의 이미지가 보여지지만 예시로 보여지게 하기 위해 8개 다 보여지게 했고,
   실제 구현된 페이지는 첫번째에있는 페이지 입니다. 여기에 앞으로 프로젝트들 완성 할때마다 추가할 예정입니다.)
```

**5. Grow**

```
   앞으로도 어떻게 성장 하고 싶은지 적었습니다.
```

**6. Contact**

```
   제 연락망을 적어놓았습니다
   이메일, Github, Youtube
```

기능정리

1. 최상단 메뉴바 투명하게 만들기

- 맨 상단에 위치 해 있을땐 메뉴바가 투명함. -> 메뉴바의 높이보다 세로 스크롤량이 클 경우 투명해지지 않음.

```
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

console.log(navbarHeight);

document.addEventListener('scroll', () => {
    console.log(`window.scrollY : ${window.scrollY}`);
    // console.log(`navbarHeight : ${navbarHeight}`);
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
        navbarMenu.classList.remove('open');
    } else {
        navbar.classList.remove('navbar--dark');
    }

});
```

2. 상단 메뉴 버튼 클릭시 해당 섹션(구간)으로 스크롤 하기

- 특이하게 부모 메뉴를 클릭하면 자식 메뉴도 클릭할수 있게 처리 했음. (querySelector로 처리 함. querySelectorAll 안썼음.)
- 그리고 해당 메뉴의 데이터 셋 값을 ID 이름으로 지정해서 그걸 이용해 해당 섹션으로 부드럽게 스크롤.
- 이해 안가는 부분은 map 구간이다. (내 스스로 해석이 가능하면 업데이트 하겠음.)

3. Contact me 버튼 클릭시 해당 섹션으로 이동

- 2번 처럼 해당 메뉴의 데이터 셋 값을 ID 이름으로 지정해서 그걸 이용해 해당 섹션으로 부드럽게 스크롤.

4. 스크롤시 최상단(home) 컨텐츠 내용 투명하게

- 최상단 내용, 최상단 내용 getBoundingClientRect().height 값 변수로 지정
- 최상단 내용의 투명도 조절 => 1 - window.scrollY / 최상단 내용 getBoundingClientRect().height
- ★투명도 조절시 수식 원리 이해 필요★ -> 이해후 수정 예정.

5. 아래로 스크롤시 Top 버튼 보이게

- 이해되면 정리.

6. 프로젝트(포트폴리오) 카테고리 기능.

- 이해되면 정리.

7~9도 작성 해야 함.

추가 수정 사항  
21.8.31

- My Work 카테고리 번호 세로 가운데 정렬로 보이게 CSS 수정
- Mobile 카테고리 First Mobile Site 추가
- Front-end 카테고리 ShoppingList App 추가
- 카테고리 번호 카운트 수정
- Tools 추가 (포토샵)
- JOB란 NICE평가정보 추가
