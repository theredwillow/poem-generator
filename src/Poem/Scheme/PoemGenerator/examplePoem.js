
/*
  TODO
    -Create X scheme functionality
    -Create way for users to add lines to generator
    EPIC
      -Create a syllable-count dimension
*/

export const schemeExamples = [
  [
    `This is a sample.`,
    `This is one example.`,
    `These sentences are ample.`
  ],
  [
    `This ain't a pill.`,
    `It's quite a thrill.`,
    `You need this, still.`,
    `Ask my friend, Jill.`
  ],
  [
    `You chose a scheme.`,
    `It isn't too extreme.`,
    `I like ice cream.`,
    `Is there a theme?`,
    `Airflow, or air stream?`,
    `Walking on a beam.`,
    `Thinking of a dream.`,
    `Interupting midstream`
  ],
  [
    `Choose your selection...`,
    `Check the cross section!`,
    `This is perfection!`,
    `Vote this election!`,
    `...go without detection!`,
    `The Clarinet Section.`,
    `Don't miss your connection!`,
    `...my misplaced affection.`,
    `Death by Vivisection.`,
    `...imperfection.`
  ]
];

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

export const createPoem = (scheme) => {
  scheme = scheme.trim().toUpperCase().split('');
  const stanzaLocations = scheme.reduce((arr,l,i) => ((l===" ") ? [...arr, i] : arr), [-1]);
  scheme = scheme.filter((l) => (l !== " "));
  // FIXME Will change if new letter suddenly gets more frequency, don't want to change what's already produced
  const sortedLetters = byCount(scheme);
  const sortedRhymes = schemeExamples.sort((a,b) => (b.length - a.length));
  const poem = scheme.map( (l,i) => sortedRhymes[sortedLetters.indexOf(l)][howManyBefore(scheme,i)] );
  return scheme.map( (l, i) => ({
    letter: l,
    num: i + 1,
    stanza: stanzaLocations.indexOf(stanzaLocations.slice().reverse().find((s) => i >= s)) + 1,
    line: poem[i]
  }) );
};
