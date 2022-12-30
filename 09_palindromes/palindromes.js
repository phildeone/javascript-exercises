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

const palindromes = function(string) {
    const processedString = string.toLowerCase().replace(/[^a-z]/g, "");
    return (
      processedString
        .split("")
        .reverse()
        .join("") == processedString
    );
  };

// Do not edit below this line
module.exports = palindromes;
