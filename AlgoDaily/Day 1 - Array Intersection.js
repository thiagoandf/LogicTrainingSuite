// Problem description at: https://algodaily.com/challenges/array-intersection

function intersection(arr1, arr2) {
    const numberDict = {};
    const finalArray = [];
    let largestLength = 0;

    if (arr1.length >= arr2.length) {
        largestLength = arr1.length;
    } else
        arr2.length;
    for (let i = 0; i < largestLength; i += 1) {
        if (arr1[i] !== undefined) {
            if (!numberDict[arr1[i]]) {
                numberDict[arr1[i]] = 1;
            } else if (numberDict[arr1[i]] === 2) {
                numberDict[arr1[i]] = 3;
                finalArray.push(arr1[i])
            }
        }
        if (arr2[i] !== undefined) {
            if (!numberDict[arr2[i]]) {
                numberDict[arr2[i]] = 2;
            } else if (numberDict[arr2[i]] === 1) {
                numberDict[arr2[i]] = 3;
                finalArray.push(arr2[i])
            }
        }
    }
    console.log(finalArray);
    return finalArray;
}

// Test cases: 

console.log(intersection([6, 0, 12, 10, 16], [3, 15, 18, 20, 15])); // []
console.log(intersection([1, 5, 2, 12, 6], [13, 10, 9, 5, 8])); // [5]
console.log(intersection([4, 17, 4, 4, 15, 16, 17, 6, 7], [15, 2, 6, 20, 17, 17, 8, 4, 5])); // [ 15, 6, 17, 4 ]
console.log(intersection([ 3 ],[ 15 ])); // []
console.log(intersection([ 2,16,8,9 ],[ 14,15,2,20 ])); // [2]