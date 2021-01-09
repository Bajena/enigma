// Original rotator configs from 1930 Enigma I
const RI = "EKMFLGDQVZNTOWYHXUSPAIBRCJ";
const TURNOVER_I =  'Q';

const RII = "AJDKSIRUXBLHWTMCQGZNPYFVOE";
const TURNOVER_II = 'E';

const RIII = "BDFHJLCPRTXVZNYEIWGAKMUSQO";
const TURNOVER_III = 'V';

// Original reflector B config from 1930 Enigma I
const REFLECTOR = "YRUHQSLDPXNGOKMIEBFZCWVJAT";

function letterToIndex(letter) {
  return letter.toUpperCase().charCodeAt() - 65;
}

function indexToLetter(index) {
  return String.fromCharCode(index + 65);
}

class Rotor {
  constructor(wiring, turnoverLetter) {
    this.wiring = wiring;
    this.turnoverIndex = letterToIndex(turnoverLetter);
    this.currentIndex = 0;
  }

  // returns true if turnover was reached before rotation
  rotate() {
    let turnover = this.currentIndex == this.turnoverIndex;
    this.turnUp();

    return turnover;
  }

  turnUp() {
    this.currentIndex = this.moduloAlphabet(this.currentIndex + 1);
  }

  turnDown() {
    this.currentIndex = this.moduloAlphabet(this.currentIndex - 1);
  }

  getCurrentLetter() {
    return indexToLetter(this.currentIndex);
  }

  // right to left
  encode(letter) {
    var rightIndex = letterToIndex(letter);
    var afterWiring = letterToIndex(this.wiring[this.moduloAlphabet(rightIndex + this.currentIndex)]);
    var leftIndex = this.moduloAlphabet(afterWiring - this.currentIndex);

    return indexToLetter(leftIndex);
  }

  // left to right
  decode(letter) {
    var leftIndex = letterToIndex(letter);
    var afterWiring = this.wiring.indexOf(
      indexToLetter(this.moduloAlphabet(leftIndex + this.currentIndex))
    );
    var rightIndex = this.moduloAlphabet(afterWiring - this.currentIndex);

    return indexToLetter(rightIndex);
  }

  moduloAlphabet(index) {
    return (index + 26) % 26;
  }
}

class RotorSet {
  // rotors Array<Rotor> - rotors, starting from rightmost (physically)
  constructor(rotors) {
    this.rotors = rotors;
  }

  // right to left
  encode(letter) {
    this.rotors.forEach(r => { letter = r.encode(letter) });
    return letter;
  }

  // left to right
  decode(letter) {
    this.rotors.slice().reverse().forEach(r => { letter = r.decode(letter) });
    return letter;
  }

  rotate() {
    let shouldRotate = true;

    for (let i = 0; i < this.rotors.length; i++) {
      if (shouldRotate) {
        shouldRotate = this.rotors[i].rotate();
      } else {
        break;
      }
    }
  }
}

class Reflector {
  constructor(wiring) {
    this.wiring = wiring;
  }

  reflect(letter) {
    return this.wiring[letterToIndex(letter)];
  }
}

class Plugboard {
  // A list of letter pairs (max 13). Letters cannot be mapped to themselves.
  // Letters cannot repeat in different pairs.
  // Example: ['AB', 'CE']
  constructor(pairs) {
    if (!Array.isArray(pairs)) { throw 'Please pass an array of strings to plugboard'; }
    if (new Set(pairs.join()).size !== pairs.join().length) { throw 'Plugboard socket used twice'; }

    this.pairs = pairs;
  }

  map(letter) {
    const pair = this.pairs.find(p => p.includes(letter));
    if (!pair) { return letter; }

    return pair.replace(letter, '')[0];
  }
}

class Enigma {
  constructor(rotorSet, plugboard, reflector) {
    this.rotorSet = rotorSet;
    this.plugboard = plugboard;
    this.reflector = reflector;
  }

  write(letter) {
    this.rotorSet.rotate();

    return this.encode(letter);
  }

  encode(letter) {
    letter = this.plugboard.map(letter);
    letter = this.rotorSet.encode(letter);
    letter = this.reflector.reflect(letter);
    letter = this.rotorSet.decode(letter);

    return this.plugboard.map(letter);
  }
}

let rotorIII = new Rotor(RIII, TURNOVER_III);
let rotorII = new Rotor(RII, TURNOVER_II);
let rotorI = new Rotor(RI, TURNOVER_I);
let rotorSet = new RotorSet([rotorIII, rotorII, rotorI]);
let plugboard = new Plugboard(['AB']);
let reflector = new Reflector(REFLECTOR);

let enigma = new Enigma(rotorSet, plugboard, reflector);
