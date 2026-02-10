const intro = document.getElementById("intro");
const heart = document.getElementById("heart");
const scene = document.getElementById("scene");
const tree = document.getElementById("tree");
const text = document.getElementById("text");
const counter = document.getElementById("counter");
const music = document.getElementById("music");

let started = false;

/* ======================
   INICIAR EXPERIENCIA
====================== */
function startExperience() {
  if (started) return;
  started = true;

  intro.classList.add("hidden");
  scene.classList.remove("hidden");

  // Música desde el segundo 30
  music.currentTime = 30;
  music.play().catch(() => {});

  growTree();
  startCounter();
  startFloatingHearts();
}

// Click en corazón o primer toque
heart.addEventListener("click", startExperience);
document.body.addEventListener("click", startExperience, { once: true });

/* ======================
   ÁRBOL DE CORAZONES
====================== */
function growTree() {
  tree.classList.add("grow");

  // Mostrar texto después
  setTimeout(() => {
    text.classList.add("show");
  }, 6000);
}

/* ======================
   CONTADOR DE AMOR
====================== */
function startCounter() {
  const startDate = new Date("2018-08-06T00:00:00");

  setInterval(() => {
    const now = new Date();
    let diff = now - startDate;

    const seconds = Math.floor(diff / 1000) % 60;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    counter.innerHTML = `
      ${days} días 
      ${hours} horas 
      ${minutes} minutos 
      ${seconds} segundos
    `;
  }, 1000);
}

/* ======================
   CORAZONES FLOTANDO
====================== */
function startFloatingHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("floating-heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 3 + Math.random() * 3 + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6000);
  }, 400);
}
