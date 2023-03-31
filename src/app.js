/* SELECTORES */
let icons = document.querySelectorAll("#icon");
let number = document.querySelector("#number");

/* FUNCIÓN */
const cardContentPaloValor = () => {
  const paloPintaLista = ["♦", "♥", "♠", "♣"];
  const valorCartaLista = [2, 3, 4, 5, 6, 7, 8, 9, 10, "K", "Q", "A", "J"]

  let paloPinta = paloPintaLista[Math.floor(Math.random() * paloPintaLista.length)];
  let valorCarta = valorCartaLista[Math.floor(Math.random() * valorCartaLista.length)];

  number.innerHTML = valorCarta;

  if (paloPinta === "♦" || paloPinta === "♥") {
    icons.forEach(p => {
      p.style.color = "red"
      p.innerHTML = paloPinta
    });
  } else {
    icons.forEach(p => {
      p.innerHTML = paloPinta
    })
  }
}

/* EVENTOS */
window.onload = () => cardContentPaloValor();

console.log(document.querySelector("#number"))