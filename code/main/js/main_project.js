const project = document.querySelector('#project');
const proCon = project.querySelector('.proCon');

// ul 생성후 삽입
const setUl = document.createElement('ul');
proCon.appendChild(setUl);
const proConUl = proCon.querySelector('ul');


// 프로젝트 데이터
const projectLink = {
  "Renewal Website": {
    "link": "https://renewal-website.vercel.app/html/bhc_renewal_main.html",
    "explanation": "반응형으로 웹사이트를 리뉴얼",
    "Date": "21.08.14",
    "img": "../res/"
  },
  "data01": {
    "link": "https://naver.com",
    "explanation": "01 01 01",
    "Date": "21.08.14",
    "img": "../res/"
  },
  "data02": {
    "link": "##",
    "explanation": "02 02 02",
    "Date": "21.08.14",
    "img": "../res/"
  }
}
// 객체 길이구하기
let proLinkLen = Object.keys(projectLink).length;

console.log(proLinkLen);

// 배열에 link,ex 값 넣기 
let linkArr = [];
let exArr = [];
let pThumbnailArr = [];

for (const i in projectLink) {
  let alink;
  alink = projectLink[i].link;
  linkArr.push(alink);
}

for (const i in projectLink) {
  let ex;
  ex = projectLink[i].explanation;
  exArr.push(ex);
}

// Li 생성
function mLi(count, position) {
  for (let i = 0; i < count; i++) {
    let mLi = document.createElement('li');
    let p_thum = `<div class="p_thum"></div>`
    let p_Description = `<div class="p_Description"></div>`
    let p_link = `<div class="p_link""></div>`
    // let p_CodeSource = `<div class="p_CodeSource"></div>`
    let p_process = `<div class="p_process"></div>`
    let con = `<a href="${linkArr[i]}">${Object.keys(projectLink)[i]}</a><div class="explanation">${exArr[i]}</div>`;
    let projectBox = '<div class="project_box">'+p_link+p_Description+p_thum+p_process+'</div>'
    mLi.innerHTML = con + projectBox;
    mLi.style.width = (100 / proLinkLen) + '%';
    position.appendChild(mLi);
  }
}+
mLi(proLinkLen, proConUl);


// ul 길이 변경
proConUl.style.width = (100 * proLinkLen) + '%';


const btnNext = proCon.querySelector('.nextbtn');
const btnPre = proCon.querySelector('.prebtn');

let count = 1;

btnNext.addEventListener('click', function (e) {
  e.preventDefault();
  if (count < proLinkLen - 1) {
    count++;
    setUl.style.marginLeft = (-100 * count) + '%';
    console.log(count);
  }
});

btnPre.addEventListener('click', function (e) {
  e.preventDefault();
  if (count >= 1) {
    count--;
    setUl.style.marginLeft = (-100 * count) + '%';
    console.log(count);
  }
});
