var adviceButton = document.querySelector('#advice-button')
var adviceText = document.querySelector('#advice');
var adviceId = document.querySelector('#advice-id');

async function fetchAdvice(){
  const adviceSlip = await fetch('https://api.adviceslip.com/advice')
    .then(response => response.json());
  adviceText.innerText = `"${adviceSlip.slip.advice}"`;
  adviceId.innerText = `${adviceSlip.slip.id}`
}

adviceButton.addEventListener('click',fetchAdvice)