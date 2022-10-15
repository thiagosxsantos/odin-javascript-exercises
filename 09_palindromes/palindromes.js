const palindromes = function (text) {
  const aux = text.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  return aux === aux.split('').reverse().join('')
};

// Do not edit below this line
module.exports = palindromes;
