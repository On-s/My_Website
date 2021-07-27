// console.log(Math.floor(Math.random() * 2)+6); 6또는7

const bubbleCon = document.querySelector('.bubble_con');
const bubbles = document.querySelector('.bubbles');
const bubblesSize = bubbles.querySelector('.bubbles_size');

let browserW = window.innerWidth;
let browserH = window.innerHeight;


// function mBubble(size) {

  // for (let i = 0; i < count; i++) {
      
      let ranBrowserW = Math.floor(Math.random()* browserW);
      let mG = document.createElement('g');
      let bubble = `<g transform="translate(10 949)"><circle cx="35" cy="35" r="35"/></g>`
      mG.innerHTML = bubble;
      bubblesSize.appendChild(mG);

      
  // }
// }
