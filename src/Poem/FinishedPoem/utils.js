/*
  TODO
    -Create X scheme functionality
    -Create way for users to add lines to generator
    EPIC
      -Create a syllable-count dimension
*/

function sortByFrequency(array) {
  let frequency = {};
  array.forEach((value) => { frequency[value] = 0; });
  let uniques = array.filter((value) => (++frequency[value] === 1));
  return uniques.sort((a, b) => (frequency[b] - frequency[a]));
}

const howManyBefore = (str, index) => {
  const letter = str[index];
  const re = new RegExp(letter, "g");
  const before = str.slice(0, index);
  // console.log(`${letter} appears at index ${index}... what appears before it is ${before}`);
  return ( before.match(re) || '' ).length;
};

/**
 * Creates a Nonsense poem out of example lines.
 * @constructor
 * @param {string[]} scheme
 * @param {string[]} availableLines
*/
export const createPoem = (scheme, availableLines) => {
  scheme = scheme.trim().toUpperCase();

  // FIXME Will change if new letter suddenly gets more frequency, don't want to change what's already produced
  const sortedLetters = sortByFrequency( scheme.split('').filter(l => l !== ' ') );
  let lineNumber = 1;
  return scheme.split(' ').map((stanzaLetters) =>
    stanzaLetters.split('').map((lineLetter) => {
      const schemeSet = availableLines[sortedLetters.indexOf(lineLetter)];
      // FIXME Replace line string return with actual error payload
      if (!schemeSet) {
        return "(Sorry... There are not enough rhyme sets for this scheme yet.)";
      }
      return schemeSet[howManyBefore(scheme, lineNumber++)] || "(Sorry... There aren't enough lines in this rhyme set yet.)";
    }
  ));
};

// TODO Validate that the last words could rhyme too
/**
 * Takes a poem and a rhyme scheme and makes sure that they could actually be the same. (Has same number of stanzas, and lines in each of the stanzas.)
 * @constructor
 * @param {string[][]} poem
 * @param {string} scheme
 */
export const verifyPoemScheme = (poem, scheme) =>
  scheme.split(" ").every((stanzaScheme, stanzaNumber) =>
    stanzaScheme.length === poem[stanzaNumber].length
  );
