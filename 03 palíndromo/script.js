pali("aba");
pali("radar");
pali("xyzzyx");
pali("bola");
pali("abcddcb");
pali("");
pali("x");

function pali(s) {
  for (var i = 0, j = s.length - 1; i < j; i++, j--) {
    if (s.charAt(i) != s.charAt(j)) {
      console.log(s + " não é um palíndromo");
      return;
    }
  }
  console.log(s + " é um palíndromo");
}
