let btn = document.getElementById("convert");
let inputDay = document.getElementById("day");
let outputSec = document.getElementById("sec");

btn.addEventListener("click", () => outputSec.value = +(inputDay.value) * 86400
)