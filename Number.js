// BAI 1

function calcVolofSphere(radius) {
    if (radius <= 0) {
        console.log("Khoong hop le");
        return;
    }

    return 4 / 3 * Math.PI * Math.pow(radius, 3);
}

console.log(calcVolofSphere(5));

// BAI 2

function calcSumOfInt(firstNumber, secondNumber) {
    if (firstNumber === secondNumber) {
        return 0;
    } else if (firstNumber > secondNumber) {
        [firstNumber, secondNumber] = [secondNumber, firstNumber];
    }
    let sum = 0;
    while (firstNumber < secondNumber - 1) {
        firstNumber++;
        sum += firstNumber;
    }

    return sum;
}

console.log(calcSumOfInt(5, 8));

// BAI 3

function isPrine(number) {
    if (number < 2) {
        return false;
    }

    if (number === 2) {
        return true;
    }

    if (number % 2 === 0) {
        return false;
    }

    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        if (number % i === 0) {
            return false;
        }

        return true;
    }
}

console.log(isPrine(14562));

// BAI 4

function sumPrimeSmallerN(number) {
    let sum = 0;
    for (let i = 2; i <= number; i++) {
        if (isPrine(i)) {
            sum += i;
            // console.log(i);
        }
    }

    return sum;
}

console.log(sumPrimeSmallerN(20));

// BAI 5 

function sumAllDivions(number) {
    let sum = 0;
    for (let i = 1; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            sum += i;

            if (number / i != i) {
                sum += number / i;
            }
        }
    }

    return sum;
}

console.log(sumAllDivions(20));

// BAI 6

function minNumber(number) {
    let stringNumber = '';
    if (number < 0) {
        stringNumber = number.toString().substr(1);
    } else {
        stringNumber = number.toString();
    }

    let arrayCharNumber = stringNumber.split('');


    if (number < 0) {
        let result = arrayCharNumber.sort(function (a, b) {
            return b - a;
        }).join('');
        return Number(result) * -1;
    } else {
        arrayCharNumber.sort();
        for (let i = +0; i < arrayCharNumber.length; i++) {
            if (arrayCharNumber[i] !== '0'){
                [arrayCharNumber[0], arrayCharNumber[i]] = [arrayCharNumber[i], arrayCharNumber[0]];
            }
        }
        return +arrayCharNumber.join('');
    }
}

console.log(minNumber(-113));
console.log(minNumber(15006532));
