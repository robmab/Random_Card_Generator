/* SELECTORES */
let icons = document.querySelectorAll("#icon");
let number = document.querySelector("#number");
let button = document.querySelector(".btn");

let inputWidth = document.querySelector("#inputWidth");
let inputHeight = document.querySelector("#inputHeight");

/* FUNCIÓN */
const cardContentPaloValor = () => {
  const paloPintaLista = ["♦", "♥", "♠", "♣"];
  const valorCartaLista = [2, 3, 4, 5, 6, 7, 8, 9, 10, "K", "Q", "A", "J"]

  let paloPinta = paloPintaLista[Math.floor(Math.random() * paloPintaLista.length)];
  let valorCarta = valorCartaLista[Math.floor(Math.random() * valorCartaLista.length)];

  number.innerHTML = valorCarta;

  icons.forEach(p => {
    if (paloPinta === "♦" || paloPinta === "♥") {
      p.style.color = "red"
    } else {
      p.style.color = "black"
    }
    p.innerHTML = paloPinta
  })

  clearTimeout(timer); //reset timer
  timer = window.setInterval(cardContentPaloValor, 10000);
}

/* EVENTOS */
window.onload = () => cardContentPaloValor(); //On-load

let timer = window.setInterval(cardContentPaloValor, 10000); //Timer

button.addEventListener("click", cardContentPaloValor) //Randomizer


//Change card size
inputWidth.addEventListener("change", (e) => {
  let value = e.target.value;
  let min = e.target.min;
  let max = e.target.max;
  console.log(e)

  if (value != "" && min <= value && max >= value) {
    e.target.placeholder = value;
    e.target.defaultValue = value
    document.querySelector(".card").style.width = value + "px";
  }
})

inputHeight.addEventListener("change", (e) => {
  let value = e.target.value;
  let min = e.target.min;
  let max = e.target.max;

  if (value != "" && min <= value && max >= value) {
    e.target.placeholder = value;
    e.target.setAttribute("value", value)
    document.querySelector(".card").style.height = value + "px"
  }
})



