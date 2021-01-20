/** Given an M x N matrix, 
 * if an element is 0, set its entire row and column to 0
 * 
 * Returns the matrix with zeroes out columns and rows
 * TODO: see solution for reducing space complexity
 * */

 const zeroMatrix = (matrix) => {

    // find the zeroes, save it's row and column
    // if no zero, return matrix
    // then go in and change all element at x-col and row-y

    let zeroRows = []
    let zeroCols = []

   for (let r = 0; r < matrix.length ; r++){
      for (let c = 0; c < matrix[r].length; c ++) {
        if (matrix[r][c] === 0) {
          zeroRows.push(r);
          zeroCols.push(c);
        }
      }
    }

   if (zeroRows.length === 0) return matrix;


   zeroRows.forEach( r => {
     matrix[r] = matrix[r].map( ele => 0)}
     )

  
    zeroCols.forEach( c => {
      let r = 0;

      while (r < matrix.length){
        matrix[r][c] = 0;
        r++
      }
    })


    return matrix;
 }

 const small = [
   [1, 2, 4],
   [0, 3, 4],
   [1, 2, 5],
  ]

  const large = [
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 0, 6],
    [1, 2, 3, 4, 5, 6],
    [0, 2, 3, 4, 5, 6],
  ]

console.log(zeroMatrix(small)) 
// [[0, 2, 4], [0, 0, 0], [0, 2, 5]]
console.log(zeroMatrix(large)) 
/**[
    [0, 2, 3, 4, 0, 6],
    [0, 2, 3, 4, 0, 6],
    [0, 0, 0, 0, 0, 0],
    [0, 2, 3, 4, 0, 6],
    [0, 0, 0, 0, 0, 0],
  ]
 */