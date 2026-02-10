console.log("SCRIPT NUEVO CARGADO");

const heart = document.getElementById("heart");
const intro = document.getElementById("intro");
const scene = document.getElementById("scene");
const tree = document.getElementById("tree");
const music = document.getElementById("music");
const text = document.querySelectorAll("#text p");

heart.addEventListener("click", () => {
  intro.style.display = "none";
  scene.style.display = "flex";

  music.currentTime = 0;
  music.play();

  createBall();
});

function createBall() {
  const ball = document.createElement("div");
  ball.className = "ball";
  document.body.appendChild(ball);

  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;

  ball.style.left = x + "px";
  ball.style.top = y + "px";

  let step = 0;
  const interval = setInterval(() => {
    y -= 6;
    x += Math.sin(step / 10) * 4;
    step++;

    ball.style.left = x + "px";
    ball.style.top = y + "px";

    if (step > 80) {
      clearInterval(interval);
      ball.remove();
      drawTree();
    }
  }, 30);
}

function drawTree() {
  tree.classList.add("show");

  for (let i = 0; i < 150; i++) {
    const leaf = document.createElement("div");
    leaf.innerText = "❤️";
    leaf.style.position = "absolute";
    leaf.style.left = Math.random() * 100 + "%";
    leaf.style.bottom = Math.random() * 80 + "%";
    leaf.style.fontSize = "12px";
    tree.appendChild(leaf);
  }

  showText();
}

function showText() {
  text.forEach((p, i) => {
    setTimeout(() => {
      p.style.opacity = 1;
    }, i * 1200);
  });
}
