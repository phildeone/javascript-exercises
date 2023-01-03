// A function to repeat a given word string. 
const repeatString = function(wordString, repeat) {
    if (repeat < 0) return 'ERROR';
    let string = '';
    for (let i = 0; i < repeat; i++) {
      string += wordString;
    }
    return string;
  };
// Do not edit below this line
module.exports = repeatString;
