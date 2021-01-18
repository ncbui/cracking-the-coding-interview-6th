/** Given two strings, check if they're one edit away from each other
 * An edit adds, removes, or replaces a letter
 * 
 * @param {*} str1
 * @param {*} str2
 * Return boolean
 */



 // can i check each seperately?
 /** 
  * is the difference between string lengths > 1? return false
  *   difference = 1, count with 1 character having odd count
  *   difference = 0, count with 2 characters having odd count
  */


 // can i do it all in a single pass?

  // pale, ple => true
 // pales, pale => true
 // pale, bale => true
 // pale, bake -> false 

 const oneAwayCount = (str1, str2) => {
   let lengthDiff = Math.abs(str1.length - str2.length);

   if (lengthDiff > 1) return false; 

    let count = {};

    for (c of str1) {
      count[c] = (count[c] || 0 ) + 1;
    }
   for (c of str2) {
     count[c] = (count[c] || 0) + 1;
   }

   let odds = Object.values(count).filter(c => c % 2 > 0).length
   if (lengthDiff === 0 && odds !== 2) return false;
   if (lengthDiff === 1 && odds !== 1) return false;
   return true
 }

// console.log(oneAwayCount('pale', 'ple'));   // true
// console.log(oneAwayCount('pales', 'pale'));  // true
// console.log(oneAwayCount('pale', 'bale'));   // true
// console.log(oneAwayCount('pale', 'bake'));   // false
// console.log(oneAwayCount('pale', 'bakes'));   // false
// console.log(oneAwayCount('', 'a'));   // true
// console.log(oneAwayCount('', 'av'));   // false



const oneAwayPointer = (str1, str2) => {
  let lengthDiff = Math.abs(str1.length - str2.length);

  if (lengthDiff > 1) return false; 

  let short = str1.length > str2.length ? str2 : str1 ;
  let long = str1.length > str2.length ? str1 :  str2;
  let shortIdx = 0;
  let longIdx = 0;
  let foundDiff = false;

  while (shortIdx < short.length && longIdx < long.length){
    // console.log(shortIdx, short[shortIdx], longIdx, long[longIdx])
    if (short[shortIdx] != long[longIdx]){
      if (foundDiff) return false;
      foundDiff = true;

      if (lengthDiff === 0) shortIdx++;
    } else {
      shortIdx++;
    }
    longIdx++
  }

  return true;

}

console.log(oneAwayPointer('pale', 'ple'));   // true
console.log(oneAwayPointer('pales', 'pale'));  // true
console.log(oneAwayPointer('pale', 'bale'));   // true
console.log(oneAwayPointer('pale', 'bake'));   // false
console.log(oneAwayPointer('pale', 'bakes'));   // false
console.log(oneAwayPointer('', 'a'));   // true
console.log(oneAwayPointer('', 'av'));   // false
