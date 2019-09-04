// Problem description at: https://algodaily.com/challenges/is-an-anagram

function isAnagram(str1, str2) {
    return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');
}

// Test cases:

console.log(isAnagram('Mary', 'Army')); // true
console.log(isAnagram('cinema', 'iceman')); // true
console.log(isAnagram('jake', 'jay')); // false