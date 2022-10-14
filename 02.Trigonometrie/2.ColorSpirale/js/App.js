// constante globale
const pixelRatio = window.devicePixelRatio;
// variable globale
let monCanvas;
let mesOutils;
let screenDivider = 8;
let rayon = 100;
let angle = 0;

function start() {
  // constante locale
  monCanvas = document.getElementById("canvas");
  monCanvas.width = (window.innerWidth - 60 * pixelRatio) * pixelRatio;
  monCanvas.height = (window.innerHeight - 60 * pixelRatio) * pixelRatio;
  monCanvas.style.width = window.innerWidth - 60 * pixelRatio;
  monCanvas.style.height = window.innerHeight - 60 * pixelRatio;
  mesOutils = monCanvas.getContext("2d");

  //on initialise l'épaisseur du trait
  // mesOutils.lineWidth = 1;
  // //on arrondit les extrémités des lignes
  // mesOutils.lineCap = "round";
  // //on applique une couleur de ligne
  // mesOutils.strokeStyle = "rgba(150,150,150,0.5)";

  // rayon par défaut
  rayon = window.innerHeight - 120;

  // lancement de la fonction de dessin
  animate();
}

// creation d'un fonction d'animation
// cette fonction sera appelée à chaque frame
function animate() {
  // on efface le canvas
  // mesOutils.clearRect(0, 0, monCanvas.width, monCanvas.height);

  // on dessine
  dessine();

  // on demande à rappeler la fonction animate
  // à la prochaine frame
  requestAnimationFrame(animate);
}

function dessine() {
  let x = monCanvas.width / 2;
  let y = monCanvas.height / 2;
  mesOutils.fillStyle = `hsl(${rayon},30%,50%)`;
  mesOutils.beginPath();
  mesOutils.moveTo(x, y);
  mesOutils.arc(x, y, Math.abs(rayon), 0, (angle * Math.PI) / 180, false);
  mesOutils.lineTo(x, y);
  mesOutils.fill();
  // mesOutils.stroke();
  mesOutils.closePath();

  // on fait augmenter l'angle
  angle++;
  if (angle > 360) {
    angle = 0;
  }

  //on diminue le rayon
  if (rayon > 0) rayon -= 0.1;
}

// attente que tous les éléments soient chargés
// utilisation d'une fonction anonyme en callback
// --> pas de nom de fonction car pas besoin de la réutiliser
window.onload = () => {
  start();
};
