const bubbleCon = document.querySelector('.bubble_con');;



// document.documentElement.style.setProperty('--start-bubble', (Math.floor(Math.random()*2))+'rem');
// document.documentElement.style.setProperty('--end-bubble', (Math.floor(Math.random()*5)+3)+'rem');

let bNum = 20;




for (let i = 0; i < bNum; i++) {
  if (i < bNum/2) {
    let bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubbleattr = bubbleCon.getElementsByClassName('.bubble')[i];
    bubble.style.left = `${Math.floor(Math.random()*96)}%`;
    bubble.style.animation = `bubble-movement-small ${(Math.random()*12)+3}s infinite ease-in-out 0ms`;
    bubble.style.opacity = `${(Math.floor(Math.random()*5)+5)/10}`
    bubbleCon.appendChild(bubble);
  }else {
    let bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubbleattr = bubbleCon.getElementsByClassName('.bubble')[i];
    bubble.style.left = `${Math.floor(Math.random()*96)}%`;
    bubble.style.animation = `bubble-movement-large ${(Math.random()*15)+9}s infinite ease-in-out ${Math.floor(Math.random()*500)}ms`;
    bubble.style.opacity = `${(Math.floor(Math.random()*5)+5)/10}`
    bubbleCon.appendChild(bubble);
  }
}
console.log((Math.floor(Math.random()*5)+5)/10);


