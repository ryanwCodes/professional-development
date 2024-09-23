// Create a function to reverse a string
function reverseString(str) {
    // create array variable to store reversed characters
    var reversedCharactersArray = [];
    //loop over string in reverse
    for (var i = str.length - 1; i > -1; i--) {
        // push current character of string to array
        reversedCharactersArray.push(str[i]);
    }
    // convert array to string
    return reversedCharactersArray.join('');
}
console.log(reverse("Hello World")); // dlroW olleH
