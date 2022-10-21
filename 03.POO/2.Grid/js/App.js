// constante globale
const pixelRatio = window.devicePixelRatio;
// variable globale
let monCanvas;
let mesOutils;
let angle = 0;
let isRotating = false;
function start() {
  // constante locale
  monCanvas = document.getElementById("ecal");
  monCanvas.width = (window.innerWidth - 60 * pixelRatio) * pixelRatio;
  monCanvas.height = (window.innerHeight - 60 * pixelRatio) * pixelRatio;
  monCanvas.style.width = window.innerWidth - 60 * pixelRatio;
  monCanvas.style.height = window.innerHeight - 60 * pixelRatio;
  mesOutils = monCanvas.getContext("2d");

  //on ajuste la positionX au centre du canvas
  positionX = monCanvas.width / 2;

  // on ajoute un écouteur d'événement "click"
  //  sur le document
  document.addEventListener("click", function (event) {
    isRotating = !isRotating;
  });

  // lancement de la fonction de dessin
  animate();
}

// creation d'un fonction d'animation
// cette fonction sera appelée à chaque frame
function animate() {
  // on efface le canvas
  // mesOutils.clearRect(0, 0, monCanvas.width, monCanvas.height);
  mesOutils.fillStyle = "rgba(0,0,0,0.01)";
  mesOutils.fillRect(0, 0, monCanvas.width, monCanvas.height);

  const size = monCanvas.width / 5;
  const margin = 60;
  const x = ((window.innerWidth - 2 * margin) / 2) * pixelRatio;
  const y = ((window.innerHeight - 2 * margin) / 2) * pixelRatio;

  // // on dessine
  // dessine(x - size, y, size, false);
  // // on redessine
  // dessine(x, y, size, true);
  // // on redessine
  // dessine(x + size, y, size, isRotating);

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      dessine(
        x - size * 2 + size * i,
        y - size * 2 + size * j,
        size,
        isRotating
      );
    }
  }

  // on demande à rappeler la fonction animate
  // à la prochaine frame
  requestAnimationFrame(animate);
}

function dessine(x, y, size, rotation) {
  // on dessine un rectangle

  mesOutils.save();
  mesOutils.translate(x, y);
  if (rotation) {
    mesOutils.rotate((angle * Math.PI) / 180);
    angle += 0.01;
  }
  mesOutils.strokeStyle = "lightgrey";
  mesOutils.fillStyle = "white";
  mesOutils.beginPath();
  mesOutils.rect(0 - size / 2, 0 - size / 2, size, size);
  mesOutils.fill();
  mesOutils.stroke();
  mesOutils.closePath();
  //
  mesOutils.fillStyle = "black";
  mesOutils.beginPath();
  mesOutils.lineTo(0 - size / 2, 0 - size / 2);
  mesOutils.arc(0 - size / 2, 0 - size / 2, size / 2, 0, Math.PI / 2, false);
  mesOutils.fill();
  mesOutils.closePath();
  //
  mesOutils.beginPath();
  mesOutils.lineTo(size / 2, size / 2);
  mesOutils.arc(size / 2, size / 2, size / 2, Math.PI, -Math.PI / 2, false);
  mesOutils.fill();
  mesOutils.closePath();
  mesOutils.restore();
}

// attente que tous les éléments soient chargés
// utilisation d'une fonction anonyme en callback
// --> pas de nom de fonction car pas besoin de la réutiliser
window.onload = () => {
  start();
};
