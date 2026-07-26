// CONFIGURACIÓN DE TU FECHA DE ANIVERSARIO
// Fecha: 26 de Mayo de 2026 - 15:00 hs
// Nota: En JavaScript los meses van de 0 (Enero) a 11 (Diciembre), Mayo = 4.
const startDate = new Date(2026, 4, 26, 15, 0, 0);

function updateTimer() {
  const now = new Date();
  const diff = now - startDate;

  if (diff <= 0) {
    document.getElementById('days').innerText = "0";
    document.getElementById('hours').innerText = "0";
    document.getElementById('minutes').innerText = "0";
    document.getElementById('seconds').innerText = "0";
    return;
  }

  const msPerSecond = 1000;
  const msPerMinute = msPerSecond * 60;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;

  const days = Math.floor(diff / msPerDay);
  const hours = Math.floor((diff % msPerDay) / msPerHour);
  const minutes = Math.floor((diff % msPerHour) / msPerMinute);
  const seconds = Math.floor((diff % msPerMinute) / msPerSecond);

  document.getElementById('days').innerText = days;
  document.getElementById('hours').innerText = hours;
  document.getElementById('minutes').innerText = minutes;
  document.getElementById('seconds').innerText = seconds;
}

// Actualizar cada segundo
setInterval(updateTimer, 1000);
updateTimer();

// LÓGICA DE LA CARTA MODAL (Ventana Emergente)
const modal = document.getElementById('letter-modal');
const openBtn = document.getElementById('open-letter-btn');
const closeBtn = document.getElementById('close-modal-btn');

openBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Cerrar la carta haciendo click afuera de la ventana
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// GENERADOR DE CORAZONES FLOTANTES
function createHeart() {
  const container = document.getElementById('hearts-container');
  if (!container) return;

  const heart = document.createElement('div');
  heart.classList.add('heart-particle');
  heart.innerHTML = '❤️';
  
  // Posición horizontal aleatoria
  heart.style.left = Math.random() * 100 + 'vw';
  
  // Duración y opacidad aleatorias para variación visual
  const duration = Math.random() * 4 + 5; // entre 5s y 9s
  heart.style.animationDuration = duration + 's';
  heart.style.fontSize = (Math.random() * 0.8 + 0.8) + 'rem';

  container.appendChild(heart);

  // Limpieza del DOM
  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

setInterval(createHeart, 600);