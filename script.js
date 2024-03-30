//your JS code here. If required.
let text = document.getElementById('text').value;
let delay = document.getElementById('delay').value;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function displayMessage() {
  let text = document.getElementById('text').value;
  let delay = document.getElementById('delay').value;
  
  await sleep(delay);
  
  document.getElementById('output').innerText = text;
}

document.getElementById('btn').addEventListener('click', displayMessage);