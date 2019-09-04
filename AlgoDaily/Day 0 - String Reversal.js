// Problem description at: https://algodaily.com/challenges/reverse-a-string

function reverseString(str) {
    let finalString = '';
    for (let i = str.length; i > 0; i -= 1) {
        finalString += str[i];
    }
    console.log(finalString);
    return finalString;
}

// Test cases:

console.log(reverseString('njnschnjkdasn j32 uida')); // adiu 23j nsadkjnhcsnjn
console.log(reverseString('timbuktu12')); // 21utkubmit
console.log(reverseString('')); // ''
console.log(reverseString('reverseastring')); // gnirtsaesrever