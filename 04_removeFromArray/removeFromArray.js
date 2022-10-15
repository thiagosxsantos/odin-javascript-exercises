const removeFromArray = function(array) {
  const toRemove = Array.prototype.slice.call(arguments, 1);
  return array.filter((element) => !toRemove.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
