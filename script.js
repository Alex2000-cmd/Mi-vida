document.addEventListener("DOMContentLoaded", () => {

  console.log("SCRIPT NUEVO CARGADO");

  const heart = document.getElementById("heart");
  const intro = document.getElementById("intro");
  const scene = document.getElementById("scene");
  const tree = document.getElementById("tree");
  const text = document.getElementById("text");
  const counter = document.getElementById("counter");
  const music = document.getElementById("music");
  const ballContainer = document.getElementById("ball-container");

  const startDate = new Date("2018-08-06T00:00:00");

  // Guardar textos originales
  const paragraphs = [...text.querySelectorAll("p")].map(p => p.innerHTML);
  text.innerHTML = "";

  heart.addEventListener("click", () => {

    // 🎵 Música desde 0
    music.currentTime = 0;
    music.play().catch(() => {});

    // ❤️ Crear pelota
    const ball = document.createElement("div");
    ball.innerHTML = "❤️";
    ball.className = "ball";
    ballContainer.appendChild(ball);

    // Ocultar intro
    intro.style.opacity = "0";
    setTimeout(() => {
      intro.style.display = "none";
    }, 600);

    // 🎾 Caída de la pelota
    setTimeout(() => {
      ball.classList.add("fall");
    }, 200);

    // 🌸 Mostrar escena
    setTimeout(() => {
      scene.style.display = "flex";
    }, 2200);

    // 🌳 Mostrar árbol
    setTimeout(() => {
      tree.classList.add("show");
    }, 3000);

    // ⏱️ Contador
    setTimeout(() => {
      startCounter();
    }, 3600);

    // 💌 Texto letra por letra
    setTimeout(() => {
      typeText();
    }, 4200);

  });

  // ⏱️ CONTADOR
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

  // ✍️ TEXTO PROGRESIVO (SIN PEGARSE)
  function typeText() {
    let i = 0;

    function nextParagraph() {
      if (i >= paragraphs.length) return;

      const p = document.createElement("p");
      text.appendChild(p);

      const temp = document.createElement("div");
      temp.innerHTML = paragraphs[i];
      const plainText = temp.textContent;

      let char = 0;

      const interval = setInterval(() => {
        p.textContent = plainText.slice(0, char++);
        if (char > plainText.length) {
          clearInterval(interval);
          i++;
          setTimeout(nextParagraph, 600);
        }
      }, 40);
    }

    nextParagraph();
  }

});
