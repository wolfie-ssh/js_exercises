const reverseString = function(word) {
  let len = word.length;
  let reverseWord = "";
  for (let i = len-1; i >= 0; i--) {
    reverseWord += word[i];
   }
   return reverseWord;
 };

// Do not edit below this line
module.exports = reverseString;
