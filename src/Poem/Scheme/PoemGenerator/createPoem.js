/*
  TODO
    -Create X scheme functionality
    -Create way for users to add lines to generator
    EPIC
      -Create a syllable-count dimension
*/

const byCount = (arr) => {
  let [itm, a, o] = [undefined, [], {}];
  for (let i = 0; i < arr.length; i++) {
    itm = arr[i];
    if (!itm) {
      continue;
    }
    if (o[itm] === undefined) {
      o[itm] = 1;
    }
    else {
      ++o[itm];
    }
  }
  for (let p in o) {
    a[a.length] = p;
  }
  return a.sort((a, b) => o[b]-o[a]);
};

const howManyBefore = (arr,index) => {
  const letter = arr[index];
  const re = new RegExp(letter, "g");
  const before = arr.slice(0,index).join("");
  // console.log(`${letter} appears at index ${index}... what appears before it is ${before}`);
  return ( before.match(re) || [] ).length;
};

export const createPoem = (scheme, availableLines) => {
  scheme = scheme.trim().toUpperCase().split('');
  const stanzaLocations = scheme.reduce((arr,l,i) => ((l===" ") ? [...arr, i] : arr), [-1]);
  scheme = scheme.filter((l) => (l !== " "));
  // FIXME Will change if new letter suddenly gets more frequency, don't want to change what's already produced
  const sortedLetters = byCount(scheme);
  const sortedRhymes = availableLines.sort((a,b) => (b.length - a.length));
  const poem = scheme.map( (l,i) => {
    const schemeSet = sortedRhymes[sortedLetters.indexOf(l)];
    // FIXME Replace line string return with actual error payload
    if (!schemeSet) {
      return "(Sorry... There are not enough rhyme sets for this scheme yet.)";
    }
    return schemeSet[howManyBefore(scheme,i)] || "(Sorry... There aren't enough lines in this rhyme set yet.)";
  });
  return scheme.map( (l, i) => ({
    letter: l,
    num: i + 1,
    stanza: stanzaLocations.indexOf(stanzaLocations.slice().reverse().find((s) => i >= s)) + 1,
    line: poem[i]
  }) );
};
