        // 1-MASALA
// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(3, 5));


        // 3-MASALA
// let str = `radar`;

// let isPalindrome = () => {
//     if (Array.from(str).reverse().join('') == str) {
//         return `This word is palindrome`
//     } else {
//         return `This word isn't palindrome`
//     }
// }

// console.log(isPalindrome())


        // 4-MASALA
// let arr = [3, 6, -2, -5, 7, 3];

// function largestProduct() {
//     let res = arr[0] * arr[1];
//     let products;

//     for (let i = 1; i <= arr.length; i++) {
//         if (res < (arr[i] * arr[i+1])) {
//             res = arr[i] * arr[i+1]
//             products = `${arr[i]} and ${arr[i+1]}`;
//         }
//     }
//     console.log(`${products} produce largest product`);
// }

// largestProduct()


        // 5-MASALA
    /* 1 */
// for (let i = 0; i <= 10; i+=2) {
//     console.log(i);
// }

    /* 2 */ 
// let i = 0
// do {
//     console.log(i);
//     i+=2;
// } while (i <= 10);

    /* 3 */ 
// let i = 0
// while (i <= 10) {
//     console.log(i);
//     i+=2;
// }


        // 6-MASALA
// for (let i = 2; i <= 9; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }


        // 7-MASALA
// function sumArr(arg) {
//     let sum = 0;
//     for (const iterator of arg) {
//         sum += iterator
//     }
//     return sum
// }

// sumArr([1, 7, 4, 2, 8])


        // 8-MASALA
// const reverseArr = function (arr) {
//     return arr.reverse()
// }

// console.log(reverseArr([1,2,3,4,5]));


        // 9-MASALA
// let arr = [2, 11, 4, 3];
// console.log(arr.sort((a, b) => a - b));


        // 10-MASALA
// let arr = [1, -1, -2, -3, 4, 10]
// let newArr = arr.filter(item => item > 0)
// console.log(newArr);


        // 11-MASALA
// let str = `Hello   World          hello`
// let str = `salom`

// function removeSpace() {
//     let newArr = []
//     let arr = Array.from(str)
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == ' ') {
//             continue;
//         }
//         newArr.push(arr[i]);
//     }
//     console.log(newArr.join(''));
// }

// removeSpace()


        // 12-MASALA
// let n = 120;

// if (n % 10 == 0) {
//     console.log(true);
// } else {
//     console.log(false);
// }


        // 13-MASALA
// let str = 'hello'

// function countVowels() {
//     let vowelArr = [`a`, `o`, `u`, `i`, `e`, `o'`];
//     let counter = 0;

//     for (let i = 0; i <= str.length; i++) {
//         for (let j = 0; j < vowelArr.length; j++) {
//             if (str[i] == vowelArr[j]) {
//                 counter++
//                 console.log(str[i], vowelArr[j]);
//             }
//         }
//     }

//     return counter
// }

// console.log(countVowels());



        // 14-MASALA
// function firstEL(arr) {
//     return arr[0]
// }

// console.log(firstEL(['asd', 1, 3, 4, true]));


        // 16-MASALA
// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.map((v) => {
//     return v + 1
// })

// console.log(newArr);


        // 17-MASALA
// let arr = [1, 2, 3, 4, 5];
// let res = arr.includes(7)

// console.log(res); // false