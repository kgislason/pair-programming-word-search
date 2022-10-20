/**
 *
 * Word Search
 * 
 * Pair programming: A word search solver, as a function that receives a 2D 
 * array of letters and a word. Check to find the word horizontally and 
 * vertically. Return true if the word is found, and return false if the word 
 * is not found
 *
 * Authors: @Gozi1, @chchchelsay, @kgislason
 */

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = verticalJoinner(letters).map(ls => ls.join(''));
  const backwardsHorizontalJoin = letters.map(ls => ls.reverse().join(''));

  if (searchString(horizontalJoin, word)) return true;
  if (searchString(backwardsHorizontalJoin, word)) return true;
  if (searchString(verticalJoin, word)) return true;

  return false;
};

// Searches through string
const searchString = (string, word) => {
  for (let l of string) {
    if (l.includes(word)) return true;
  }
};

// Helper: Flip the array so rows become columns
const verticalJoinner = (letters) => {
  const newArray = [];
  for (let outer in letters[0]) {
    const tempArray = [];
    for (let inner in letters) {
      tempArray.push(letters[inner][outer]);
    }
    newArray.push(tempArray);
  }
    
  return newArray;
};

module.exports = wordSearch;