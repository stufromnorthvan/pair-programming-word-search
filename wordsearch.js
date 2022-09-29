const transpose = function(matrix) {
  let newMatrix = [];
  for (let y = 0; y < matrix[0].length; y++) {
    let newArray = [];
    for (let x = 0; x < matrix.length; x++) {
      newArray.push(matrix[x][y]);
    }
    newMatrix.push(newArray);
  }
  return newMatrix;
};

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));

  for (l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  let transPosedLetters = transpose(letters);
  let verticalJoin = transPosedLetters.map(vs => vs.join(''));
  for (let v of verticalJoin)
    if (v.includes(word)) {
      return true;
    }
  return false;
};

wordSearch([
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'UUA');

module.exports = wordSearch;