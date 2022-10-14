// constante globale
const pixelRatio = window.devicePixelRatio;
// variable globale
let monCanvas;
let mesOutils;
let screenDivider = 8;
let rayon = 100;
let angle = 0;
let deplacementx = 0;
let deplacementy = 0;
let pointsCos = [];
let pointsSin = [];

function start() {
  // constante locale
  monCanvas = document.getElementById("canvas");
  monCanvas.width = (window.innerWidth - 60 * pixelRatio) * pixelRatio;
  monCanvas.height = (window.innerHeight - 60 * pixelRatio) * pixelRatio;
  monCanvas.style.width = window.innerWidth - 60 * pixelRatio;
  monCanvas.style.height = window.innerHeight - 60 * pixelRatio;
  mesOutils = monCanvas.getContext("2d");

  // rayon par défaut
  rayon = window.innerHeight / 2 - 200;

  // lancement de la fonction de dessin
  animate();
}

// creation d'un fonction d'animation
// cette fonction sera appelée à chaque frame
function animate() {
  // on efface le canvas
  mesOutils.clearRect(0, 0, monCanvas.width, monCanvas.height);

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
  let x = monCanvas.width / 4;
  let y = monCanvas.height / 4;

  //on dessgine des axes
  dessineAxes(x, y);

  // on initialise l'épaisseur du trait
  mesOutils.lineWidth = 10;
  //on arrondit les extrémités des lignes
  mesOutils.lineCap = "round";
  // on initialise la couleur du trait
  mesOutils.strokeStyle = "#999";
  mesOutils.beginPath();
  mesOutils.moveTo(x, y);
  mesOutils.arc(x, y, rayon, 0, (angle * Math.PI) / 180, false);
  mesOutils.lineTo(x, y);
  mesOutils.stroke();
  mesOutils.closePath();

  mesOutils.strokeStyle = "lightgreen";
  // on "colle" un ball en tête de ligne
  mesOutils.beginPath();
  mesOutils.moveTo(x + Math.cos(angle * (Math.PI / 180)) * rayon, y);
  mesOutils.lineTo(x, y);
  mesOutils.stroke();
  mesOutils.closePath();

  mesOutils.strokeStyle = "lightgreen";
  // on "colle" un ball en tête de ligne
  mesOutils.beginPath();
  mesOutils.moveTo(
    x + Math.cos(angle * (Math.PI / 180)) * rayon,
    y + Math.sin(angle * (Math.PI / 180)) * rayon
  );
  mesOutils.lineTo(x + Math.cos(angle * (Math.PI / 180)) * rayon, y);
  mesOutils.stroke();
  mesOutils.closePath();

  mesOutils.strokeStyle = "lightblue";
  // on "colle" un ball en tête de ligne
  mesOutils.beginPath();
  mesOutils.moveTo(x, y);
  mesOutils.lineTo(x, y + Math.sin(angle * (Math.PI / 180)) * rayon);
  mesOutils.stroke();
  mesOutils.closePath();

  mesOutils.beginPath();
  mesOutils.moveTo(
    x + Math.cos(angle * (Math.PI / 180)) * rayon,
    y + Math.sin(angle * (Math.PI / 180)) * rayon
  );
  mesOutils.lineTo(x, y + Math.sin(angle * (Math.PI / 180)) * rayon);
  mesOutils.stroke();
  mesOutils.closePath();

  mesOutils.fillStyle = "orange";
  // on "colle" un ball en tête de ligne
  let xBall = x + Math.cos(angle * (Math.PI / 180)) * rayon;
  let yBall = y + Math.sin(angle * (Math.PI / 180)) * rayon;
  mesOutils.beginPath();
  mesOutils.arc(xBall, yBall, 20, 0, 2 * Math.PI, false);
  mesOutils.fill();
  mesOutils.closePath();

  mesOutils.fillStyle = "lightblue";
  // on "colle" un ball en tête de ligne
  let xBallsin = x + rayon + deplacementx;
  let yBallsin = y + Math.sin(angle * (Math.PI / 180)) * rayon;
  pointsSin.push({ x: xBallsin, y: yBallsin });
  mesOutils.beginPath();
  mesOutils.arc(xBallsin, yBallsin, 20, 0, 2 * Math.PI, false);
  mesOutils.fill();
  mesOutils.closePath();

  // on dessine les points
  mesOutils.fillStyle = "lightblue";
  for (let i = 0; i < pointsSin.length; i++) {
    mesOutils.beginPath();
    mesOutils.arc(pointsSin[i].x, pointsSin[i].y, 2, 0, 2 * Math.PI, false);
    mesOutils.fill();
    mesOutils.closePath();
  }

  // on connecte les 2 points avec une ligne
  mesOutils.strokeStyle = "lightblue";
  mesOutils.lineWidth = 1;
  mesOutils.beginPath();
  mesOutils.moveTo(xBallsin, yBallsin);
  mesOutils.lineTo(xBall, yBall);
  mesOutils.stroke();
  mesOutils.closePath();

  mesOutils.fillStyle = "lightgreen";
  // on "colle" un ball en tête de ligne
  let xBallcos = x + Math.cos(angle * (Math.PI / 180)) * rayon;
  let yBallcos = y + rayon + deplacementy;
  pointsCos.push({ x: xBallcos, y: yBallcos });
  mesOutils.beginPath();
  mesOutils.arc(xBallcos, yBallcos, 20, 0, 2 * Math.PI, false);
  mesOutils.fill();
  mesOutils.closePath();
  // on dessine les points
  mesOutils.fillStyle = "lightgreen";
  for (let i = 0; i < pointsCos.length; i++) {
    mesOutils.beginPath();
    mesOutils.arc(pointsCos[i].x, pointsCos[i].y, 2, 0, 2 * Math.PI, false);
    mesOutils.fill();
    mesOutils.closePath();
  }
  // on connecte les 2 points avec une ligne
  mesOutils.strokeStyle = "lightgreen";
  mesOutils.lineWidth = 1;
  mesOutils.beginPath();
  mesOutils.moveTo(xBallcos, yBallcos);
  mesOutils.lineTo(xBall, yBall);
  mesOutils.stroke();
  mesOutils.closePath();

  // on fait augmenter l'angle
  angle += 0.5;
  if (angle > 360) {
    angle = 0;
  }

  // on fait augmenter le déplacement
  deplacementx++;
  deplacementy++;

  if (xBallsin > monCanvas.width) {
    deplacementx = 0;
    pointsSin = [];
  }
  if (yBallcos > monCanvas.height) {
    deplacementy = 0;
    pointsCos = [];
  }
}

// attente que tous les éléments soient chargés
// utilisation d'une fonction anonyme en callback
// --> pas de nom de fonction car pas besoin de la réutiliser
window.onload = () => {
  start();
};
