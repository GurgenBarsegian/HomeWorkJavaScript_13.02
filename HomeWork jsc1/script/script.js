// // 1. Составьте программу, которая присваивает переменной d значение 7, а затем выводит на экран: в первой строке - это значение, во второй – квадрат этого значения, в третьей – куб этого значения. Программа должна выводить на экран новое значение.
// let d = 7;
// console.log(d);
// console.log(d**2);
// console.log(d**3);


// // 2. Составьте программу, которая принимает с клавиатуры два целых числа и, если первое больше второго, выводит на экран их сумму, если же наоборот – выводит на экран их произведение. В случае же, если числа одинаковы, программа выводит на экран сообщение "числа одинаковые".
// let numb1 = +prompt('Enter the first number');
// let numb2 = +prompt('Enter the second number');
// if(numb1>numb2){
//     let firstResult = numb1 + numb2;
//     console.log(numb1 + ' + ' + numb2 + ' = ' + firstResult);
// }else if (numb1<numb2){
//     let secondResult = numb1 - numb2;
//     console.log(`${numb1} - ${numb2} = ${secondResult}`);
// }else{
//     console.log('Числа одинаковые: ' + numb1 + ' = ' + numb2);
// }


// // 3. Составьте программу, которая принимает с клавиатуры целое число и, если оно положительное, выводит его куб.
// let numb3 = +prompt('число если оно положительное, выводит его куб.')
// if(numb3>0){
//     let resultCube = numb3**3;
//     console.log(resultCube);
// }else{
//     console.log('Увы, число меньше или равно нулю');
// }


// // 4. Составьте программу, которая принимает с клавиатуры два числа: первое – количество учеников в классе, второе – количество стульев в кабинете.
// let numb4 = +prompt('количество учеников в классе');
// let numb5 = +prompt('количество стульев в кабинете');
// if(numb4<=numb5){
//     console.log('стульев хватает');
// }else{
//     console.log('стульев не хватает');
// }


// // 5. Составьте программу, которая выводит на экран все однозначные положительные числа в возрастающем порядке.
// for(let x = 1; x<10; x++){
//     console.log(x);
// }


// // 6. Написать цикл, который выводит те числа из массива, которые больше или равны      15.
let array = [8, 23, 13, 4, 2, 36, 7, 16, 9, 14, 110, 5, 15]
// for(let i = 0; i < array.length; i++){
//     if(array[i] >= 15){
//         console.log(array[i]);
//     }
// }


// // 7. Написать цикл, который выводит только нечетные числа массива.
// for(let i = 0; i < array.length; i++){
//     if(array[i]%2==1){
//         console.log(array[i]);
//     }
// }


// // 8. Вывести только те значения массива, индекс которых кратен трем.
// for(let x = 0; x < 33; x++){
//     if(x%3==0){
//         console.log(x);
//     }
// }


// // 9. Найти сумму нечетных чисел и вывести в консоль.
// let sum = 0;
// for(let i = 0; i < array.length; i++){
//     if(array[i]%2==1){
//         sum = sum + (array[i]); 
//     }
// }
// console.log(sum);

// 10. Найти сумму четных и нечетных чисел из массива и вывести разницу между ними. Вычесть из большего меньшее.
let evenNumber = 0;
let unevenNember = 0;
for(let i = 0; i < array.length; i++){
    if(array[i]%2==0){
        evenNumber = evenNumber + array[i];
    }
    else{
        unevenNember = unevenNember + array[i];
    }
}

if(evenNumber>unevenNember){
    let newNumb = evenNumber - unevenNember;
    console.log('Сумма четных чисел больше суммы нечетных ' + evenNumber + ' > ' + unevenNember );
    console.log(newNumb);
}else{
    let newNumb1 = unevenNember - evenNumber;
    console.log('Сумма НеЧетных чисел больше суммы четных' + unevenNember + '>' + evenNumber);
    console.log(newNumb1);
}
console.log(array);
