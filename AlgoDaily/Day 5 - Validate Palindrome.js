// Problem description at: https://algodaily.com/challenges/validate-palindrome

function isPalindrome(str) {
    let clearString = str.toLowerCase().replace(/[\W_]/g, '');

    return clearString === clearString.split('').reverse().join('');
}

// Test cases:

console.log(isPalindrome('A Santa Lived As a Devil At NASA')); // true
console.log(isPalindrome('gold')); // false
console.log(isPalindrome('a')); // true
console.log(isPalindrome('racecar')); // true