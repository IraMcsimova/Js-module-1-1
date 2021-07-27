//функция - мясорубка, входит что-то - функция перемалывает мясо - выходит фарш
// const add = function add (x,y) {
//  // - функциональное выражение
// //мы объявили функцию но! она еще не выполняется
// // в круглых скобках объявляем параметры (к примеру паратметры x и y)
// console.log(x)
// console.log(y)
// const result = x+y
// console.log (   `x+y =`, result)
// console.log(`выполняется функция`)
// return result}
// //вызываем фукнцию (function invocation)
// const r1=add(5,3)
// console.log(`r1`,r1)
// //здесь передаем оргументы в скобках
// const r2=add(10,20)
// console.log(`r2`,r2)

//return - возврат!!!

// const fn = function(){
//     console.log(1)

//     console.log(2)

//     console.log(3)
//     return 777
// }
// console.log(fn())
//если мы не поставили ретурн - вернется андефайнд (неявный воззврат) - значение для возврата не орпеделен
//если ретурн поместить вперед то пропадут все консольки,
//то есть когда встречается ретурн - функция прекращает выполняется и интерпретация кода выходит из области видимости функции и неважно сколько в ней ифов форов и т.д.
// const fn = function(value){
//     console.log(1)

//     console.log(2)

//    if (value<50){
//        return `less than 50`
//    }
//     return `more than 50`
// }
// console.log(`result is :`,fn(10));
// console.log(`result is`, fn(1000))

//стек вызовов!!!!
//это пачка листов или книг можно только сверху положить или забрать
//ретурн снимает со стека функцию
// const fnA = function(){
//     console.log(`Function A is processing`)
// }

// const fnB = function(){
//     console.log(`Function B is processing`)
// }

// const fnC = function(){
//     console.log(`Function C is processing`)
// }
// console.log(`Log before A function invocation`)
// fnA()
// console.log(`Log after A function invocation`)
// console.log(`Log before B function invocation`)
// fnB()
// console.log(`Log after B function invocation`)
// console.log(`Log before C function invocation`)
// fnC()
// console.log(`Log after C function invocation`)

//функции выполня.тся последоватнльно!!! мейн - фнА - консоль (тоже функция, с уже включенным неявным ретурном) - фнБ - консоль - фнС - консоль
//если есть функция в функции то мейн - фнА - фнБ - фнС - консоль
// const fnA = function(){
//     console.log (`Function A is proceeding`)
//     fnB()
// }
// const fnB = function(){
//     console.log (`Function B is proceeding`)
//     fnC()
// }
// const fnC = function(){
//      console.log (`Function C is proceeding`)
//      console.log(value)
// }
// fnA()

//TASKS
// const cart = [54,28,105,78,92,17,120,12,25,90]
// let total = 0;
// for (const value of cart){
//     total+=value
// }
// console.log(`total`, total)

// //а теперь через функцию
// const calculateTotalPrice = function (items){
//     console.log(`items inside function:`, items)
//    let total=0;
//    for (const item of items){
//        total+=item
//    }
//    return total
// }
// console.log(calculateTotalPrice([1,2,3]))
// console.log(calculateTotalPrice([5,10,15,20]))
// console.log(calculateTotalPrice([100,200,300]))
// //ретурн влозвращается туда где вызывается функция, именно вцызывается! не объявляется!!!
// //метод - это и есть функция, метод это часть объекта. консоль лог - функция лог у объекта консоль.

//task 2 - ПОЛУЧАЕМ МАССИВ И ЛОГИРУЕМ В КОНСОЛЬ
// const logItems = function(items){
//     for (const item of items){
//         console.log(item)
//     }
// };
// logItems([`Mango`,`Kiwi`,`Poly`,`Ajax`])
// logItems([1,2,3,4,5])
// logItems([`lo`,`wi`,`poo`,`foo`])

