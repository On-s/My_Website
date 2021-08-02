const project = document.querySelector('#project');
const proCon = project.querySelector('.proCon');

// ul 생성후 삽입
const setUl = document.createElement('ul');
proCon.appendChild(setUl);
const proConUl = proCon.querySelector('ul');


// 객체 데이터
const projectLink = {
  "Renewal Website": {
    "link": "https://renewal-website.vercel.app/html/bhc_renewal_main.html",
    "explanation": "반응형으로 웹사이트를 리뉴얼",
    "Date": "21.08.14"
  },
  "data01": {
    "link": "https://naver.com",
    "explanation": "01 01 01",
    "Date": "21.08.14"
  },
  "data02": {
    "link": "##",
    "explanation": "02 02 02",
    "Date": "21.08.14"
  },
  "data03": {
    "link": "###",
    "explanation": "03 03 03",
    "Date": "21.08.14"
  }
}
// 객체 길이구하기
let proLinkLen = Object.keys(projectLink).length;

console.log(proLinkLen);

// 배열에 link,ex 값 넣기 
let linkArray = [];
let exArray = [];
let proName = [];

for (const i in projectLink) {
  let alink;
  alink = projectLink[i].link;
  linkArray.push(alink);
}

for (const i in projectLink) {
  let ex;
  ex = projectLink[i].explanation;
  exArray.push(ex);
}

// Li 생성
function mLi(count , position) {
  for (let i = 0; i < count; i++) {
    let mLi = document.createElement('li');
    let con = `<a href="${linkArray[i]}">${Object.keys(projectLink)[i]}</a><div class="explanation">${exArray[i]}</div>`;
    mLi.innerHTML = con;
    mLi.style.width = (100/proLinkLen) + '%';
    position.appendChild(mLi);
  }
}
mLi(proLinkLen,proConUl);


// ul 길이 변경
proConUl.style.width = (100 * proLinkLen) + '%' ;


const btnNext = proCon.querySelector('.nextbtn');
const btnPre = proCon.querySelector('.prebtn');

let conut = 1;

btnNext.addEventListener('click',function(e) {
  e.preventDefault();
  if(count <= proLinkLen)
  this.animate([
    // {marginLeft : }
  ])
})