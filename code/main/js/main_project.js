
let jsonData;
let serviceData;

const project = document.querySelector('#project');
const proCon = project.querySelector('.proCon');

// ul 생성후 삽입
const setUl = document.createElement('ul');
proCon.appendChild(setUl);
const proConUl = proCon.querySelector('ul');


if (window.XMLHttpRequest) {
  jsonData = new XMLHttpRequest();
} else {
  jsonData = new ActiveXObject("Microsoft.XMLHTTP");
}


jsonData.onreadystatechange = function () {
  if (jsonData.readyState === 4 && jsonData.status === 200) {
    console.log('success');

    data = JSON.parse(jsonData.responseText);

    //데이터 길이
    let proLinkLen = Object.keys(data).length;

    let permission = true;

    function mLi(position) {  
      for (let i = 0; i < proLinkLen; i++) {
        let mLi = document.createElement('li');
        let p_thum = `<div class="p_thum"><img src="${Object.values(data)[i].img}" alt="project thumnail img"></div>`
        let p_Description = `<div class="p_Description"><p>${Object.values(data)[i].description}</p></div>`
        let p_link = `<div class="p_link"><a href="${Object.values(data)[i].link}">SiteLink</a><a href="${Object.values(data)[i].code}">Github</a><a href="#">Process</a></div>`
        let con = `<a href="${Object.values(data)[i].link}">${Object.keys(data)[i]}</a>`;
        let projectBox = '<div class="project_box">' + p_link + p_Description + p_thum + '</div>'
        mLi.innerHTML = con + projectBox;
        mLi.style.width = (100 / proLinkLen) + '%';
        position.appendChild(mLi);
      }
    }
    mLi(proConUl);


    // ul 길이 변경
    proConUl.style.width = (100 * proLinkLen) + '%';


    // 버튼 연결 및 이벤트
    const btnNext = proCon.querySelector('.nextbtn');
    const btnPre = proCon.querySelector('.prebtn');

    let count = 0;

    btnNext.addEventListener('click', function (e) {
      e.preventDefault();
      if (permission) {
        permission = false;
        if (count < proLinkLen - 1) {
          count++;
          setUl.style.marginLeft = (-100 * count) + '%';
          console.log(count);
        }
        setTimeout(() => {
          permission = true
        }, 100);
      }
    });

    btnPre.addEventListener('click', function (e) {
      e.preventDefault();
      if (permission) {
        permission = false;
        if (count >= 1) {
          count--;
          setUl.style.marginLeft = (-100 * count) + '%';
          console.log(count);
        }
        setTimeout(() => {
          permission = true
        }, 100);
      }
    });

  } //if jsonData.readyState end
} //jsonData.onreadystatechange end

// jsonData open
jsonData.open("GET", "../../data/project.json");
jsonData.send();
