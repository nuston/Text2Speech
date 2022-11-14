const btn = document.querySelector('#btn');
const text = document.querySelector('#text');
const speech = window.speechSynthesis;
let utter;

text.oninput = () => {
  utter = new SpeechSynthesisUtterance(text.value);
  utter.pitch = 0.8;
  utter.rate = 0.75;
}

const speakOut = () => {
  if (!speech.speaking) {
    speech.speak(utter);
    btn.innerHTML = `<span>stop</span>`;
  } else if (speech.speaking){
    speech.cancel();
  }
  utter.onend = () => btn.innerHTML = `<span>Tap-2-Speak</span>`
}

btn.onclick = e => {
  e.preventDefault();
  speakOut();
}

//date
let cYear = new Date().getFullYear();

let copy = document.querySelector('#copy');
copy.innerHTML = `&copy; ${cYear}`;
