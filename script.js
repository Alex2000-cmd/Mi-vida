document.addEventListener("DOMContentLoaded", () => {

  const heart = document.getElementById("heart");
  const intro = document.getElementById("intro");
  const scene = document.getElementById("scene");
  const tree = document.getElementById("tree");
  const text = document.getElementById("text");
  const counter = document.getElementById("counter");
  const music = document.getElementById("music");

  const startDate = new Date("2018-08-06T00:00:00");

  // Guardar texto
  const paragraphs = [...text.querySelectorAll("p")].map(p => p.innerHTML);
  text.innerHTML = "";

  heart.addEventListener("click", () => {

    // Música
    music.currentTime = 0;
    music.play().catch(() => {});

    // Convertir corazón en pelota
    heart.classList.add("falling");

    // Quitar texto intro
    intro.querySelector("p").style.display = "none";
    intro.querySelector("span").style.display = "none";

    // Mostrar escena después de la caída
    setTimeout(() => {
      intro.style.display = "none";
      scene.style.display = "flex";
      tree.classList.add("grow");
    }, 2200);

    // Contador
    setTimeout(startCounter, 3200);

    // Texto
    setTimeout(typeText, 4200);
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

      const temp = document.createElement("div");
      temp.innerHTML = paragraphs[i];
      const plain = temp.textContent;

      let c = 0;
      const interval = setInterval(() => {
        p.textContent = plain.slice(0, c++);
        if (c > plain.length) {
          clearInterval(interval);
          i++;
          setTimeout(next, 600);
        }
      }, 40);
    }

    next();
  }

});
