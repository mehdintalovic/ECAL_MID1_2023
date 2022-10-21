// constante globale
const pixelRatio = window.devicePixelRatio;
// variable globale
let monCanvas;
// context de dessin
let ctx;

function setup() {
  // constante locale
  monCanvas = document.getElementById("ecal");
  monCanvas.width = (window.innerWidth - 60 * pixelRatio) * pixelRatio;
  monCanvas.height = (window.innerHeight - 60 * pixelRatio) * pixelRatio;
  monCanvas.style.width = window.innerWidth - 60 * pixelRatio;
  monCanvas.style.height = window.innerHeight - 60 * pixelRatio;
  ctx = monCanvas.getContext("2d");

  // on ajoute un écouteur d'événement "click"
  //  sur le document
  document.addEventListener("click", function (event) {
    console.log(event);
  });

  // lancement de la fonction de dessin
  draw();
}

// creation d'un fonction d'animation
// cette fonction sera appelée à chaque frame
function draw() {
  // on efface le canvas
  ctx.clearRect(0, 0, monCanvas.width, monCanvas.height);

  // on dessine
  dessine();

  // on demande à rappeler la fonction animate
  // à la prochaine frame
  requestAnimationFrame(animate);
}

function dessine() {
  // dessine un cercle au centre du canvas
  // outline en vert
  // remplissage en vert clair
  ctx.strokeStyle = "green";
  ctx.fillStyle = "lightgreen";
  ctx.beginPath();
  ctx.arc(
    monCanvas.width / 2,
    monCanvas.height / 2,
    100 * pixelRatio,
    0,
    2 * Math.PI
  );
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
}

// attente que tous les éléments soient chargés
// utilisation d'une fonction anonyme en callback
// --> pas de nom de fonction car pas besoin de la réutiliser
window.onload = () => {
  setup();
};
