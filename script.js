// Año dinámico
document.getElementById("year").textContent = new Date().getFullYear();

// Mostrar más texto en "Sobre mí"
const btn = document.getElementById("toggleAbout");
const extra = document.querySelector(".about-extra");
btn.addEventListener("click", () => {
  extra.classList.toggle("hidden");
  btn.textContent = extra.classList.contains("hidden") ? "Leer más" : "Mostrar menos";
});
