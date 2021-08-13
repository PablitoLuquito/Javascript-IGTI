function maior(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

function menor(a, b, c) {
  var r = a < b && a < c ? a : b < a && b < c ? b : c;
  return r;
}

function formataMes(mes) {
  switch (mes) {
    case 1:
      return "Janeiro";
      break;
    case 2:
      return "Fevereiro";
      break;
    case 3:
      return "Março";
      break;
    case 4:
      return "Abril";
      break;
    default:
      return "Não implementei ainda!";
  }
}
