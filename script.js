alert("SCRIPT NUEVO CARGADO");

document.addEventListener("DOMContentLoaded", () => {

  const heart = document.getElementById("heart");
  const intro = document.getElementById("intro");
  const scene = document.getElementById("scene");
  const tree = document.getElementById("tree");
  const text = document.getElementById("text");
  const counter = document.getElementById("counter");
  const music = document.getElementById("music");

  const startDate = new Date("2018-08-06T00:00:00");

  // OCULTAR TEXTO AL INICIO
  const paragraphs = text.querySelectorAll("p");
  paragraphs.forEach(p => {
    p.dataset.full = p.innerText;
    p.innerText = "";
  });

  heart.addEventListener("click", () => {

    // Música desde 0
    music.currentTime = 0;
    music.play().catch(() => {});

    // Ocultar intro
    intro.style.opacity = "0";

    setTimeout(() => {
      intro.style.display = "none";
      scene.style.display = "flex";

      startBall();
    }, 800);
  });

  /* CORAZÓN → PELOTA */
  function startBall() {
    heart.classList.add("ball");

    setTimeout(() => {
      heart.classList.add("fall");
    }, 300);

    setTimeout(() => {
      showTree();
    }, 2000);
  }

  /* MOSTRAR ÁRBOL */
  function showTree() {
    tree.classList.add("show");

    setTimeout(() => {
      startCounter();
      typeText();
    }, 2000);
  }

  /* CONTADOR */
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
        `${days} días ${hours} horas<br>` +
        `${minutes} minutos ${seconds} segundos`;
    }, 1000);
  }

  /* TEXTO LETRA POR LETRA */
  function typeText() {
    let pIndex = 0;

    function typeParagraph() {
      if (pIndex >= paragraphs.length) return;

      const p = paragraphs[pIndex];
      const content = p.dataset.full;
      let i = 0;

      const interval = setInterval(() => {
        p.innerText += content[i];
        i++;
        if (i >= content.length) {
          clearInterval(interval);
          pIndex++;
          setTimeout(typeParagraph, 700);
        }
      }, 45);
    }

    typeParagraph();
  }

});

