const array = [1, 2, 3, 4, 5];

const isNumber = (number) => typeof number === 'number';

console.log(isNumber(2));

const isString = (string) => typeof string === 'string';

const isArrayNumbers = (array) => {
    return array.every((number, index, array) => isNumber(number));
}

console.log(isArrayNumbers(array));

const isArrayString = (array) => {
    return array.every((string, index, array) => isString(string));
}

// Bai 1. Viết hàm tìm ra số nhỏ nhất trong mảng các số.

const minNumbers = (array) => {
    if (isArrayNumbers(array)) {
        return Math.min(...array);
    }

    throw new Error('Array have element is not number');
}

console.log(minNumbers(array));

// Bai 2. Viết hàm tìm ra số lớn thứ nhì trong mảng các số

const maxNumberSecond = (array) => {
    if (isArrayNumbers(array)) {
        array.sort();
        return array[array.length - 2];
    }

    throw new Error('Array have element is not number');
}

console.log(maxNumberSecond(array));

// Bai 3.Viết hàm truyền vào 1 mảng tên học viên, 
// sắp xếp lại mảng này theo chiều ngược của bảng chữ cái. 

const arrayStr = ['Nam', 'Hoa', 'Tuấn'];

const sortedArrayString = (array) => {
    if (isArrayString(array)) {
        return array.sort().reverse();
    }

    throw new Error('Array have element is not string');
}

console.log(sortedArrayString(arrayStr));

// Bai 4. Tính tổng các số chia hết cho 5 từ 0 -> 100

const arrayDivisibleBy5 = (fisrt, second) => {
    if ([fisrt, second].some((number) => !isNumber(number))) {
        throw new new Error('Input have element is not number')
    }

    const arr = [...Array(100).keys()].map(fisrt => fisrt + 1);

    return arr.reduce((total, number) => {
        if (number % 5 === 0) {
            total += number;
        }

        return total;
    }, 0)
}

console.log(arrayDivisibleBy5(3 ,100));

// Bai 5. Viết hàm cho phép truyền vào 1 mảng các số,
//  kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2

const newArray = (array) => {
    if (isArrayNumbers(array)) {
        return array.map((number, index, array) => number % 2);
    }

    throw new Error('Array have element is not number');
};

console.log(newArray(array))

// Bai 6. Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất.

const arr = ['aba', 'aa', 'ad', 'c', 'vcd'];
// Solution 1

// const largestStringLength = (array) => {
//     return array.filter((string, index, array) => {
//         if (string.length === array[0].length) {
//             return string;
//         }
//     });
// };

// const sortedStringLength = (array) => {
//     return array.sort((firstString, secondString) => {
//         return secondString.length - firstString.length;
//     });
// }

// console.log(largestStringLength(sortedStringLength(arr)));

// Solution 2

// arr.sort((firstString, secondString) => {
//     return secondString.length - firstString.length;
// });
// console.log(largestStringLength(arr));

// Solution 3

const largestStringLength = arr.reduce((array, string) => {
    const lengthMax = arr.reduce((max, string) => {
        if (string.length > max)
            return string.length;
    
        return max;	
    
    }, 0)
    if (string.length === lengthMax) {
        console.log(string);
        array.push(string);
    }

    return array;	
}, []);

console.log(largestStringLength);

// Bai 7.  Viết chương trình JavaScript để lấy một phần tử ngẫu nhiên từ một mảng

// const randomItem = (array) => array[Math.floor(Math.random() * array.length)]

// console.log(randomItem(array));

// const radomItem = _.sample(array);

const radomItem = _.sample(array, 2);

console.log(radomItem)

// Bai 8.Viết chương trình đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng

const shuffleArray = _.shuffle(array);

console.log(shuffleArray);

// Bai 9. Viết chương trình JavaScript để lấy một mảng các phần tử xuất hiện trong cả hai mảng

const intersection = (firstArry, secondArry) => {
    return (firstArry.filter((item) => secondArry.includes(item)))
    .sort((firstNumber, secondNumber) => firstNumber - secondNumber);
};

// const array = [1, 2, 3, 4, 5];
const array2 = [5, 3, 2, 8];

console.log(intersection(array, array2));

// Bai 10. Viết một chương trình JavaScript để lấy sự phần tử không xuất hiện ở cả 2 mảng

const difference = (firstArry, secondArry) => {
    return(firstArry.filter((item) => !secondArry.includes(item)))
    .concat(secondArry.filter((item) => !firstArry.includes(item)));
};

console.log(difference(array, array2));

// Bai 11. Viết một chương trình JavaScript trả về một tập hợp con của một chuỗi.

const string = "dog"
const strArr = string.split('');

let subSet = [];

// for (let i = 1; i < strArr.length; i++) {
//     const length = subSet.length;
//     // console.log(subSet.length)
//     for (let j = 0; j < length; j++) {
//         subSet.push(subSet[j] + strArr[i]);
//     }
//     subSet.push(strArr[i]);
// }


for (let i = 0; i < string.length; i++) {
    let count = 1;
    while (i + count <= string.length) {
        subSet.push(string.substring(i, i + count));
        count++;
    }
};

console.log(subSet);

// Bai 12.  Kiểm tra mảng xem có phải mảng tăng dần hay không

const lastArray = [1, 2, 5, 6, 8, 9];
const isIncreaseArray = lastArray.every((item, index, array) => {
    
    if (index == 0) {
        return true;
    }

    return array[index] > array[index - 1];
});

console.log(isIncreaseArray);

// Bai 13. Kiểm tra mảng xem có phải mảng sô lẻ giảm dần hay không

const isDecreaseArray = lastArray.every((item, index, array) => {
    
    if (index == 0) {
        return true;
    }

    return array[index] < array[index - 1];
});

console.log(isDecreaseArray);