//task3 - найди среди перечисленных пользоватеей нужный
// const logins = [`ffffff`,`gggggg`,`eeeeee`, `rrrrrr`]
// const findLogin = function(allLogins, loginToFind){
//     // console.log(allLogins)//передаем в оллогинс аргумент логинс
//     // console.log(loginToFind)

// //     for (const login of logins){
// //         if (login===loginToFind){
// //        return`User is found`}//кактолько встретит то что надо - выхожу из функции, в отличие от меседж - где функция будет выполняться до конца, даже если нашли логин уже остальные переберутся тоже

// //     }
// //     return `User is not found`
// // }
// // а теперь через тернарник !!!!!!!!!!
// return allLogins.includes(loginToFind) ?
// `User ${loginToFind} is found` :
// `User ${loginToFind} is not found`}

// console.log(findLogin(logins,`gggggg`))
// console.log(findLogin(logins,`ffffff`))
// console.log(findLogin(logins,`eeeeee`))
// console.log(findLogin(logins,`rrrrrr`))
// console.log(findLogin(logins,`rrrr`))

//TASK 3 the smallest number
// const findSmallestNumber = function(numbers){
//     let smallestNumber = numbers[0]
//     for(const number of numbers){
//         if(number <smallestNumber){
//             smallestNumber = number
//         }
//     }
//     return smallestNumber
// }
// console.log(findSmallestNumber([3,8,12,-2,10]))

//TASK 4 - register of the letter
// const changeCase = function(string){
//  const letters = string.split('');
//  let invertedString = ``

//  for (const letter of letters){
//      const isInLowerCase = letter===letter.toLowerCase()

//      invertedString+=isInLowerCase
//      ? letter.toUpperCase()
//      : letter.toLowerCase()
// }

//  return invertedString
// }

// console.log(changeCase (`rKnfJJJ`))
// console.log(changeCase (`blblbAAAA`))

//TASK5 - надо вернуть слаг
// const slugify = function (string){
//     return string.toLowerCase().split(' ').join(`-`)
//     // const normalizedTitle = string.toLowerCase()
//     // const words = normalizedTitle.split(` `)
//     // const slug = words.join(`-`)
// }
// console.log(slugify(`top 10 benfits of react framework`))
// console.log(slugify(`azure static web apps are awesome`))
// console.log(slugify(`technical writing tips for non-native English speackers`))

//TASK - arguments
//инога нужно написать функцию где нельзя понять сразу сколько будет параметров,
//может быть по-разному иногда три иногда 7. Для этого используем аргументс - псевдомассив
//с аргументами не все методы используются но зато число аргументов неважно
// const fn = function (){
//     console.log(arguments)
//     const args = Array.from(arguments)//старый метод псевдомассив сделать полноценным массивом
//     console.log(args)
// }
// fn(1,2,3)
// fn(1,2,3,4,5)
// fn(1,2,3,4,5,6,7)

//современный метод приведения псевдомассива к полноценному массиву
// const fn = function (...args){
//     console.log(args)}

// fn(1,2,3)
// fn(1,2,3,4,5)
// fn(1,2,3,4,5,6,7)

//иногда нужно чтобы какие то аргументы отправились в другой параметр
// const fn = function (a,b, ...args){
//     console.log(`${a} ${b}`)
//     console.log(args)}

// fn(`hello`, 1,2,3)
// fn(`bonjour`,1,2,3,4,5)
// fn(`drasti`,1,2,3,4,5,6,7)

//TASKS  на аргументы
// const add = function(...args){
// console.log(args)
// let total = 0

// for (const arg of args){
//     total+=arg
// }

// return total
// }
// console.log(add(1,2,3))
// console.log(add(1,2,3,4,5,6,7,8,10))

//task 2
const filterNumbers = function (array, ...args) {
  console.log(`array:`, array);
  console.log(`args:`, args);
  const uniquesElements = [];

  for (const element of array) {
    if (args.includes(element)) {
      console.log(`${element} is in both arrays`);
    }
  }

  return uniquesElements;
};

console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
console.log(filterNumbers([10, 15, 24, 30], 23, 30, 18, 15));
console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64));
