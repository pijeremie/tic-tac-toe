const plateau = document.getElementById('plateau');
const grilles = [];

let joueur = 'X';
let gagnant = null;

function initialisationPlateau() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const grille = document.createElement('div');
      grille.className = 'cell';
      grille.dataset.row = i;
      grille.dataset.col = j;
      grille.addEventListener('click', clickGrille);
      plateau.appendChild(grille);
      grilles.push(grille);
    }
  }
}

function clickGrille(event) {
  const clickCase = event.target; 
  if (clickCase.textContent === '' && !gagnant) {
    clickCase.textContent = joueur;
    verificationGagnant();
    changementJoueur();
  }
}

function changementJoueur() {
  joueur = joueur === 'X' ? 'O' : 'X';
}

function verificationGagnant() {
  const verifications = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ]; 
  for (const verif of verifications) {
    const [a, b, c] = verif;
    const grilleA = grilles[a];
    const grilleB = grilles[b];
    const grilleC = grilles[c]; 
    if (grilleA.textContent !== '' && grilleA.textContent === grilleB.textContent && grilleA.textContent === grilleC.textContent) {
      gagnant = joueur;
      affichageGrilleGagnant(grilleA, grilleB, grilleC);
      alert(`Le joueur ${0} a gagné !`, gagnant);
      return;
    }
  } 
  if (grilles.every(grille => grille.textContent !== '')) {
    alert("Match nul !");
  }
}

function affichageGrilleGagnant(grilleA, grilleB, grilleC) {
  grilleA.style.backgroundColor = 'green';
  grilleB.style.backgroundColor = 'green';
  grilleC.style.backgroundColor = 'green';
}

initialisationPlateau();