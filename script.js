const intro = document.getElementById("intro");
const heart = document.getElementById("heart");
const scene = document.getElementById("scene");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const content = document.getElementById("content");
const counter = document.getElementById("counter");
const music = document.getElementById("music");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ball = { x: canvas.width / 2, y: 100, r: 10, vy: 0 };
let stage = 0;
let hearts = [];

heart.addEventListener("click", () => {
  intro.classList.add("hidden");
  scene.classList.remove("hidden");
  music.currentTime = 30;
  music.play();
  animate();
});

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (stage === 0) {
    ball.vy += 0.5;
    ball.y += ball.vy;
    if (ball.y > canvas.height - 100) {
      ball.vy *= -0.5;
      stage = 1;
    }
    drawBall();
  }

  if (stage === 1) {
    drawTree();
    setTimeout(() => stage = 2, 4000);
  }

  if (stage === 2) {
    content.classList.remove("hidden");
    updateCounter();
    spawnHearts();
    drawHearts();
  }

  requestAnimationFrame(animate);
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
  ctx.fillStyle = "red";
  ctx.fill();
}

function drawTree() {
  ctx.fillStyle = "#8b5a2b";
  ctx.fillRect(canvas.width / 2 - 10, canvas.height - 200, 20, 150);

  for (let i = 0; i < 100; i++) {
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(
      canvas.width / 2 + Math.random() * 200 - 100,
      canvas.height - 250 + Math.random() * 150 - 75,
      4,
      0,
      Math.PI * 2
    );
    ctx.fill();
  }
}

function updateCounter() {
  const start = new Date("2018-08-06T00:00:00");
  const now = new Date();
  const diff = now - start;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  counter.innerText = `Mi amor por ti comenzó hace ${days} días ❤️`;
}

function spawnHearts() {
  if (Math.random() < 0.05) {
    hearts.push({
      x: Math.random() * canvas.width,
      y: -10,
      vy: 2
    });
  }
}

function drawHearts() {
  hearts.forEach(h => {
    h.y += h.vy;
    ctx.fillStyle = "rgba(255,0,0,0.6)";
    ctx.beginPath();
    ctx.arc(h.x, h.y, 6, 0, Math.PI * 2);
    ctx.fill();
  });
}
