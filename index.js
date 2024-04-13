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


        // 18-MASALA
// let arr = [`hello`, 2, 3, true, undefined]
// let newArr = arr.map((v) => {
//     return `${v}`;
// })

// console.log(newArr);


        // 19-MASALA
// let arr = [`1`, `2`, `3`, `a`, `d`, `undefined`];

// try {
//     let numArr = []
//     for (const iterator of arr) {
//         let iter =  parseFloat(iterator);
//         if (!isNaN(iter)) {
//             numArr.push(iter)
//         } else {
//             throw new TypeError(`Cannot convert to Number`)
//         }
//     }
//     console.log(numArr);

// } catch (error) {
//     console.log(error);
// }


        // 20-MASALA
// let n = 10000;

// let obj = {
//     soliqlar: n * (50/100),
//     sugurta: n * (30/100),
//     jamgarma: n * (20/100),
// }

// console.log(obj);


        // 21-MASALA
// let footballPoints = {
//     wins: 3,
//     draws: 4,
//     losses: 2,
// }

// let point = footballPoints.wins * 3 + footballPoints.draws

// console.log(point);



        // 22-MASALA
// let str = `Hello World`;
// let length = 0

// for (const iterator of str) {
//     length++;
// }

// console.log(length);



        // 23-MASALA
// let arrSize = 12;
// let arr = []

// for (let i = 1; i <= arrSize; i++) {
//     arr.push(i)
// }

// console.log(arr);


        // 24-MASALA
// let sum = 0;

// for (let i = 10; i <= 30; i++) {
//     if (i % 2 == 1) {
//         sum += i;
//     }
// }

// console.log(sum);



        // 25-MASALA
// let arr = [1, 2, 3, 4, 5];

// function reverseArr() {
//     let last = arr.length - 1;
//     let reversedArr = [];

//     for (last; last >= 0; last--) {
//         reversedArr.push(arr[last])
//     }

//     console.log(reversedArr);
// }

// reverseArr()



        // DOM
    // Modify the style
// function clickBtn () {
//     const p = document.getElementById(`text`)

//     p.classList.add('text-danger')
// }


    // Get input values
// const name = document.getElementById('name');
// const Iname = document.getElementById('Iname');
// const button = document.getElementById('button');
// const form = document.getElementById('form');

// button.addEventListener('click', function (e) {
//     e.preventDefault();

//     let user = {}

//     user.name = name.value;
//     user.Iname = Iname.value;

//     console.log(user);
//     form.reset()
// })


        // Calculator
// const fsArg = document.getElementById('fs-arg');
// const secArg = document.getElementById('sec-arg');
// const calcBtn = document.getElementById('calc-btn');
// const span = document.getElementById('span');
// const calculator = document.getElementById('calculator');

// calcBtn.addEventListener('click', function (e) {
//     e.preventDefault();

//     let res = Number(fsArg.value) + Number(secArg.value);
//     span.innerHTML = res;
//     calculator.reset()
// })



        // Display random number
function randomNumber() {
    let span = document.getElementById('span');
    let ramdomN = Math.round(Math.random() * 1000);

    if (ramdomN % 2 == 0) {
        span.innerHTML = ramdomN
        span.style.color = `red`;
    } else {
        span.innerHTML = ramdomN
        span.style.color = `blue`;
    }
}