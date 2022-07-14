
//111111111111111111111111111

                // let i = 1;
                // while (i < 50) {
                //     console.log(i);
                //     i ++; 
                // }
                // for(let j = 35; j >= 8; j--){
                //     console.log(j);
                // }

//2222222222222222222222222222

        // let i1 = 89;
        // while (i1 > 11){
        //     document.write(`${i1} </br>`)
        //     i1 --;
        // }

//33333333333333333333333333333

// let sum = 0;
// for(let i = 0; i <= 100; i++){
//     sum += i ;
// }
// console.log(sum);

//4444444444444444444444444444444

        // let sum = 0;
        // for(let i = 1; i <= 5; i++){
        // for(let j = 0; j < i; j++){
        // sum += j;
        // }
        // console.log(sum);
        // }

//5555555555555555555555555555555555

                    // for(let i = 8; i < 56; i +=2){
                    //    console.log(i); 
                    // }
                    // let i =8;
                    // while(i < 56){
                    //     console.log(i);
                    //     i +=2;
                    // }

//66666666666666666666666666666666666666

// let sum = 0;

// for(let i = 1; i < 11; i++){
//         for(j = 0; j < 11; j++){
//             sum = i * j;
//             console.log(`${i} * ${j} = ${sum}`);
//         }
// }




//777777777777777777777777777777777777777777
     
// let iter = 0;

// for(let n = 1000; n >= 50; n /= 2){
//     console.log(n);
//     iter ++;
// }
// console.log(`колличество итераций: ${iter}`);

// let n = 1000;
// while(n >= 50){
//     n /=2;
//     console.log(n);
//     iter ++;
// }
// console.log(`колличество итераций: ${iter}`);


//888888888888888888888888888888888888888888
let sum =0;
let count = 0;
let avg = 0;

for(;;){
    const number = +prompt('Введите число'); 
    if(number !== number){//Nan !== Nan --true
        console.log('Ошибка ввода');
        break;
    }
    if(number === 0){
        break;
    }
    // sum = sum + number;
    sum += number;
    // count = count + 1;
    count +=1;
}
console.log(sum);
console.log(count);
avg = sum / count;
console.log(avg);

//9999999999999999999999999999999999999999

let number = '';
let str = '4 85 96 85 77 52 2 3 44 1 555 77 99 9 58 44 24 5 8 57';
let maxNumber = -Infinity;
let minNumber = Infinity;


for(let i = 0; i <= str.length; i++) {
    if(str[i] !== ' ' && str[i]  !== undefined) {
        // number = number + str[i];
        number += str[i];
    }else{
    console.log(number);
    number = +number;

    maxNumber = number > maxNumber ? number : maxNumber;
    minNumber = number < minNumber ? number : minNumber;

    number = ' ';

    }
}
console.log(`maxNumber: ${maxNumber}`);
console.log(`minNumber: ${minNumber}`);

//2способ -----------------------------------------------------

let str = '4 85 96 85 77 52 2 3 44 1 555 77 99 9 58 44 24 5 8 57';
let strArr = str.split(' ');

let maxNumber = strArr[0];
let minNumber = strArr[0];

for(let i = 0; i < strArr.length; i++){
    const nuumber = +strArr[i];
    maxNumber = nuumber > maxNumber ? nuumber : maxNumber;
    minNumber = nuumber < minNumber ? nuumber : minNumber;
}

console.log(`maxNumber: ${maxNumber}`);
console.log(`minNumber: ${minNumber}`);





//10------------------------------------















