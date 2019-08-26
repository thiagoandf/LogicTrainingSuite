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