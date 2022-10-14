// constante globale
const pixelRatio = window.devicePixelRatio;
// variable globale
let monCanvas;
let mesOutils;
let screenDivider = 8;
let rayon = 100;
let angle = 0;
let angleY = 0;
let v1 = Math.random();
let v2 = Math.random();
let sizeR = Math.random() * 200 + 10;
let pointsLissajous = [];

function start() {
  // constante locale
  monCanvas = document.getElementById("canvas");
  monCanvas.width = (window.innerWidth - 60 * pixelRatio) * pixelRatio;
  monCanvas.height = (window.innerHeight - 60 * pixelRatio) * pixelRatio;
  monCanvas.style.width = window.innerWidth - 60 * pixelRatio;
  monCanvas.style.height = window.innerHeight - 60 * pixelRatio;
  mesOutils = monCanvas.getContext("2d");

  // rayon par défaut
  rayon = window.innerHeight - 200;

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

function dessineAxes(x, y) {
  mesOutils.lineWidth = 1;
  mesOutils.strokeStyle = "lightgrey";
  mesOutils.beginPath();
  mesOutils.moveTo(x, 0);
  mesOutils.lineTo(x, monCanvas.height);
  mesOutils.stroke();
  mesOutils.closePath();

  mesOutils.beginPath();
  mesOutils.moveTo(0, y);
  mesOutils.lineTo(monCanvas.width, y);
  mesOutils.stroke();
  mesOutils.closePath();
}

function dessine() {
  let x = monCanvas.width / 2;
  let y = monCanvas.height / 2;

  //on dessgine des axes
  // dessineAxes(x, y);

  // on initialise l'épaisseur du trait
  mesOutils.lineWidth = 10;
  //on arrondit les extrémités des lignes
  mesOutils.lineCap = "round";
  // on initialise la couleur du trait
  mesOutils.strokeStyle = "#999";

  mesOutils.fillStyle = "lightgreen";
  let posX = x + Math.cos(angle * (Math.PI / 180)) * rayon;
  let posY = y;
  // mesOutils.beginPath();
  // mesOutils.arc(posX, posY, 20, 0, 2 * Math.PI, false);
  // mesOutils.fill();
  // mesOutils.closePath();

  mesOutils.fillStyle = "orange";

  let _posX = posX;
  let _posY = y + Math.sin(angleY * (Math.PI / 180)) * rayon;
  // pointsLissajous.push({ x: _posX, y: _posY });
  // mesOutils.beginPath();
  // mesOutils.arc(_posX, _posY, 20, 0, 2 * Math.PI, false);
  // mesOutils.fill();
  // mesOutils.closePath();

  //on dessine tous les points lissajous

  mesOutils.lineWidth = 2;
  mesOutils.strokeStyle = `hsla(${angle}, 100%, 40%, 0.3)`;
  mesOutils.beginPath();
  mesOutils.arc(
    _posX,
    _posY,
    Math.abs(sizeR * Math.sin(angle * (Math.PI / 180))),
    0,
    2 * Math.PI,
    false
  );
  mesOutils.stroke();
  mesOutils.closePath();

  // on fait augmenter l'angle
  angle += v1;
  if (angle > 360) {
    angle = 0;
  }

  // on fait augmenter l'angle
  angleY += v2;
  if (angleY > 360) {
    angleY = 0;
  }
}

// attente que tous les éléments soient chargés
// utilisation d'une fonction anonyme en callback
// --> pas de nom de fonction car pas besoin de la réutiliser
window.onload = () => {
  start();
};
