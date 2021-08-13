// 바닐라 JS 로 구현
// setTimeout(() => {
window.onload = function () {

  let permission = true;
  const htmlLink = document.getElementsByTagName('html')[0];
  const wrap = document.getElementById('wrap');

  // const header = wrap.querySelector('header');
  const downScrollBtn = document.querySelector('.down_scroll');
  const downScrollBtn2 = document.querySelector('.down_scroll2');
  const downScrollBtn3 = document.querySelector('.down_scroll3');
  const upScrollBtn = document.querySelector('.up_scroll');

  const nav = wrap.querySelector('.nav');
  //  side btn 구현
  let home = nav.querySelector('.nav_home');
  let aboutMe = nav.querySelector('.nav_aboutme');
  let projects = nav.querySelector('.nav_projects');
  let contact = nav.querySelector('.nav_contact');
  const btnList = [home, aboutMe, projects, contact];

  let scrollMove;
  // 페이지변수
  let page = 0;
  let htmlh = htmlLink.clientHeight;


  // scroll 이동 애니메이션
  let scrollToanime = function () {
    let moveh = htmlh * page;
    window.scrollTo({
      top: moveh,
      behavior: 'smooth',
    });
    setTimeout(function () {
      permission = true;
    }, 400);
  };



  // 스크롤움직임이 감지됬을경우
  scrollMove = function (e) {
    e.preventDefault();
    if (permission) {
      permission = false;
      // 휠움직임 delta 이 음수 양수일때 
      let delta;
      if (e.wheelDelta) {
        delta = e.wheelDelta;
      } else {
        delta = -e.detail * 40;
      }

      if (delta > 0) {
        if (page === 0) return permission = true;
        page--;
      };
      if (delta < 0) {
        if (page === 3) return permission = true;
        page++;
      }
      scrollToanime();
    }
  };

  // 현재 페이지 체크하는 부분
  let currentPage = function (element, page) {
    element.classList.add('add');
    let parent = element.parentNode;
    let li = parent.getElementsByTagName('li');
    let liLen = parent.getElementsByTagName('li').length;
    for (let i = 0; i < liLen; i++) {
      li[i].classList.remove('add');
      if (i === page) {
        li[i].classList.add('add');
      }
    }
  }

  function getCurrentScroll() {
    return (window.scrollY + window.innerHeight) / document.body.clientHeight * 100
  }
  // 스크롤값 감지
    document.addEventListener('scroll', () => {
    const currentScroll = getCurrentScroll();
      page = Math.floor((currentScroll / 100) - 1);
    console.log(page);
      pagetab();
  });


  // 페이지 변경
  function pagetab() {
    switch (page) {
      case 0:
        currentPage(home, 0)
        break;
      case 1:
        currentPage(aboutMe, 1)
        break;
      case 2:
        currentPage(projects, 2)
        break;
      case 3:
        currentPage(contact, 3)
        break;
      default:
        console.log('page error');
        break;
    }
  }

  // 다운버튼 클릭시
  const downBtnList = [downScrollBtn, downScrollBtn2, downScrollBtn3, upScrollBtn]
  downBtnList.forEach(function (selector) {
    selector.addEventListener('click', function (e) {
      e.preventDefault();
      if (permission) {
        permission = false;
        page++;
        scrollToanime();
        pagetab();
      }
      if (selector === upScrollBtn) {
        permission = false;
        page = 0;
        scrollToanime();
      }
    });
  });
  
  // 네비 버튼 클릭시
  btnList.forEach(function (selector, idx) {
    selector.addEventListener('click', function (e) {
      console.log(selector);
      if (permission) {
        permission = false;
        page = idx;
        scrollToanime();
      }
    });
  });
  pagetab();



  // 휠이벤트 제거
  wrap.addEventListener('mousewheel', scrollMove, true);
  wrap.addEventListener('DOMMouseScroll', scrollMove, false);





  // 새로고침시 맨위로 올라가기
  setTimeout(() => {
    scrollTo(0, 0);
    page = 0;
    permission = true;
  }, 50);
} // window.onload end
