const caesar = function(string, shift) {
  //   return string
  //     .split("")
  //     .map(char => shiftChar(char, shift))
  //     .join("");
  // };
  
  // const codeSet = code => (code < 97 ? 65 : 97);
  
  // const mod = (n, m) => (n % m + m) % m;
  
  // const shiftChar = (char, shift) => {
  //   const code = char.charCodeAt();
  
  //   if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
  //     return String.fromCharCode(
  //       mod(code + shift - codeSet(code), 26) + codeSet(code)
  //     );
  //   }
  //   return char;

    if (shift < 0) {
      return caesar(string, shift + 26);
    }
  
    // Make an output variable
    let output = "";
  
    // Go through each character
    for (let i = 0; i < string.length; i++) {
      // Get the character we'll be appending
      let c = string[i];
  
      // If it's a letter...
      if (c.match(/[a-z]/i)) {
        // Get its code
        let code = string.charCodeAt(i);
  
        // Uppercase letters
        if (code >= 65 && code <= 90) {
          c = String.fromCharCode(((code - 65 + shift) % 26) + 65);
        }
  
        // Lowercase letters
        else if (code >= 97 && code <= 122) {
          c = String.fromCharCode(((code - 97 + shift) % 26) + 97);
        }
      }
  
      // Append
      output += c;
    }
  
    // All done!
    return output;
  };

// Do not edit below this line
module.exports = caesar;
