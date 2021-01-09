import Enigma from './enigma';
import './enigma.css';

const enigma = Enigma.buildDefault();

function lampOn(outputLetter) {
  const lamp = Array.from(document.querySelectorAll('.lampboard-letter'))
    .find(el => el.innerText === outputLetter);
  lamp.classList.add("active");
}

function lampOff() {
  const activeLamp = document.querySelector('.lampboard-letter.active');
  if (!activeLamp) { return; }
  activeLamp.classList.remove("active");
}

function addToOutput(outputLetter) {
  const textDiv = document.getElementById("enigma-output-text");
  textDiv.innerHTML += outputLetter;
}

function refreshRotorValues() {
  const rotors = enigma.rotorSet.rotors;
  const htmlRotors = Array.from(document.querySelectorAll('.rotor-window')).reverse();

  // Update rotors from right to left
  for (let i = 0; i < rotors.length; i++) {
    htmlRotors[i].innerText = rotors[i].getCurrentLetter();
  }
}

function onRotorUp(button) {
  const rotorIndex = Array.from(document.querySelectorAll('.rotor-knob-up')).reverse().indexOf(button);
  enigma.rotorSet.rotors[rotorIndex].turnUp();
  refreshRotorValues();
}

function onRotorDown(button) {
  const rotorIndex = Array.from(document.querySelectorAll('.rotor-knob-down')).reverse().indexOf(button);
  enigma.rotorSet.rotors[rotorIndex].turnDown();
  refreshRotorValues();
}

function writeLetter(letter) {
  const outputLetter = enigma.write(letter);
  lampOn(outputLetter);
  addToOutput(outputLetter);
  refreshRotorValues();
}

document.querySelectorAll(".keyboard-button").forEach(b => {
  b.addEventListener("mousedown", (e) => {
    writeLetter(e.target.innerText);
    e.target.blur();
  });
});

document.addEventListener("mouseup", (e) => {
  lampOff();
});

document.addEventListener("keydown", (e) => {
  if (e.repeat) {
    return;
  }

  if (e.code === "Space") {
    addToOutput("&nbsp;");
    return;
  }

  const letter = e.key.toUpperCase();
  if (letter.length === 1 && letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90) {
    writeLetter(letter);
  }
});

document.addEventListener("keyup", (e) => {
  lampOff();
});

document.querySelectorAll(".rotor-knob-up").forEach(b => {
  b.addEventListener("click", (e) => {
    onRotorUp(e.target);
    e.target.blur();
  });
});

document.querySelectorAll(".rotor-knob-down").forEach(b => {
  b.addEventListener("click", (e) => {
    onRotorDown(e.target);
    e.target.blur();
  });
});
