const shiftChar = function(code, base, shifts) {
  return String.fromCharCode(((code - base + shifts) % 26) + base);
}
const caesar = function(text, shifts) {
  if (shifts < 0 ) shifts = 26 + (shifts % 26);
  
  return text.split('').map((c) => {
    if (c.match(/[A-Z]/)) {
      return shiftChar(c.charCodeAt(), 65, shifts);
    } else if (c.match(/[a-z]/)) {
      return shiftChar(c.charCodeAt(), 97, shifts);
    } else {
      return c;
    }
  }).join('');
};

// Do not edit below this line
module.exports = caesar;
