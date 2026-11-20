const titulo = document.querySelector("#titulo");
titulo.textContent = "Contador de Cliques";

const totalElement = document.querySelector("#total");
totalElement.textContent = "0";

const somarButton = document.querySelector("#somar");
const zerarButton = document.querySelector("#zerar");

let total = 0;

somarButton.addEventListener("click", () => {
  total += 1;
  totalElement.textContent = total.toString();
});

zerarButton.addEventListener("click", () => {
  total = 0;
  totalElement.textContent = total.toString();
});
