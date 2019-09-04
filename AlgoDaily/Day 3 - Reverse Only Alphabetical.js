// Problem description at: https://algodaily.com/challenges/reverse-only-alphabetical

function reverseOnlyAlphabetical(str) {
    const alphaChars = [];
    str = str.split('');

    for (let char of str) {
        if (/[a-zA-Z]/.test(char)) {
            alphaChars.push(char)
        }
    }
    const reversedAlpha = reverseArray(alphaChars);
    let idxRA = 0;
    for (let i = 0; i < str.length; i++) {
        if (/[a-zA-Z]/.test(str[i])) {
            str[i] = reversedAlpha[idxRA++];
        }
    }
    return str.join('');
}

function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}

// Test cases:

console.log(reverseOnlyAlphabetical('sea!$hells3')); // 'sll!$ehaes3'
console.log(reverseOnlyAlphabetical('1kas90jda3')); // '1adj90sak3'