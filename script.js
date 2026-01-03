const boton = document.getElementById("startBtn");
const portada = document.getElementById("portada");
const texto = document.getElementById("texto");

boton.addEventListener("click", () => {
    portada.style.display = "none";
    texto.classList.remove("hidden");
});
