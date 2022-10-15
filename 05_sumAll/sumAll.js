const sumAll = function(start, end) {
  if (start < 0 || end < 0 || typeof start !== 'number'|| typeof end !== 'number') {
    return 'ERROR';
  }

  if (end < start) {
    let aux = end;
    end = start;
    start = aux;
  }

  return Array.from({length: 1 + end - start}, (v, k) => k + start)
    .reduce((sum, a) => sum + a);
};

// Do not edit below this line
module.exports = sumAll;
