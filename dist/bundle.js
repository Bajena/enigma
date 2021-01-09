(()=>{"use strict";var n={315:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(645),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,'body {\n  background: rgb(37 37 37);\n}\n\n#main-wrapper {\n  display: flex;\n  justify-content: center;\n}\n\n#machine-container {\n  width: 420px;\n  border: 14px solid #795548;\n  padding: 20px;\n}\n\n.enigma-logo {\n  position: relative;\n  float: right;\n  top: 5px;\n}\n\n.enigma-logo img {\n  width: 120px;\n}\n\n#enigma-output {\n  display: none;\n  display: flex;\n  justify-content: flex-end;\n  margin-right: 5px;\n}\n\n#enigma-output-text {\n  background: white;\n  padding: 5px;\n  margin-bottom: 10px;\n  margin-left: 10px;\n  min-width: 10px;\n  font-family: "Courier New", monospace;\n  overflow-x: auto;\n  text-overflow: unset;\n}\n\n#rotors {\n  margin-left: 15px;\n  margin-bottom: 20px;\n}\n\n.rotor {\n  display: inline-block;\n  margin-right: 15px;\n}\n\n.rotor-window {\n  display: inline-block;\n  background: #808080;\n  color: white;\n  border: 2px silver solid;\n  padding: 8px;\n  width: 11px;\n  height: 20px;\n  text-align: center;\n  box-shadow: inset 0px 18px 6px -12px #191919, inset 0px -18px 6px -12px #191919;\n}\n\n.rotor-knob {\n  display: inline-block;\n  position: relative;\n  top: 11px;\n}\n\n.rotor-knob-button {\n  height: 21px;\n}\n\n.lampboard-letter {\n  border-radius: 20px;\n  padding: 3px;\n  width: 30px;\n  height: 30px;\n  margin: 6px;\n  background: black;\n  color: white;\n  border-color: white;\n  border-width: 0px;\n  border-image: none;\n  border-style: solid;\n  color: gray;\n}\n\n.lampboard-letter.active {\n  color: #FC0;\n  text-shadow: #FC0 2px 0px 3px;\n}\n\n.lampboard-letter:focus {\n  outline: none;\n}\n\n#lampboard-row-1 {\n  margin-left: 10px;\n}\n\n#lampboard-row-2 {\n  margin-left: 26px;\n}\n\n#lampboard {\n  margin-bottom: 20px;\n}\n\n.keyboard-button:active {\n  top: 3px;\n  left: 2px;\n  position: relative;\n}\n\n.keyboard-button:focus {\n  outline: none;\n}\n\n.keyboard-button {\n  border-radius: 20px;\n  padding: 3px;\n  width: 32px;\n  height: 32px;\n  margin: 5px;\n  background: black;\n  color: white;\n  border-color: white;\n  border-width: 2px;\n  box-shadow: 4px -2px 1px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important;\n  border-image: none;\n  border-style: solid;\n}\n\n.keyboard-row {\n  border-top: 2px solid black;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n#keyboard-row-1 {\n  padding-left: 10px;\n}\n\n#keyboard-row-2 {\n  padding-left: 26px;\n}\n',""]);const i=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var d=0;d<n.length;d++){var c=[].concat(n[d]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},379:(n,e,t)=>{var r,o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function a(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function d(n,e){for(var t={},r=[],o=0;o<n.length;o++){var d=n[o],c=e.base?d[0]+e.base:d[0],s=t[c]||0,l="".concat(c," ").concat(s);t[c]=s+1;var u=a(l),p={css:d[1],media:d[2],sourceMap:d[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:l,updater:b(p,e),references:1}),r.push(l)}return r}function c(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var s,l=(s=[],function(n,e){return s[n]=e,s.filter(Boolean).join("\n")});function u(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=l(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function p(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var h=null,f=0;function b(n,e){var t,r,o;if(e.singleton){var i=f++;t=h||(h=c(e)),r=u.bind(null,t,i,!1),o=u.bind(null,t,i,!0)}else t=c(e),r=p.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=d(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=a(t[r]);i[o].references--}for(var c=d(n,e),s=0;s<t.length;s++){var l=a(t[s]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=c}}}}},e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{function n(n){return n.toUpperCase().charCodeAt()-65}function e(n){return String.fromCharCode(n+65)}class r{constructor(e,t){this.wiring=e,this.turnoverIndex=n(t),this.currentIndex=0}rotate(){let n=this.currentIndex==this.turnoverIndex;return this.turnUp(),n}turnUp(){this.currentIndex=this.moduloAlphabet(this.currentIndex+1)}turnDown(){this.currentIndex=this.moduloAlphabet(this.currentIndex-1)}getCurrentLetter(){return e(this.currentIndex)}encode(t){var r=n(t),o=n(this.wiring[this.moduloAlphabet(r+this.currentIndex)]);return e(this.moduloAlphabet(o-this.currentIndex))}decode(t){var r=n(t),o=this.wiring.indexOf(e(this.moduloAlphabet(r+this.currentIndex)));return e(this.moduloAlphabet(o-this.currentIndex))}moduloAlphabet(n){return(n+26)%26}}class o{constructor(n){this.rotors=n}encode(n){return this.rotors.forEach((e=>{n=e.encode(n)})),n}decode(n){return this.rotors.slice().reverse().forEach((e=>{n=e.decode(n)})),n}rotate(){let n=!0;for(let e=0;e<this.rotors.length&&n;e++)n=this.rotors[e].rotate()}}class i{constructor(n){this.wiring=n}reflect(e){return this.wiring[n(e)]}}class a{constructor(n){if(!Array.isArray(n))throw"Please pass an array of strings to plugboard";if(new Set(n.join()).size!==n.join().length)throw"Plugboard socket used twice";this.pairs=n}map(n){const e=this.pairs.find((e=>e.includes(n)));return e?e.replace(n,"")[0]:n}}class d{static buildDefault(){let n=new r("BDFHJLCPRTXVZNYEIWGAKMUSQO","V"),e=new r("AJDKSIRUXBLHWTMCQGZNPYFVOE","E"),t=new r("EKMFLGDQVZNTOWYHXUSPAIBRCJ","Q"),c=new o([n,e,t]),s=new a(["AB"]),l=new i("YRUHQSLDPXNGOKMIEBFZCWVJAT");return new d(c,s,l)}constructor(n,e,t){this.rotorSet=n,this.plugboard=e,this.reflector=t}write(n){return this.rotorSet.rotate(),this.encode(n)}encode(n){return n=this.plugboard.map(n),n=this.rotorSet.encode(n),n=this.reflector.reflect(n),n=this.rotorSet.decode(n),this.plugboard.map(n)}}var c=t(379),s=t.n(c),l=t(315);s()(l.Z,{insert:"head",singleton:!1}),l.Z.locals;const u=d.buildDefault();function p(){const n=document.querySelector(".lampboard-letter.active");n&&n.classList.remove("active")}function h(n){document.getElementById("enigma-output-text").innerHTML+=n}function f(){const n=u.rotorSet.rotors,e=Array.from(document.querySelectorAll(".rotor-window")).reverse();for(let t=0;t<n.length;t++)e[t].innerText=n[t].getCurrentLetter()}function b(n){const e=u.write(n);!function(n){Array.from(document.querySelectorAll(".lampboard-letter")).find((e=>e.innerText===n)).classList.add("active")}(e),h(e),f()}document.querySelectorAll(".keyboard-button").forEach((n=>{n.addEventListener("mousedown",(n=>{b(n.target.innerText),n.target.blur()}))})),document.addEventListener("mouseup",(n=>{p()})),document.addEventListener("keydown",(n=>{if(n.repeat)return;if("Space"===n.code)return void h("&nbsp;");const e=n.key.toUpperCase();1===e.length&&e.charCodeAt()>=65&&e.charCodeAt()<=90&&b(e)})),document.addEventListener("keyup",(n=>{p()})),document.querySelectorAll(".rotor-knob-up").forEach((n=>{n.addEventListener("click",(n=>{!function(n){const e=Array.from(document.querySelectorAll(".rotor-knob-up")).reverse().indexOf(n);u.rotorSet.rotors[e].turnUp(),f()}(n.target),n.target.blur()}))})),document.querySelectorAll(".rotor-knob-down").forEach((n=>{n.addEventListener("click",(n=>{!function(n){const e=Array.from(document.querySelectorAll(".rotor-knob-down")).reverse().indexOf(n);u.rotorSet.rotors[e].turnDown(),f()}(n.target),n.target.blur()}))}))})()})();