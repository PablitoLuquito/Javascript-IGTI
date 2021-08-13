var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var r = document.getElementById("r");

function soma() {
  var res = n1.valueAsNumber + n2.valueAsNumber;
  r.textContent = isNaN(res) ? "" : res;
}

document.addEventListener("input", soma);
