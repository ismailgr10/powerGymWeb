///la vitesse de la video
const video = document.getElementById("clip");
video.playbackRate = 0.5;

//la liste des phrases a afficher
const phrases = [
  "<span>R</span>EDEFINE <span>Y</span>OUR <span>L</span>IMITS",
  "<span>S</span>TRONGER <span>B</span>ODY, <span>S</span>HARPER <span>M</span>IND",
  "<span>P</span>USH <span>Y</span>OUR <span>B</span>OUNDARIES",
  "<span>T</span>RAIN <span>S</span>MART, <span>T</span>RAIN <span>I</span>NTENSE",
  "<span>E</span>LEVATE <span>E</span>VERY <span>R</span>EP",
];

const titleEl = document.getElementById("rotating-title");
let idx = 0; //l'index de la phrase actuelle

//lance animation de la machine a ecrire
function setPhrase(i) {
  titleEl.classList.remove("typewriter"); //enlever l'animation machine a ecrire pourque l'animation puisse redemarrer
  void titleEl.offsetWidth; // forcer le navigateur à redemarrer l'animation
  titleEl.innerHTML = phrases[i]; //changer le texte
  titleEl.classList.add("typewriter"); //remet l'animation(typing et blink-caret)
}
setPhrase(idx); // afficher la premiere phrase

//5 secondes,le texte change
//setInterval une fonction predefinie en js qui repete une action auto pendant un temps
setInterval(() => {
  idx = (idx + 1) % phrases.length; //passer a la phrase suivante
  // %phrases.length pour revenir a 0 quand on arrive la fin
  setPhrase(idx);
}, 5000); //changer toutes les 5 secondes

// effet de flip pendant le scroll
const flips = document.querySelectorAll(".flip");

window.addEventListener("scroll", () => {
  flips.forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

//l effet de translation pendant le scroll
const trsl = document.querySelectorAll(".translat");

window.addEventListener("scroll", () => {
  trsl.forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});
//menu toggle
function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("show");
}
/*la machine a ecrire 
css :texte apparait petit à petit
js change la phrase er relance l'animation*/
