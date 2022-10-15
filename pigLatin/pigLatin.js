function pigLatin(text) {
  return text.replace(/([aeiouy][a-z]+)|(([qwrtpsdfghjklzxcvbnm]+u?)([a-z]+))/gi, '$1$4$3ay')
};
  
// Do not edit below this line
module.exports = pigLatin;
