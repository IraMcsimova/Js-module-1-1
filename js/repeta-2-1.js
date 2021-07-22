// const friends=['mango', 'kiwi', 'poly', 'ajax'];
// console.table(friends)
// console.log(friends[2])
// const  lastIndex = friends.length-1;
// console.log(lastIndex)

// //index = length-1 !!!!
// //массив всегда конст! меняется не переменная а значение 
// friends[1]='hihihih' 
// friends[3]=1234567
// console.log(friends)

// let a =10;
// let b=a;
// console.log (a)
// console.log (b)
// a=20;
// console.log (a)
// console.log (b)
// ксерокс
//в массиве копируется ссылка

// const friends=['mango', 'kiwi', 'poly', 'ajax'];
// const lastIndex=friends.length-1
// for (let i=0; i<=lastIndex; i+=1)
// {
//     console.log(friends[i])
// }
//friends[i] - обращение к каждому элементу массива
// const friends=['mango', 'kiwi', 'poly', 'ajax'];
// const lastIndex=friends.length-1
// for (let i=0; i<=lastIndex; i+=1)
// {
//    friends[i]+='-1';
// } console.log(friends)
// const friends=['mango', 'kiwi', 'poly', 'ajax'];
// for (const friend of friends){
//     console.log(friend)
// }
//используем если не нужен индекс

//ЗАДАЧА1
//посчитать суму массива
//1.перебрать массив
//2.сделать переменную total до цикла!!!
//3.каждый элемент приплюсовать к тотал
// const cart=[54, 28, 105, 70, 92, 17, 120];
// let total=0;
// for (let i=0; i<cart.length; i+=1){
//     console.log(cart[i])
//     total+=cart[i];
// }
// console.log(`Total:`, total)
//через for of
// for (const value of cart){
//     total+=value;
//     }

//ЗАДАЧА 2
//напиши скрипт который подсчитывает все четный числа массива
// const numbers= [1,5,8,9,12,4,15,27,30,18,11]
// let total = 0;
//1.перебрать массив
//2.переменная тотал
//3. на каждый итерал проверить четность
//4. енсли четное - суммировать
// for (let i=0; i<numbers.length; i+=1){
//     console.log(numbers[i]);
//     if(numbers[i] % 2===0){
//         console.log('EVEN!!!');
//         total += numbers[i];
//     }
// }
// console.log('total:', total)
//через for of
// for (const number of numbers){
//     if (number%2===0){
//         console.log('even')
//         total+=number;
//     }
// }
// console.log(total)

// for (const number of numbers){
//     if (number%2 !==0){
//         console.log('cancelled')
//       continue;//говорит если иф выполнен - дальше не идем, а выполняем следующую итерацию

//     }
//     console.log('Even')
//     total+=number;
// }
// console.log(total)

//ЗАДАЧА 3

// const logins = ['mangoDoge','tototo','yoyoyo','rererer','titit']
// const loginToFind = 'yoyoyo'
// let message=''
// for (let i=0; i<logins.length; i+=1){
//     const login=logins[i];
//     console.log('Login:', login)
//     console.log(`${login}===${loginToFind}:`, login===loginToFind)
//     if(login===loginToFind){
//         console.log('Yuppie it is the same')
//         message = `User ${loginToFind} is found`
//         break
//     }
//    }
//     console.log(message)
    //крутяк и через for of - способ 2

    // for(const login of logins){
    //     console.log('Login:', login)
    //     console.log(`${login}===${loginToFind}:`, login===loginToFind)
    //     if(login===loginToFind){
    //         console.log('Yuppie it is the same')
    //         message = `User ${loginToFind} is found`
    //         break
    //     }
    //    }
        // console.log(message)

        //тернарный оператор - спосоь 3 - лучший
        // const a=15>10?"aga":"no";
        // const message = logins.includes(loginToFind)
        // ? 'user is found'
        // :'no user'
        // console.log(message);//- возвращает тру или фолс, отвечает на вопрос вмещает? 

//ЗАДАЧА 4
//найди самое маленькое значение в массиве
// const numbers = [51,18,13,24,7,85,19]
// //1.
// let smallestNumber = numbers[0];
// // console.log(smallestNumber)
// for(const number of numbers){
//     // console.log(number);
//     if (number<smallestNumber){
//         smallestNumber=number;
//     }
// }
// console.log('smallestNumber', smallestNumber);

//ЗАДАЧА 5
const friends = ['mango', 'poly', 'kiwi', 'ajax']
let string = ''

for (const friend of friends){
    string+=friend
}
console.log(string)


