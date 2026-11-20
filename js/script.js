const totalElement = document.querySelector("#total");
const somarButton = document.querySelector("#somar");
const zerarButton = document.querySelector("#zerar");

let total = 0;

totalElement.textContent = total;

somarButton.addEventListener("click", () => {
  total += 1;
  totalElement.textContent = total;
});

zerarButton.addEventListener("click", () => {
  total = 0;
  totalElement.textContent = total;
});
