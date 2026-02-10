document.addEventListener("DOMContentLoaded", () => {

  const heart = document.getElementById("heart");
  const intro = document.getElementById("intro");
  const scene = document.getElementById("scene");
  const tree = document.getElementById("tree");
  const text = document.getElementById("text");
  const counter = document.getElementById("counter");
  const music = document.getElementById("music");

  const startDate = new Date("2018-08-06T00:00:00");

  /* ======================
     CLICK INICIAL
  ====================== */
  heart.addEventListener("click", () => {
    intro.classList.add("fade-out");

    // Música desde 0
    music.currentTime = 0;
    music.play().catch(() => {});

    setTimeout(() => {
      intro.style.display = "none";
      scene.style.display = "flex";
      startBallAnimation();
    }, 1200);
  });

  /* ======================
     CORAZÓN → PELOTA
  ====================== */
  function startBallAnimation() {
    heart.classList.add("ball");

    setTimeout(() => {
      heart.classList.add("drop");
    }, 300);

    setTimeout(() => {
      growTree();
    }, 2000);
  }

  /* ======================
     ÁRBOL CRECIENDO
  ====================== */
  function growTree() {
    tree.classList.add("grow");

    setTimeout(() => {
      startCounter();
      typeText();
    }, 3000);
  }

  /* ======================
     CONTADOR
  ====================== */
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

  /* ======================
     TEXTO LETRA POR LETRA
  ====================== */
  function typeText() {
    const paragraphs = text.querySelectorAll("p");
    let pIndex = 0;

    paragraphs.forEach(p => p.dataset.full = p.innerText);
    paragraphs.forEach(p => p.innerText = "");

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
          setTimeout(typeParagraph, 500);
        }
      }, 40);
    }

    typeParagraph();
  }

});
