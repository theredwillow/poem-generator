
/*
  TODO
    -Create X scheme functionality
    -Create way for users to add lines to generator
    EPIC
      -Create a syllable-count dimension
*/

// FIXME
Array.prototype.byCount = function(){
  var itm, a=[], L=this.length, o={};
  for(var i= 0; i<L; i++){
      itm= this[i];
      if(!itm) continue;
      if(o[itm]===undefined) o[itm]=1;
      else ++o[itm];
  }
  for(var p in o) a[a.length]= p;
  return a.sort(function(a, b){
      return o[b]-o[a];
  });
}

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
  const sortedLetters = scheme.byCount();
  const sortedRhymes = schemeExamples.sort((a,b) => (b.length - a.length));
  const poem = scheme.map( (l,i) => sortedRhymes[sortedLetters.indexOf(l)][howManyBefore(scheme,i)] );
  return scheme.map( (l, i) => ({
    letter: l,
    num: i + 1,
    stanza: stanzaLocations.indexOf(stanzaLocations.slice().reverse().find((s) => i >= s)) + 1,
    line: poem[i]
  }) );
};
