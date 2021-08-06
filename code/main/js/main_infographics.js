const html = document.getElementsByTagName('html')[0];
const infographics = document.querySelector('#infographics');
const info_con = infographics.querySelector('.info_con');
const text_con = info_con.querySelector('.text_con');

const tab_con = text_con.querySelector('.tab_con');

let aboutBtn = tab_con.getElementsByClassName('btn_box')[0];
let skillBtn = tab_con.getElementsByClassName('btn_box')[1];

const aboutCon = text_con.querySelector('.about_con');
const skillCon = text_con.querySelector('.skill_con');

const progressEl = document.getElementsByTagName('progress');

let progress_html = document.getElementsByTagName('progress')[0];
let progress_css = document.getElementsByTagName('progress')[1];
let progress_js = document.getElementsByTagName('progress')[2];
let progress_jq = document.getElementsByTagName('progress')[3];
let progress_ai = document.getElementsByTagName('progress')[4];
let progress_ps = document.getElementsByTagName('progress')[5];

let proArr = [progress_html, progress_css, progress_js, progress_jq, progress_ai, progress_ps];

// progress animation 
function tag(progress, i) {
  // 간격
  let interval = 1;
  // 속도
  let updatesPerSecond = 1000 / 60;
  // max 위치
  let end = progress.max * i;

  function animator() {
    progress.value = progress.value + interval
    if (progress.value + interval < end) {
      setTimeout(animator, updatesPerSecond);
    } else {
      progress.value = end
    }
  }
  setTimeout(() => {
    animator()
  }, updatesPerSecond)
}




function clickchange(data1, data2) {
  let data1st = data1.style;
  let data2st = data2.style;

  let getdata1attr = data1.getAttribute('display');
  let getdata2attr = data2.getAttribute('display');

  if (getdata1attr === 'none' && getdata2attr === 'block') {
    data1st.display = 'block';
    data2st.display = 'none';
  }
  data1st.display = 'none';
  data2st.display = 'block';
}

aboutBtn.classList.add('select_btn');
aboutBtn.addEventListener('click', function () {
  clickchange(skillCon, aboutCon);
  for (let i = 0; i < progressEl.length; i++) {
    tag(progressEl[i], 0);
  }
  aboutBtn.classList.add('select_btn');
  skillBtn.classList.remove('select_btn');
});


let skillGage = {
  html: 95,
  css: 90,
  js: 90,
  jq: 85,
  ai: 50,
  ps: 40
}
let arrSkillgage = Object.values(skillGage);

skillBtn.addEventListener('click', function () {
  clickchange(aboutCon, skillCon);
  for (let i = 0; i < arrSkillgage.length; i++) {
    tag(progressEl[i], arrSkillgage[i] / 100);
  }
  skillBtn.classList.add('select_btn');
  aboutBtn.classList.remove('select_btn');
});
