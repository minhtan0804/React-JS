// BAi 1

function isString(string) {
    if (typeof string === 'string') {
        return true;
    }
    return false;
}

function checkStringExist(stringA, stringB) {
    if (!isString(stringA) || !isString(stringB)) {
        console.log('Khong hop le');
        return;
    }

    // if (stringA.indexOf(stringB) != -1) {
    //     return true;
    // }

    if (stringA.includes(stringB)) {
        return true;
    }

    return false;

}

console.log(checkStringExist('ahsj', 'h'));

// BAi 2

function shortenString(string) {
    if (!isString(string)) {
        console.log('Khong hop le');
        return;
    }

    if (string.length < 8) {
        console.log('Xau ngan qua');
        return;
    }

    return string.substr(0, 8);
}

console.log(shortenString('sahvsdfvjsdvsk'));

// BAi 3

function duplicatedString(string) {
    if (!isString(string)) {
        return 'Khong hop le';
    }

    let newString = string;
    for (let i = 0; i < 9; i++) {
        newString = newString + string;
    }

    return newString;
}

console.log(duplicatedString('ab'));

// BAi 4

function duplicatedString(string) {
    if (!isString(string)) {
        return 'Khong hop le';
    }

    let newString = string;
    for (let i = 0; i < 9; i++) {
        newString += '-' + string;
    }

    return newString;
}

console.log(duplicatedString('ab'));

// BAi 5

function duplicatedString(string, n) {
    if (!isString(string)) {
        return 'Khong hop le';
    }

    let newString = string;
    while (n-- > 1) {
        newString += '-' + string;
    }

    return newString;
}

console.log(duplicatedString('ab', 5));

// BAi 6

function reversedString(string) {
    if (!isString(string)) {
        return 'Khong hop le';
    }

    return string.split('').reverse().join("");
}

console.log(reversedString('ab'));

// BAi 7

function isSymmetricString(string) {
    if (!isString(string)) {
        return 'Khong hop le';
    }

    let newString = string.split(' ').join('');
    return newString === reversedString(newString);
}

console.log(isSymmetricString('aba ba'));

// BAi 8

function isUppercaseString(string) {
    if (!isString(string)) {
        return 'Khong hop le';
    }
    
    return string === string.toUpperCase();
}

console.log(isUppercaseString('AB'));


