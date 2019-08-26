
function reverseString(str) {
    let finalString = '';
    for (let i = str.length; i > 0; i -= 1) {
        finalString += str[i];
    }
    console.log(finalString);
    return finalString;
}