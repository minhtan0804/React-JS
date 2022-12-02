const isArrayNumbers = (array) => {
    return array.every((item) => {
        return typeof item === 'number';
    });
}

const isNumber = (number) => typeof number === 'number';
console.log(isNumber(2));

// Bai 1
const array = [1, 2, 3, 4, 5];
console.log(isArrayNumbers(array));

const minNumbers = (array) => {
    if (isArrayNumbers(array)) {
        return Math.min(...array);
    }

    throw new Error('Array have element is number');
}

console.log(minNumbers(array));

// Bai 2

const maxNumber = (array) => {
    if (isArrayNumbers(array)) {
        return Math.max(...array);
    }

    throw new Error('Array have element is number');
}

console.log(maxNumber(array));

// Bai 3

const arrayStr = ['Nam', 'Hoa', 'Tuấn'];

console.log(arrayStr.sort().reverse());

// Bai 4

const arrayDivisibleBy5 = (fisrt, last) => {
    // if ([fisrt, last].some((number) => !isNumber(number))) {
    //     throw new new Error('input have element is number')
    // }
    const arr = [...Array(100).keys()].map(fisrt => fisrt + 1);

    return arr.reduce((total, number) => {
        if (number % 5 === 0) {
            total += number;
        }

        return total;
    }, 0)
}


console.log(arrayDivisibleBy5(3 ,100));

// Bai 5

const newArray = array.map ((number, index, array) => number % 2);
console.log(newArray)

// Bai 6

const arr = ['aba', 'aa', 'ad', 'c', 'vcd'];
// Solution 1
/*
const sortedStringLength = (array) => {
    return array.sort((firstString, secondString) => {
        return secondString.length - firstString.length;
    });
}


const largestStringLength = (array) => {
    return array.filter((string, index, array) => {
        if (string.length === array[0].length) {
            return string;
        }
    });
};

console.log(largestStringLength(sortedStringLength(arr)));

*/


// Solution 2
/*arr.sort((firstString, secondString) => {
    return secondString.length - firstString.length;
});
console.log(largestStringLength(arr));

*/


// Solution 3

// const lengthMax = arr.reduce((max, string) => {
//     console.log(max);
//     console.log(string.length);
//     if (string.length > max)
//         return string.length;

//     return max;	

// }, 0)

// console.log(lengthMax);

// const largestStringLength = arr.reduce((lengthMax, string, array) => {
//     console.log(lengthMax);
//     if (string.length === lengthMax) {
//         console.log(string);
//         return array.push(string);
//     }

//     return array;	
// }, []);

// console.log(largestStringLength);

// Bai 7

// const randomItem = (array) => array[Math.floor(Math.random() * array.length)]
// console.log(randomItem(array));
// const radomItem = _.sample(array);
const radomItem = _.sample(array, 2);
console.log(radomItem)

// Bai 8

const shuffleArray = _.shuffle(array);
console.log(shuffleArray);

// Bai 9

const intersection = (firstArry, secondArry) => {
    return (firstArry.filter((item) => secondArry.includes(item)))
    .sort((firstNumber, secondNumber) => firstNumber - secondNumber);
};

const array2 = [5, 3, 2, 8];
console.log(intersection(array, array2));

// Bai 10

const difference = (firstArry, secondArry) => {
    return(firstArry.filter((item) => !secondArry.includes(item)))
    .concat(secondArry.filter((item) => !firstArry.includes(item)));
};

console.log(difference(array, array2));

// Bai 11
const string = "dogh"
const strArr = string.split('');

let res = [];
// for (let i = 1; i < strArr.length; i++) {
//     const length = res.length;
//     // console.log(res.length)
//     for (let j = 0; j < length; j++) {
//         res.push(res[j] + strArr[i]);
//     }
//     res.push(strArr[i]);
// }


for (let i = 0; i < string.length; i++) {
    let count = 1;
    while (i + count <= string.length) {
        res.push(string.substring(i, i + count));
        count++;
    }
}
console.log(res);

// Bai 12

const lastArray = [1, 2, 5, 6, 8, 9];
const isIncreaseArray = lastArray.every((item, index, array) => {
    
    if (index == 0) {
        return true;
    }

    console.log(item);

    return array[index] > array[index - 1];
} )

console.log(isIncreaseArray);

// Bai 13

const isDecreaseArray = lastArray.every((item, index, array) => {
    
    if (index == 0) {
        return true;
    }

    console.log(item);

    return array[index] < array[index - 1];
} )

console.log(isDecreaseArray);



