// Task 1
// Масив додав випадковий
function average(value) {
    let sum = 0;
    let amount = 0;

    for (let i = 0; i<value.length; i++) {
        if (typeof value[i] === `number`) {
            sum += value[i];
            amount += 1
        }
    }

    if (amount === 0) {
        return 0;
    } else {
        return sum / amount;
    }
}

console.log('Середнє арифметичне: ' + average([10, 11, 12, 13, null, Boolean, 'number', 14, 15, 16]));


//Task 2
// function doMath() {
//
//     while(true) {
//         var x = prompt('Введіть перше значення:');
//         if(!isNaN(x)) {
//             break;
//         }
//         alert('Введіть число значення!')
//     }
//
//
//     while (true) {
//         var znak = prompt('Введіть математичну операцію (+, -, *, /, ^):');
//         if (znak === '+' || znak === '-' || znak === '*' || znak === '/' || znak === '^') {
//             break;
//         }
//         alert('Ви ввели неправильний математичний знак. Будь ласка, спробуйте знову.');
//     }
//
//     while(true) {
//         var y = prompt('Введіть друге значення:');
//         if(!isNaN(y)) {
//             break;
//         }
//         alert('Введіть число значення!')
//     }
//
//     return function () {
//         switch(znak) {
//             case `+` :
//                 return Number(x) + Number(y);
//             case `-` :
//                 return Number(x) - Number(y);
//             case `*` :
//                 return Number(x) * Number(y);
//             case `/` :
//                 return Number(x) / Number(y);
//             case `^` :
//                 return Number(x) ** Number(y);
//         }
//     }
// }
//
// const calc = doMath();
// console.log(`Відповідь на вашу математичну дію: ` + calc());

//Task 3
// function fillingArray(value1, value2, value3) {
//     let mainArray = new Array(value1);
//     for (let i = 0; i < value1; i++) {
//         mainArray[i] = new Array(value2);
//     }
//     for (let i = 0; i < value1; i++) {
//         for(let k = 0; k < value2; k++) {
//             mainArray[i][k] = value3;
//         }
//     }
//     return mainArray;
// }
//
// console.log(fillingArray(5, 3, 'Hello!'));

//Task4
// function deleteElement(value1, value2) {
//     let newString = '';
//
//     for (let i = 0; i < value1.length; i++) {
//         if (!value2.includes(value1[i])) {
//             newString += value1[i];
//         }
//     }
//     return newString;
// }
//
// console.log(deleteElement("hello world", ['l', 'd']))


