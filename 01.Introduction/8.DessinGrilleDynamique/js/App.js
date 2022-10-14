// constante globale
const pixelRatio = window.devicePixelRatio;
// variable globale
let monCanvas;
let mesOutils;

let totalWidth = 0;
let tableauWidth = [];
let tableauWidthMemory = [];
let totalHeight = 0;
let tableauHeight = [];
let tableauHeightMemory = [];
let angle = 0;

function start() {
  // constante locale
  monCanvas = document.getElementById("ecal");
  monCanvas.width = (window.innerWidth - 60 * pixelRatio) * pixelRatio;
  monCanvas.height = (window.innerHeight - 60 * pixelRatio) * pixelRatio;
  monCanvas.style.width = window.innerWidth - 60 * pixelRatio;
  monCanvas.style.height = window.innerHeight - 60 * pixelRatio;
  mesOutils = monCanvas.getContext("2d");

  // creer un tableau de 10 valeurs aléatoires dont le total est exactement la largeur du canvas

  for (let i = 0; i < 10; i++) {
    let valeurRandom = Math.max(Math.random(), 0.4);
    tableauWidthMemory.push(valeurRandom);
    totalWidth += valeurRandom;
  }

  // // normaliser le tableau pour que la somme des valeurs soit égale à la largeur du canvas
  // for (let i = 0; i < 10; i++) {
  //   tableauWidth[i] = (tableauWidthMemory[i] / totalWidth) * monCanvas.width;
  // }

  for (let i = 0; i < 10; i++) {
    let valeurRandom = Math.max(Math.random(), 0.4);
    tableauHeightMemory.push(valeurRandom);
    totalHeight += valeurRandom;
  }

  // // normaliser le tableau pour que la somme des valeurs soit égale à la largeur du canvas
  // for (let i = 0; i < 10; i++) {
  //   tableauHeight[i] =
  //     (tableauHeightMemory[i] / totalHeight) * monCanvas.height;
  // }

  // lancement de la fonction de dessin
  animation();
}

function updateDimensionsRegularly() {
  const val = Math.cos(angle * (Math.PI / 180)) * 0.35;
  const valY = Math.sin(angle * (Math.PI / 180)) * 0.35;

  totalWidth = 0;
  const memX = [];
  for (let i = 0; i < 10; i++) {
    memX[i] = tableauWidthMemory[i] + val;
    totalWidth += memX[i];
  }

  // normaliser le tableau pour que la somme des valeurs soit égale à la largeur du canvas
  for (let i = 0; i < 10; i++) {
    tableauWidth[i] = (memX[i] / totalWidth) * monCanvas.width;
  }

  totalHeight = 0;
  const memY = [];
  for (let i = 0; i < 10; i++) {
    memY[i] = tableauHeightMemory[i] + valY;
    totalHeight += memY[i];
  }

  // normaliser le tableau pour que la somme des valeurs soit égale à la largeur du canvas
  for (let i = 0; i < 10; i++) {
    tableauHeight[i] = (memY[i] / totalHeight) * monCanvas.height;
  }
  angle += 1;
}

function animation() {
  updateDimensionsRegularly();
  dessine();
  requestAnimationFrame(animation);
}

function dessine() {
  mesOutils.clearRect(0, 0, monCanvas.width, monCanvas.height);

  // dessin de la grille de 10x10 cases
  mesOutils.strokeStyle = "grey";
  let w = 0;
  let positiony = 0;
  for (let j = 0; j < 10; j++) {
    let positionx = 0;
    for (let i = 0; i < 10; i++) {
      // mesOutils.strokeRect(
      //   positionx,
      //   positiony,
      //   tableauWidth[i],
      //   tableauHeight[j]
      // );

      // draw rounded rectangle inside the square
      let radius = 20;
      if (tableauWidth[i] > tableauHeight[j]) {
        radius = tableauHeight[j] / 2;
      } else {
        radius = tableauWidth[i] / 2;
      }
      mesOutils.fillStyle = `hsl(${280 - 10 * w}, ${35 + w}%, ${50 - w * 3}%)`;
      mesOutils.beginPath();
      mesOutils.moveTo(positionx + radius, positiony);
      mesOutils.lineTo(positionx + tableauWidth[i] - radius, positiony);
      mesOutils.quadraticCurveTo(
        positionx + tableauWidth[i],
        positiony,
        positionx + tableauWidth[i],
        positiony + radius
      );
      mesOutils.lineTo(
        positionx + tableauWidth[i],
        positiony + tableauHeight[j] - radius
      );
      mesOutils.quadraticCurveTo(
        positionx + tableauWidth[i],
        positiony + tableauHeight[j],
        positionx + tableauWidth[i] - radius,
        positiony + tableauHeight[j]
      );
      mesOutils.lineTo(positionx + radius, positiony + tableauHeight[j]);
      mesOutils.quadraticCurveTo(
        positionx,
        positiony + tableauHeight[j],
        positionx,

        positiony + tableauHeight[j] - radius
      );
      mesOutils.lineTo(positionx, positiony + radius);
      mesOutils.quadraticCurveTo(
        positionx,
        positiony,
        positionx + radius,
        positiony
      );
      mesOutils.closePath();
      mesOutils.fill();

      positionx += tableauWidth[i];
    }
    positiony += tableauHeight[j];
    w++;
  }
}

// attente que tous les éléments soient chargés
// utilisation d'une fonction anonyme en callback
// --> pas de nom de fonction car pas besoin de la réutiliser
window.onload = () => {
  start();
};
