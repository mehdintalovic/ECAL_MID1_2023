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
  mesOutils.lineWidth = 10;
  //on arrondit les extrémités des lignes
  mesOutils.lineCap = "round";
  //on applique une couleur de ligne
  mesOutils.strokeStyle = "#999";

  // rayon par défaut
  rayon = window.innerWidth / (screenDivider * 1.5);

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

function dessine() {
  // on dessine un arc de cercle
  // on commence à 0°
  // on dessine 70° (en radians)
  // on dessine dans le sens horaire
  // on dessine une ligne
  // on commence au centre de l'écran
  // on utilise un rayon de valeur "rayon"
  mesOutils.beginPath();
  mesOutils.arc(
    (0 * monCanvas.width) / screenDivider,
    monCanvas.height / 2,
    rayon,
    0,
    (70 * Math.PI) / 180,
    false
  );
  mesOutils.stroke();

  mesOutils.closePath();

  // on dessine un arc de cercle
  // on commence à 0°
  // on dessine 70° (en radians)
  // on dessine dans le sens anti-horaire
  // on dessine une ligne
  // on commence au centre de l'écran
  // on utilise un rayon de 200px
  mesOutils.beginPath();
  mesOutils.arc(
    (1 * monCanvas.width) / screenDivider,
    monCanvas.height / 2,
    rayon,
    0,
    (70 * Math.PI) / 180,
    true
  );
  mesOutils.stroke();
  mesOutils.closePath();

  // on dessine un arc de cercle
  // on commence à 0°
  // on dessine 70° (en radians)
  // on dessine dans le sens horaire
  // on dessine une ligne
  // on commence au centre de l'écran
  // on utilise un rayon de 200px
  // on colorie l'intérieur de l'arc en orange
  mesOutils.fillStyle = "orange";
  mesOutils.beginPath();
  mesOutils.arc(
    (2 * monCanvas.width) / screenDivider,
    monCanvas.height / 2,
    rayon,
    0,
    (70 * Math.PI) / 180,
    false
  );

  mesOutils.fill();
  mesOutils.stroke();
  mesOutils.closePath();

  // on dessine un arc de cercle
  // on commence à 0°
  // on dessine 70° (en radians)
  // on dessine dans le sens anti-horaire
  // on dessine une ligne
  // on commence au centre de l'écran
  // on utilise un rayon de 200px
  // on colorie l'intérieur de l'arc en lightblue
  mesOutils.fillStyle = "lightblue";
  mesOutils.beginPath();
  mesOutils.arc(
    (3 * monCanvas.width) / screenDivider,
    monCanvas.height / 2,
    rayon,
    0,
    (70 * Math.PI) / 180,
    true
  );
  mesOutils.fill();
  mesOutils.stroke();
  mesOutils.closePath();

  // on dessine un arc de cercle
  // on commence à 0°
  // on dessine 70° (en radians)
  // on dessine dans le sens anti-horaire
  // on dessine une ligne
  // on commence au centre de l'écran
  // on utilise un rayon de 200px
  // on colorie l'intérieur de l'arc en lightblue
  mesOutils.fillStyle = "orange";
  mesOutils.beginPath();
  mesOutils.moveTo((4 * monCanvas.width) / screenDivider, monCanvas.height / 2);
  mesOutils.arc(
    (4 * monCanvas.width) / screenDivider,
    monCanvas.height / 2,
    rayon,
    0,
    (70 * Math.PI) / 180,
    false
  );
  mesOutils.lineTo((4 * monCanvas.width) / screenDivider, monCanvas.height / 2);
  mesOutils.fill();
  mesOutils.stroke();
  mesOutils.closePath();

  // on dessine un arc de cercle
  // on commence à 0°
  // on dessine 70° (en radians)
  // on dessine dans le sens anti-horaire
  // on dessine une ligne
  // on commence au centre de l'écran
  // on utilise un rayon de 200px
  // on colorie l'intérieur de l'arc en lightblue
  mesOutils.fillStyle = "lightblue";
  mesOutils.beginPath();
  mesOutils.moveTo((5 * monCanvas.width) / screenDivider, monCanvas.height / 2);
  mesOutils.arc(
    (5 * monCanvas.width) / screenDivider,
    monCanvas.height / 2,
    rayon,
    0,
    (70 * Math.PI) / 180,
    true
  );
  mesOutils.lineTo((5 * monCanvas.width) / screenDivider, monCanvas.height / 2);
  mesOutils.fill();
  mesOutils.stroke();
  mesOutils.closePath();

  // on dessine un arc de cercle
  // on commence à 0°
  // on dessine 70° (en radians)
  // on dessine dans le sens anti-horaire
  // on dessine une ligne
  // on commence au centre de l'écran
  // on utilise un rayon de 200px
  // on colorie l'intérieur de l'arc en lightblue
  mesOutils.fillStyle = "orange";
  mesOutils.beginPath();
  mesOutils.moveTo((6 * monCanvas.width) / screenDivider, monCanvas.height / 2);
  mesOutils.arc(
    (6 * monCanvas.width) / screenDivider,
    monCanvas.height / 2,
    rayon,
    0,
    (angle * Math.PI) / 180,
    false
  );
  mesOutils.lineTo((6 * monCanvas.width) / screenDivider, monCanvas.height / 2);
  mesOutils.fill();
  mesOutils.stroke();
  mesOutils.closePath();

  // on dessine un arc de cercle
  // on commence à 0°
  // on dessine 70° (en radians)
  // on dessine dans le sens anti-horaire
  // on dessine une ligne
  // on commence au centre de l'écran
  // on utilise un rayon de 200px
  // on colorie l'intérieur de l'arc en lightblue
  mesOutils.fillStyle = "lightblue";
  mesOutils.beginPath();
  mesOutils.moveTo((7 * monCanvas.width) / screenDivider, monCanvas.height / 2);
  mesOutils.arc(
    (7 * monCanvas.width) / screenDivider,
    monCanvas.height / 2,
    rayon,
    0,
    (angle * Math.PI) / 180,
    true
  );
  mesOutils.lineTo((7 * monCanvas.width) / screenDivider, monCanvas.height / 2);
  mesOutils.fill();
  mesOutils.stroke();
  mesOutils.closePath();

  // on fait augmenter l'angle
  angle++;
  if (angle >= 360) {
    angle = 0;
  }
}

// attente que tous les éléments soient chargés
// utilisation d'une fonction anonyme en callback
// --> pas de nom de fonction car pas besoin de la réutiliser
window.onload = () => {
  start();
};
