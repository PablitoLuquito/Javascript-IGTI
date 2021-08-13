// 1. Declarar variáveis com let e const

let a = 1;
const b = 1;

a = 2;
//b = 2;

function teste() {
  for (var i = 0; i < 5; i++) {
    //fazer algo
  }
  for (let j = 0; j < 5; i++) {
    //fazer algo
    console.log(j);
  }
  console.log(i);
}
teste();
