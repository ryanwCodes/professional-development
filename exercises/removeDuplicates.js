// Create a function that takes a string and returns a
// new string with duplicates removed
function removeDuplicates(str) {
    // convert string to array of words
    const arrayOfWords = str.split(' ');
    // convert array into set
    const setOfWords = new Set(arrayOfWords);
    // convert set to array
    const arrayWithoutDups = [...setOfWords];
    // convert array back to string
    return arrayWithoutDups.join(' ');
}
const str = 'This is is a test test string';
console.log(removeDuplicates(str)); // 'This is a test string'
