const synth = window.speechSynthesis;

const text = document.querySelector('#text');
const btn = document.querySelector('#btn');
const rate = document.querySelector('#rate');

function speak() {
  if (synth.speaking) {
    synth.cancel();
  }
  const utterThis = new SpeechSynthesisUtterance(text.value);
  utterThis.addEventListener('error', () => {
    console.error('SpeechSynthesisUtterance error');
    
  });
  
utterThis.rate = rate.value;
  synth.speak(utterThis);
}

btn.addEventListener('click', speak);


//date
let cYear = new Date().getFullYear();

let copy = document.querySelector('#copy');
copy.innerHTML = `&copy; ${cYear}`;
