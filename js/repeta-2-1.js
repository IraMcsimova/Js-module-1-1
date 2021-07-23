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
// const friends = ['mango', 'poly', 'kiwi', 'ajax']
// let string = ''

// for (const friend of friends){
//     string+=friend+','//конкатенация плюсуем каждое следующее значение
// }
// string = string.slice(0,string.length-1)//pop не используем так как это уже не массив
// console.log(string)
//метод два (проще, круче)
// const friends = ['mango', 'poly', 'kiwi', 'ajax']
// const string = friends.join ('---')
// console.log(string)


//ЗАЛАЧА6
// const string = 'JavaScript'
// const letters = string.split('')
// let invertedString = '';

// for(const letter of letters){
// console.log(letters)
// if (letter === letter.toLowerCase()){
//     console.log('this is letter in lower case', letter)
//     invertedString +=letter.toUpperCase();
// }
// else {
//     console.log('this letter is in upper case', letter)
//     invertedString += letter.toLowerCase()

// }}
// console.log('invertedString', invertedString)
//метод 2 (круче через тернарник)
// for(const letter of letters){
//     console.log(letter)
// invertedString+=
// letter===letter.toLowerCase()
// ?letter.toUpperCase()
// :letter.toLowerCase()}
// console.log('invertedString', invertedString)

//ЗАДАЧА7
//слаг
// const title = "top 10 benefits of React framework"
// const normalizedTitle = title.toLowerCase()
// console.log(normalizedTitle)
// const words = normalizedTitle.split(' ')
// console.log(words)
// const slug = words.join('-')
// console.log(slug)
// //можно одной строкой
// const slug1 = title.toLowerCase().split(' ').join('-')
// console.log(slug1)

//ЗАДАЧА 8  вычислить сумму двух массивов
// const array1=[5,10,15,28]
// const array2=[10,20,38]
// let total=0;
// const numbers = array1.concat(array2)
// console.log(numbers)
// for (const number of numbers){
//     total+=number;
// }
// console.log (total)

//ЗАДАЧА 9 

const cards = [
    'Карточка -1',
    'Карточка -2',
    'Карточка -3',
    'Карточка -4',
    'Карточка -5'
]
// const cardToRemove = 'Карточка -3'
// const index = cards.indexOf(cardToRemove)
// console.log(index)
// cards.splice(index,1)
// console.log(cards)
// const cardToInsert = 'Карточка 7'
// const index=3
// cards.splice(index,0,7,0)//сначала куда вставляем, что удаляем, потом что вставляем через запятую

// console.log(cards)
