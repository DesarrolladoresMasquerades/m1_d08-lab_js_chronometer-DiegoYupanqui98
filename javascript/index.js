const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');

const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');

const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  console.log("printing");
  printMinutes();
  printSeconds();
}

function printMinutes() {
  // ... your code goes here
  let mins = chronometer.getMinutes();
  let minString2Val = chronometer.computeTwoDigitNumber(mins);

  minDecElement.innerText = minString2Val[0];
  minUniElement.innerText = minString2Val[1];

}

function printSeconds() {
  // ... your code goes here

  let secs = chronometer.getSeconds();
  let secString2Val = chronometer.computeTwoDigitNumber(secs);

  secDecElement.innerText = secString2Val[0];
  secUniElement.innerText = secString2Val.charAt(1);

}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here

}

function printSplit() {
  // ... your code goes here
  const splitString = chronometer.split();

  const newSplit = document.createElement("li");
  newSplit.innerText = splitString;

  splitsElement.appendChild(newSplit);
}

function clearSplits() {
  // ... your code goes here
  splitsElement.innerHTML = "";
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here

    btnLeftElement.classList.toggle("start")
    btnLeftElement.classList.toggle("stop")

    btnRightElement.classList.toggle("split");
    btnRightElement.classList.toggle("reset");
    
    if(btnLeftElement.classList.contains("start")){
      
      btnLeftElement.innerText = "START"
      btnRightElement.innerText= "RESET"
      chronometer.stop();
    }
    else{
    btnLeftElement.innerText = "STOP"
    btnRightElement.innerText = "SPLIT"
    chronometer.start(printTime);
    }

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if(btnRightElement.classList.contains("split")) printSplit();
  else{
    chronometer.reset();
    clearSplits();
    printTime();
  }

});


