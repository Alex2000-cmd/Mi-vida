// 💖 FECHA DE INICIO DEL AMOR
// 6 de agosto de 2018
const startDate = new Date(2018, 7, 6, 0, 0, 0);

// ⏱️ Contador
function updateTime() {
  const now = new Date();
  let diff = Math.floor((now - startDate) / 1000);

  const days = Math.floor(diff / 86400);
  diff %= 86400;

  const hours = Math.floor(diff / 3600);
  diff %= 3600;

  const minutes = Math.floor(diff / 60);
  const seconds = diff % 60;

  document.getElementById("time").innerText =
    `${days} días ${hours} horas ${minutes} minutos ${seconds} segundos`;
}

setInterval(updateTime, 1000);
updateTime();

// 🎵 Música YouTube (empieza en segundo 30)
let player;
document.getElementById("musicBtn").addEventListener("click", () => {
  if (!player) {
    player = document.getElementById("player");
    player.innerHTML = `
      <iframe width="0" height="0"
      src="https://www.youtube.com/embed/SqDjQPoJxiw?start=30&autoplay=1"
      allow="autoplay"></iframe>`;
  }
});

// ❤️ Corazones al tocar
document.addEventListener("click", (e) => {
  const heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.style.left = e.pageX + "px";
  heart.style.top = e.pageY + "px";
  heart.style.fontSize = "24px";

  document.getElementById("hearts").appendChild(heart);

  setTimeout(() => heart.remove(), 2500);
});