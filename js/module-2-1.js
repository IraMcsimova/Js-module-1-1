//массив - єто проиндексированная послежовательность єлемента
// массив создается [] кавычками. String - (), Number (), Array[]
//элементы в массиве перечисляются через запятую
// console.log([1,2])// 2 - длина массива
//[]через квадратные скобки мы задали литерал, через круглые создаем объект
// const array = [1,2,3,4,5,6,7]
// console.log(array.length) //длина массива


// const array = [1,2,3,4,5,6,7, 'JavaScript', 8,9,10]
// console.log(array)
// console.log(array.length)
// console.log(array[0])
// console.log(array[7])
// //так мы вызываем одно из значений массива, помним отсчет ведется с 0!!!!

// array[0] = `I love Js`
// // console.log(array[0])
// // //так мы можем изменить значение массива

// delete array[1]
// console.log(array[1])
// //так мы можем удалить значение в массиве - вырезали индексы, не очень хорошая практика
// array[1]=`html`
// console.log(array[1])
//add elem by index


// //break and continue
// for (let i = 0; i<array.length; i+=1){
   
//     if (typeof array[i] === 'string'){
//         continue
//         //break
//     }
//     console.log(`итерация - ${i+1}`, array[i])
//     //итерация 1 = array [0] - IloveJs
//     //итерация 2 = array [1] - 2
//     //итерация 3 = array [2] - 3
//     //и т.д.
// }

// for (let i = 0; i<array.length; i+=1){
   
//     if (typeof array[i] === 'string'){
//         continue
//         //break
//     }}
//     const multiArray = [[1,1], [2,2], [3,3]]
//     console.log(multiArray.length)
//     console.log(multiArray[0])
 
//     const multiArray = [
//     [1,10,100,1000], 
//     [2,20,200,2000], 
//     [3,30,300,3000]
// ]
//     //for of - не надо использовать ( впримерах потому что быстрее)
//    let it=1
//     for (let zzz of multiArray){
//         console.log(`iteration - ${it}`, zzz)
//     it+=1
// for (let xxx of zzz)
// {console.log(`xxx`, xxx+1)}}


//все примитивы присваиваются по принципу ксерокопии с паспорта
//с массивами - все не так

// let age = 30;
// console.log(`age`, age)
// let myAge = age;
// console.log (`myAge`, myAge)
// console.log(age===myAge)
// age=31
// console.log(`age`, age)

// console.log (`myAge`, myAge)
// console.log(age===myAge)

const numbers = [12,23,34,45]
// console.log(`numbers`, numbers)

const myNumbers = numbers
// console.log(`myNumbers`, myNumbers)
numbers[0] = 100500
// console.log(`numbers`, numbers)
// console.log(`myNumbers`, myNumbers)
//numbers - реальная переменная со значением, а myNumbers - просто ссылка на переменную numbers, myNumbers - не ксерокс
// console.log(`numbers`, numbers)

// метод Slice
const mySliceNumbers = numbers.slice()
// console.log(`mySliceNumbers`,mySliceNumbers )
// console.log(numbers===mySliceNumbers)//false

numbers[0] = 12
// console.log(`numbers`, numbers)
// console.log(`myNumbers`, myNumbers)
//numbers - реальная переменная со значением, а myNumbers - просто ссылка на переменную numbers, myNumbers - не ксерокс
// console.log(`numbers`, numbers)

// console.log(`mySliceNumbers`,mySliceNumbers )
// console.log(numbers===mySliceNumbers)//false
const firstTwoElems = numbers.slice(0,2) // в слайсе указіваем с...до (не включая)
// console.log(`firstTwoElems`, firstTwoElems)

//split - разбивает строку на массив
let myString = 'my String'
console.log(typeof myString, myString)
console.log(myString[0])
console.log(myString[1])
console.log(myString[2])
console.log(myString[3])
console.log(myString[4])
console.log(myString[5])
console.log(myString[6])
console.log(myString[7])
console.log(myString[8])

const arrayFromString1 = myString.split(' ')
console.log(arrayFromString1)

const arrayFromString2 = myString.split('')
console.log(arrayFromString2)

const arrayFromString3 = myString.split('s')
console.log(arrayFromString3)

const arrayFromString4 = myString.split('S')
console.log(arrayFromString4)
//сплит строку разбивает на массив элементов, примеры выше

//join - делает массив в строку
const myArray = ['I','love','javascript' ]
console.log(myArray.length)

let arrayToString1 = myArray.join(' ')
console.log (arrayToString1)

let arrayToString2 = myArray.join ("---")
console.log (arrayToString2)

//indexOf() & includes()

// push - добавляет ТОЛЬКО в конец
// pop - удаляет в конце один элемент
// shift - удаляет вначале один элемент
// unshift -добавляет ТОЛЬКО вначало

const exampleArray = [1,2,3,4,5,6,7]
console.log(exampleArray)
const unshiftElem = exampleArray.unshift(0)
console.log(unshiftElem)//длина массива
console.log(exampleArray)

const pushElem = exampleArray.push(8 ,9, 10)
console.log(pushElem)// длина массива
console.log(exampleArray)

const shiftElem = exampleArray.shift()
console.log (shiftElem)//всегда удалит первый елемент массива
console.log(exampleArray)

const popElem = exampleArray.pop()
console.log(popElem)//всегда удаляет последний элемент массива
console.log(exampleArray)

exampleArray.splice(1, 1)//первій индекс массива с которого начинается действие, второй - сколько удаляем
console.log (exampleArray)

let deleteSplice = exampleArray.splice(1,1)
console.log(deleteSplice)
console.log(exampleArray)

let addSplice = exampleArray.splice(0,0,'I','love', 'Js') // 0, 0 потому что мы ничего не удлаяем
console.log(addSplice) //ничего не изменилось, мы не  удаляли ничгего
console.log(exampleArray) //доюавили новые елементы может быть от 1 до бесконечности

//replace - замена индекса cначала то что удаляем потом то что доюавляем
let replaceSplice = exampleArray.splice(7,3, 'react','Node')

console.log(replaceSplice)
console.log(exampleArray)

//concat - обединени нескольких массивов
const firstPiece = [1,2]
console.log(firstPiece)
const secondPiece = [3,4]
console.log(secondPiece)
const thirdPiece = [5,6]
console.log(thirdPiece)

const fullArray = firstPiece.concat(secondPiece, thirdPiece)
console.log(fullArray)