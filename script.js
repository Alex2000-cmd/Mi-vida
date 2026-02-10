document.addEventListener("DOMContentLoaded", () => {

  const heart = document.getElementById("heart");
  const intro = document.getElementById("intro");
  const scene = document.getElementById("scene");
  const tree = document.getElementById("tree");
  const text = document.getElementById("text");
  const counter = document.getElementById("counter");
  const music = document.getElementById("music");
  const ballContainer = document.getElementById("ball-container");

  const startDate = new Date("2018-08-06T00:00:00");

  // Guardar texto original como HTML (IMPORTANTE)
  const paragraphs = [...text.querySelectorAll("p")].map(p => p.innerHTML);
  text.innerHTML = "";

  heart.addEventListener("click", () => {

    // Música
    music.currentTime = 0;
    music.play().catch(() => {});

    // Crear pelota (clon del corazón)
    const ball = document.createElement("div");
    ball.innerHTML = "❤️";
    ball.className = "ball";
    ballContainer.appendChild(ball);

    // Ocultar intro
    intro.style.opacity = "0";
    setTimeout(() => intro.style.display = "none", 600);

    // Animar caída
    setTimeout(() => {
      ball.classList.add("fall");
    }, 200);

    // Mostrar escena después
    setTimeout(() => {
      scene.style.display = "flex";
      tree.classList.add("show");
      startCounter();
      typeText();
    }, 2200);
  });

  function startCounter() {
    setInterval(() => {
      const now = new Date();
      let diff = Math.floor((now - startDate) / 1000);

      const days = Math.floor(diff / 86400);
      diff %= 86400;
      const hours = Math.floor(diff / 3600);
      diff %= 3600;
      const minutes = Math.floor(diff / 60);
      const seconds = diff % 60;

      counter.innerHTML =
        `${days} días ${hours} horas<br>${minutes} minutos ${seconds} segundos`;
    }, 1000);
  }

  function typeText() {
    let i = 0;

    function next() {
      if (i >= paragraphs.length) return;
      const p = document.createElement("p");
      text.appendChild(p);

      let char = 0;
      const content = paragraphs[i];

      const interval = setInterval(() => {
        p.innerHTML = content.slice(0, char++);
        if (char > content.length) {
          clearInterval(interval);
          i++;
          setTimeout(next, 500);
        }
      }, 35);
    }

    next();
  }

});
