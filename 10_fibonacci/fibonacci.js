const fibonacci = function(n) {
  if (typeof n === 'string') n = Number(n);
  if (n < 0) return 'OOPS';
  if (n === 1 || n === 2) return 1;
  let n1 = 1;
  let n2 = 1;
  let aux;
  for(let i = 3; i <= n; i++) {
    aux = n2;
    n2 = n1 + n2;
    n1 = aux;
  }

  return n2;
}

// Do not edit below this line
module.exports = fibonacci;
