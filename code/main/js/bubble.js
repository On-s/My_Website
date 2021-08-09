const bubbleCon = document.querySelector('.bubble_con');;



// document.documentElement.style.setProperty('--start-bubble', (Math.floor(Math.random()*2))+'rem');
// document.documentElement.style.setProperty('--end-bubble', (Math.floor(Math.random()*5)+3)+'rem');

let bNum = 20;


for (let i = 0; i < bNum; i++) {
  let bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubbleattr = bubbleCon.getElementsByClassName('.bubble')[i];
  bubble.style.left = `${Math.floor(Math.random()*81)+10}%`;
  bubble.style.animation = `bubble-movement ${Math.floor(Math.random()*10)+5}s infinite ease-in-out ${Math.floor(Math.random()*300)}ms`;
  console.log(document.documentElement.style.setProperty('--my-variable-name', (Math.floor(Math.random()*5)+3)+'rem'));
  bubbleCon.appendChild(bubble);
}



