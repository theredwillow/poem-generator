
/** An array containing the uppercase alphabet sans X. */
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWYZ".split('');

/**
 * An array containing characters that might be passed to the input,
 * but should be left alone when the rhyme scheme is created.
 */
const UNCHANGED = [" ", "X"];

/**
 * Takes a string and returns a valid rhyme scheme.
 * For example, the invalid "ABDE D" would be returned as "ABCD C".
 * @param {string} input 
 */
export const validateRhymeScheme = (input = "") => {
	input = input.toUpperCase().replace(/[^ A-Z]/g, '').split('');
	const toBeChanged = input.filter(
		(l, i, arr) => !UNCHANGED.includes(l) && arr.indexOf(l) === i
	);
	const getSchemeLetter = (l) =>
		(UNCHANGED.includes(l)) ? l :
		ALPHABET[toBeChanged.indexOf(l)] || "?";
	return input.map(getSchemeLetter).join('');
};
