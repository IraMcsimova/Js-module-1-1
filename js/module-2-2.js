// //объявление(создание) функции
// //Function expression
// const myFunc = function (param1,param2)//объявляю переменную с параметрами и телом 
// //param1 - локальная переменная доступна только внутри фигурных скоб
// {
//     // console.log(`"This is funcstring with ${param1} and ${param2}`)
//     // console.log(param1,param2)
// }

// //вызов функций
// myFunc('hello', 'baby')

// //function declaration
// function myFuncDecl(param){
//     // console.log('THis is declarative note')
// }
// //вызов функций
// myFuncDecl()

// //Arrow function-ES6 - стрелочная функция
// const myArrowFunc = (param1) => {
//     // console.log ('This is arrow function')
// }
// //вызов функций
// myArrowFunc()

// // в чем разница между этими функциями?
// //експрешн - нельзя вызвать функцию до ее инициализации
// //декларейшн -можно вызвать до ее инициализации область вилимости - общая поэтому переменная находится вызовом функции
// //стрелочная - нельзя вызвать так же (так как обявлены как и експрешн через конст)
// function toSayHello(userName = 'user')// - uesr задано как дефолтный параметр, который подставится в случае если значения не передали
// {
// // alert(`${userName}, nice to meet you`)
// console.log(`${userName}, nice to meet you`)
// }
// toSayHello('ira')

// function showInfo (userName,userAge){
//     console.log(`hello,my name is ${userName} i\'m ${userAge}`)
// }
// showInfo('ira',33)

// function getResult(){
// console.log(arguments)//аргументс - псевдомассив
// for (let elem of arguments){
//     console.log(elem)
// }
// // arguments.push(1)// пуш это метод массива но не псевдомассива!!!
// //преобразование псевдомассива в полноценныймассив
// const myArgs = Array.from(arguments)
// console.log(myArgs)
// myArgs.push(5)
// console.log(myArgs)
// }
// getResult(0,1)
// //стрелочная функция не знает что такое аргументс, по-єтому аргументс доступен тьолько для декларейшн и експрешн функций

// const getArrayRes = (...allParams) => //... - три точки - оператор рест который в стрелочной функции превращает псевдоелем в настояший плоноценный
// {
//     // console.log(arguments)
//     console.log(allParams)
// }
// getArrayRes(1,2,3,4,5)

// //Guard Clause
// function getValue(array,value){
// console.log(array)
// for (let i = 0; i<array.length; i+=1){
//     console.log(`${i+1}`)
//       if (array[i]===value){
//           return console.log(`Value ${value} is in array`)
       
//     }
//         return (`Value ${value} is not in array`)
// }}

//     let result = getValue([1,2,3,4,5,6,7], 5)
// console.log(result)
// result = getValue([1,2,3,4,5,6,7], 8)
// console.log(result)

// function getSpam(text,words){
//     // console.log(words)
//     let i =1
//     for (let word of words){
//         i+=1
//         console.log(word, i)
//         if (text.includes(word)) return 'spammmm'
//     }
//     return text
// }
// const arr = ['voluptatum','official']
// let value = ';jkln, zsef ,zfffd,tytyty,asasasas'
// console.log (getSpam (value,arr))

// function checkYear(year)
// {let condition = year%4===0
// if (condition) {return   `${yer} vysokosnyi`}
// return `${year} not vysokosnyi`}
// console.log(checkYear(1768))

//2
function game(){
    let comp = Math.ceil(Math.random()*(10-1)+1)
console.log(comp)
let user = prompt('enter the number from 1 till 10')
console.log(comp, user)
if(comp==user)
return 'you win'
return 'you lose'}
console.log(game())

//3
