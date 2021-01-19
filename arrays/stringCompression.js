/** Given a string with repeated characters, perform a basic compression by counting repeat characters
 * 
 * If compression is shorter than string, returns compression
 * Else, returns original string
*/

// Assume strings only contain upper and lower case letters, count upper and lower case letters seperately
// aabcccccaaa => a2b1c5a3
// abc => abc
// cccCCCaaa => c3C3a3

// currentLtr, count
// compressed = [], order is important
// iterate through index
// if the next letter is the same, count++
// if the next letter is different or is undefined, push currentLtr + count to compressed

const strCompression = (str) => {
  if (str.length < 3) return str; // compressed string will always be at least 2 chars long

  let currentLtr = str[0]
  let count = 1;
  let compressed = [];

  for (let i = 0; i < str.length; i++) {
    if (str[(i + 1)] === currentLtr) {
      count++
    } else {
      compressed.push(`${currentLtr}${count}`);
      currentLtr = str[(i + 1)];
      count = 1;
    }
  }
  
  compressed = compressed.join('');

  return compressed.length < str.length ? compressed : str;
}

console.log(strCompression('aabcccccaaa'))
console.log(strCompression('abc'))
console.log(strCompression('cccCCCaaa'))