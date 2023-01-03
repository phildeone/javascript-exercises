// const palindromes = function (string) {
//     let re = /[\w_]/g;
//     string = string.toLowerCase().replace(re, '');
//     let len = string.length;
//     for(let i = 0; i < len / 2; i++){
//         if (string[i] !== string[len - 1 - i]){
//             return false;
//         }
//     }
//     return true;
// };

// A function to determine palindromes in a string of words
const palindromes = function(stringOfWords) {
    const transformedString = stringOfWords.toLowerCase().replace(/[^a-z]/g, "");
    return (
      transformedString
        .split("")
        .reverse()
        .join("") == transformedString
    );
  };

// Do not edit below this line
module.exports = palindromes;
