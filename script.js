const heart = document.getElementById("heart");
const intro = document.getElementById("intro");
const scene = document.getElementById("scene");
const music = document.getElementById("music");
const textBox = document.getElementById("text");
const counter = document.getElementById("counter");

const message = `
Para el amor de mi vida:

Si pudiera elegir un lugar seguro,
sería a tu lado.

Cuanto más tiempo estoy contigo,
más te amo.

— I Love You 💖
`;

heart.addEventListener("click", () => {
  intro.style.display = "none";
  scene.style.display = "flex";
  music.currentTime = 0;
  music.play();
  startCounter();
  typeText();
});

function startCounter() {
  const start = new Date("2018-01-01");
  setInterval(() => {
    const now = new Date();
    let diff = now - start;
    const d = Math.floor(diff / 86400000);
    diff %= 86400000;
    const h = Math.floor(diff / 3600000);
    diff %= 3600000;
    const m = Math.floor(diff / 60000);
    const s = Math.floor(diff / 1000) % 60;
    counter.innerText = `${d} días ${h} horas ${m} minutos ${s} segundos`;
  }, 1000);
}

function typeText() {
  let i = 0;
  textBox.innerHTML = "";
  const t = setInterval(() => {
    textBox.innerHTML += message[i] === "\n" ? "<br>" : message[i];
    i++;
    if (i >= message.length) clearInterval(t);
  }, 40);
}
