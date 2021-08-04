// 바닐라 JS 로 구현
setTimeout(() => {
  let permission = true;
  const html = document.getElementsByTagName('html')[0];
  const wrap = document.getElementById('wrap');
  
  const header = wrap.querySelector('header');
  const downScrollBtn = header.querySelector('.down_scroll');
  const downScrollBtn2 = document.querySelector('.down_scroll2');
  const upScrollBtn = document.querySelector('.up_scroll');
  
  const nav = wrap.querySelector('.nav');
  //  side btn 구현
  const home = nav.querySelector('.nav_home');
  const aboutMe = nav.querySelector('.nav_aboutme');
  const projects = nav.querySelector('.nav_projects');
  const contact = nav.querySelector('.nav_contact');

  const info_AbBtn = document.getElementsByClassName('btn_box')[0];

  let scrollMove;

  let page = 0;
  let htmlh = html.clientHeight;
  

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
      console.log("Current Page : " + page);
      scrollToanime();
      pagetab();
    }
  };


  let currentPage = function (element,page) {
    element.classList.add('add');
    let parent = element.parentNode;
    let li = parent.getElementsByTagName('li');
    let liLen = parent.getElementsByTagName('li').length;
    for (let i = 0; i < liLen; i++) {
      li[i].classList.remove('add');
      if (i===page) {
        li[i].classList.add('add');
        console.log('same');
      }
    }
  }
  function pagetab() {
    switch (page) {
      case 0:
        currentPage(home,0)
        break;
      case 1:
        currentPage(aboutMe,1)
        break;
      case 2:
        currentPage(projects,2)
        break;
      case 3:
        currentPage(contact,3)
        break;
      default:
        console.log('page error');
        break;
    }
  }


  wrap.addEventListener('mousewheel', scrollMove, true);
  wrap.addEventListener('DOMMouseScroll', scrollMove, false);


  // 다운버튼 클릭시
  downScrollBtn.addEventListener('click', function (e) {
    if (permission) {
      permission = false;
      page++;
      scrollToanime();
      pagetab();
    }
  });

  downScrollBtn2.addEventListener('click', function (e) {
    if (permission) {
      permission = false;
      page++;
      scrollToanime();
      pagetab();
    }
  });
  // 업버튼 클릭시 
  upScrollBtn.addEventListener('click', function (e) {
    if (permission) {
      permission = false;
      page = 0;
      scrollToanime();
    }
  });



  // 각 사이드버튼 클릭시 이동
  home.addEventListener('click', function () {
    if (permission) {
      permission = false;
      page = 0;
      scrollToanime();
      pagetab();
    }
  });

  aboutMe.addEventListener('click', function () {
    if (permission) {
      permission = false;
      page = 1;
      scrollToanime();
      pagetab();
    }
  });

  projects.addEventListener('click', function () {
    if (permission) {
      permission = false;
      page = 2;
      scrollToanime();
      pagetab();
    }
  });

  contact.addEventListener('click', function () {
    if (permission) {
      permission = false;
      page = 3;
      scrollToanime();
      pagetab();
    }
  });

  pagetab();
}, 50); // settimeout end ----



// 새로고침시 맨위로 올라가기
window.onload = function () {
  setTimeout(() => {
    scrollTo(0, 0);
    page = 0;
    permission = true;
  }, 100);
}
