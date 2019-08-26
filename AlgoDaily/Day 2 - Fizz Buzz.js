function fizzBuzz(number) {
    let finalString = '';
    for (let i = 1; i <= number; i += 1) {
        if (i % 3 === 0) {
            finalString += 'fizz';
        }
        if (i % 5 === 0) {
            finalString += 'buzz';
        }
        if (i % 3 !== 0 && i % 5 !== 0) {
            finalString += String(i);
        }
    }
    console.log(finalString);
    return finalString;
}

fizzBuzz(15);