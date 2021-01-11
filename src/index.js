import arrowCreate, { DIRECTION } from 'arrows-svg'
import Enigma, { letterToIndex } from './enigma';
import './enigma.scss';
import './arrows.scss';

const enigma = Enigma.buildDefault();

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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

class MouseArrow {
  constructor(fromElement) {
    const mouseDiv = document.createElement("div");
    this.mouseDiv = mouseDiv;
    mouseDiv.style.cssText = 'position:fixed;opacity:0.0;';
    this.mouseDiv.style.top = (fromElement.getBoundingClientRect().top + document.body.scrollTop) + "px";
    this.mouseDiv.style.left = (fromElement.getBoundingClientRect().left + document.body.scrollLeft) + "px";
    document.body.appendChild(mouseDiv);

    document.body.addEventListener("mousemove", this.onMouseMove.bind(this));

    this.config = {
      className: 'arrow-' + getRandomInt(1, 3) + ' arrow',
      from: {
        direction: DIRECTION.TOP,
        node: fromElement,
        translation: [-0.5, -1],
      },
      to: {
        direction: DIRECTION.RIGHT,
        node: mouseDiv,
        translation: [0.0, 0],
      },
    };
    this.arrow = arrowCreate(this.config);

    document.body.appendChild(this.arrow.node);
  }

  onMouseMove(e) {
    this.mouseDiv.style.top = e.pageY + "px";
    this.mouseDiv.style.left = e.pageX + "px";
  }

  clear() {
    document.body.removeEventListener("mousemove", this.onMouseMove.bind(this));
    this.arrow.clear();
    this.mouseDiv.remove();
  }
}

class PlugboardSocket {
  constructor(enigma, element) {
    this.enigma = enigma;
    this.element = element;
    this.active = false;

    this.setupEventHandlers();
  }

  setupEventHandlers() {
    this.element.addEventListener("click", (e) => {
      if (PlugboardSocket.firstActiveSocket === this) {
        return this.resetConnection();
      }

      if (!PlugboardSocket.firstActiveSocket) {
        return this.startConnection();
      }

      this.endConnection();
    });
  }

  resetConnection() {
    this.active = false;
    PlugboardSocket.firstActiveSocket = null;
    this.mouseArrow.clear();
  }

  startConnection() {
    this.active = true;
    this.element.classList.add("active");

    PlugboardSocket.firstActiveSocket = this;
    this.mouseArrow = new MouseArrow(this.element);
  }

  endConnection() {
    this.active = true;
    this.element.classList.add("active");

    const firstSocket = PlugboardSocket.firstActiveSocket;

    const mouseArrow = firstSocket.mouseArrow;

    const arrow = arrowCreate({
      ...mouseArrow.config,
      to: { ...mouseArrow.config.to, node: this.element }
    });
    document.body.appendChild(arrow.node);

    firstSocket.mouseArrow.clear();
    firstSocket.mouseArrow = null;

    this.enigma.plugboard.addPair(firstSocket.getLetter() + this.getLetter());

    PlugboardSocket.firstActiveSocket = null;
  }

  getLetter() {
    return this.element.parentElement.getElementsByClassName("plugboard-item--letter")[0].innerText
  }
}
PlugboardSocket.firstActiveSocket = null;

function setupPlugboardItems() {
  var item = document.querySelector(".plugboard-item");
  var letters = "WERTZUIOASDFGHJKPYXCVBNML";

  Array.from(letters).forEach(l => {
    var newNode = item.cloneNode(true);
    newNode.querySelector(".plugboard-item--letter").innerText = l;
    newNode.querySelector(".plugboard-item--number").innerText = letterToIndex(l) + 1;
    document.querySelector(".plugboard-row").appendChild(newNode);
  });

  document.querySelectorAll(".plugboard-item--socket").forEach(s => {
    new PlugboardSocket(enigma, s);
  });
}

setupPlugboardItems();

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

document.querySelectorAll(".rotor-knob-down").forEach(b => {
  b.addEventListener("click", (e) => {
    onRotorDown(e.target);
    e.target.blur();
  });
});

