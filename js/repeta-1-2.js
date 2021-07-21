// const stars = 8;
// let price;

// switch(stars){
//     case 1:
//         price===20;
//         break;
//         case 2:
//             price===30;
//             break;
//             case 3:
//                 price===40;
//                 break;
//                 case 4:
//                     price===50;
//                     break;
//                     case 5:
//                         price===70;
//                         break;
//                         default :console.log(`no hotels`)
//         }
//         console.log(`Price for this hotel is ${price}`)

        // const optium = 3;
        // let message = '';
        // switch (optium){
        //     case 1:
        //         message = `you can receive your order at 10:00`;
        //         break;
        //         case 2 :
        //             message = `you can receive your order at 12:00`;
        //             break;
        //             default : message = `good bye`}
        //             console.log(message)
                    
    //     for (let i=0; i<5; i+=1) //let i=0 - 0 - нчальное значени откуда начнется цикл,
    //     //инициализация запуск счетчика один раз, 
    //     //перед первой итерацией проверяется условие i<5, если фолс - цикл заврешается, 
    //     //если тру - цикл продолжается, i+=1 - какой шаг цикла
    //    //i++ - то же что и i+= - но не надо использовать ++ єто очень плохой тон!
    //     {
    //         console.log(i);
    //     }
    //     console.log(`cycle is end`)


    //сделать переменные
    //перебрать работников в цикле

//     const employees = 5;
//     const minSalary = 500;
//     const maxSalary = 5000;
//    let totalSalary = 0;

//    for (let i=1; i<=employees; i+=1) {
//    const salary = Math.round(
//        Math.random () * (maxSalary-minSalary) + minSalary,);
       
       
// console.log (`THe wage of worker ${i} is ${salary}`);
//     }
//     console.log('totalSalary:', totalSalary)



// остаток от деления console.log(14%2) - 0, 15%2 - 1
const min = 6;
const max = 13;
let total = 0;

// for (let i = min; i <= max; i +=1){
//     console.log(i);
//     if (i %2 === 0) {
//     console.log(`Even number`, i)
//     total+= i;}
// }

// console.log (`total:`, total)
//а можно так
// for (let i = min; i <= max; i +=1){
        
//         if (i %2 !== 0) {
//         console.log(`Odd number`, i)
//     continue;}
//     console.log (`Even :`, i);
//     total =+1;
//         }
//         console.log(`total:`, total);

// let balance = 10000;
// const payment = 2000;

// console.log(`Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету`)
// if (payment<= balance) {
//     console.log (`ok`)
//     balance-=payment;
//     console.log (`On your account ${balance} credits`)
// } else { console.log (`THe process is over`)}
// console.log(`Good bye`)
//свич проверяет на равенство!!! если  в задаче есть условие от и до - значит это иф елсе 

// const totalSpent = 20000;
// let payment = 500;
// let discount = 0;
// if(totalSpent <100){
//     console.log(`YOu are not a partner, discount is 0%`)
// }
// if (totalSpent >=100 && totalSpent <1000){
//     console.log (`<Bronze partner, discount is 2%`);
//     discount = 0.02;
// } else if (totalSpent >=1000 && totalSpent<5000){
//     console.log (`Silver partner, discount is 5%`);
//     discount = 0.05;
// }
// else {
//     console.log (`Gold partner, discount is 10%`)
//     discount = 0.1;
// }  
// payment -= payment*discount;
// //payment=payment - payment*discount

//     console.log (`The order is processed, total sum is ${payment} with the discount ${discount*100}%`)

