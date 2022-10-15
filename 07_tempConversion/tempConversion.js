const round = function(x) {
  return Math.round(x * 10) / 10;
}

const ftoc = function(x) {
  return round((x - 32) * 5/9);
};

const ctof = function(x) {
  return round(x * 9/5 + 32);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
