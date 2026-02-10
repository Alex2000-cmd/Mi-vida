document.addEventListener("DOMContentLoaded", () => {

  const heart = document.getElementById("heart");
  const intro = document.getElementById("intro");
  const scene = document.getElementById("scene");
  const music = document.getElementById("music");
  const counter = document.getElementById("counter");

  // FECHA DE INICIO DEL AMOR 💖
  const startDate = new Date("2018-08-06T00:00:00");

  function updateCounter() {
    const now = new Date();
    let diff = Math.floor((now - startDate) / 1000);

    const days = Math.floor(diff / 86400);
    diff %= 86400;
    const hours = Math.floor(diff / 3600);
    diff %= 3600;
    const minutes = Math.floor(diff / 60);
    const seconds = diff % 60;

    counter.innerHTML = `
      ${days} días ${hours} horas<br>
      ${minutes} minutos ${seconds} segundos
    `;
  }

  // 🔥 EVENTO REAL DE USUARIO (OBLIGATORIO PARA AUDIO)
  heart.addEventListener("click", async () => {

    // Oculta intro
    intro.style.display = "none";
    scene.style.display = "flex";

    // Inicia contador
    updateCounter();
    setInterval(updateCounter, 1000);

    // Reproduce música
    try {
      music.currentTime = 30; // empieza en segundo 30
      await music.play();
      console.log("🎵 Música reproduciéndose");
    } catch (e) {
      alert("Toca nuevamente la pantalla para iniciar la música 💖");
      console.error("Error audio:", e);
    }
  });

});
