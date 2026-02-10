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
  music.play();
  startCounter();
  typeText();
});

function startCounter() {
  const startDate = new Date("2018-01-01");

  setInterval(() => {
    const now = new Date();
    let diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff %= 1000 * 60 * 60 * 24;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff %= 1000 * 60 * 60;
    const minutes = Math.floor(diff / (1000 * 60));
    const seconds = Math.floor((diff / 1000) % 60);

    counter.innerText = `${days} días ${hours} horas ${minutes} minutos ${seconds} segundos`;
  }, 1000);
}

function typeText() {
  let i = 0;
  textBox.innerHTML = "";
  const interval = setInterval(() => {
    textBox.innerHTML += message[i] === "\n" ? "<br>" : message[i];
    i++;
    if (i >= message.length) clearInterval(interval);
  }, 40);
}
