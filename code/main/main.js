let permission = true;
const html = document.getElementsByTagName('html')[0];
const wrap = document.getElementById('wrap');

const header = wrap.querySelector('header');
const downScrollBtn = header.querySelector('button');

const nav = wrap.querySelector('.nav');

let scrollMove;

let page = 0;
let htmlh = html.clientHeight;

let scrollToanime = function () {
  let moveh = htmlh * page;
  window.scrollTo({
    top: moveh,
    behavior: 'smooth',
  });
  setTimeout(function () {
    permission = true;
  }, 500);
};


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
      console.log(delta, page);
    };

    if (delta < 0) {
      if (page === 2) return permission = true;
      page++;
      console.log(delta, page);
    }
    console.log(page);
    scrollToanime();
  }
};


wrap.addEventListener('mousewheel', scrollMove, true);
wrap.addEventListener('DOMMouseScroll', scrollMove, false);

// 새로고침시 맨위로 올라가기
window.onload = function () {
  setTimeout(() => {
    scrollTo(0, 0);
    page = 0;
    permission = true;
  }, 100);
}



downScrollBtn.addEventListener('click', function (e) {
  if (permission) {
    permission = false;
    page++;
    scrollToanime();
  }
}); 


const home = nav.querySelector('.nav_home');
const aboutMe = nav.querySelector('.nav_aboutme');
const projects = nav.querySelector('.nav_projects');

home.addEventListener('click',function() {
  if (permission) {
    permission = false;
    page = 0;
    scrollToanime();
  }
});

aboutMe.addEventListener('click',function () {
  if (permission) {
    permission = false;
    page = 1;
    scrollToanime();
  }
})

projects.addEventListener('click',function () {
  if (permission) {
    permission = false;
    page = 2;
    scrollToanime();
  }
})