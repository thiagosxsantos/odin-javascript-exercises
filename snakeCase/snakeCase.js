const snakeCase = function(text) {
  return text.replace(/([A-Z][a-zA-Z0-9]*)/g, ' $1')
    .toLowerCase()
    .replace(/(^[^a-z0-9]+|[^a-z0-9]+$)/g, '')
    .replace(/[^a-z0-9]+/g, '_')
};

// Do not edit below this line
module.exports = snakeCase;
