// Create a function to reverse a string
function reverse(str: string): string {
    // create array variable to store reversed characters
    const reversedCharactersArray: string[] = [];

    //loop over string in reverse
    for(let i = str.length - 1; i > -1; i--) {
        // push current character of string to array
        reversedCharactersArray.push(str[i])
    }

    // convert array to string
    return reversedCharactersArray.join('');
}


console.log(reverse("Hello World")) // dlroW olleH