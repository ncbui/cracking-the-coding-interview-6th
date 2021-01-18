/** Given a string, check if it is a permutation of a palindrome
 * 
 * Returns boolean
 */
// "Tact Coa" => True; "taco cat", "atco cta"
// can ignore case T ~ t
// only letters, no white-space, numbers, or non-letter characters

// don't want to generate all palindromes
// efficient and limits the number of passes through str, aiming O(n) runtime

// req: palindromes contain either all doubles or one single + doubles
// count letters and track with object
  // if doesn't exist, add O(n)
  // if exists, subtract O(n)
// check object to see if req met

const palindromePermutation = (str) => {
  let count = {};

  for (c of str) {
    if (/\p{L}+/u.test(c)) {
      c = c.toLowerCase();
      if (count[c] === undefined) {
        count[c] = (count[c] || 0) + 1; // runtime: O(1)
      } else {
        if (count[c]) delete count[c]   // runtime: O(1)
      }
    }
  } // runtime O(n)

  return Object.keys(count).length > 1 ? false: true;
}

console.log(palindromePermutation("taCt coa")) // true
console.log(palindromePermutation("Tac coa"))  // false