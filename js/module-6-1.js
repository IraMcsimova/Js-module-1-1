// let myName = `Ira`;
// console.log(myName);
// function changeValue(value) {
//   return (myName = value);
// }
// changeValue(`igor`);
// console.log(myName);

// //================
// const scores = [13, 12, 14, 15, 16];
// function getBestResult(results) {
//   return (results = Math.max(...results));
// }
// console.log(getBestResult(scores));
// console.log(scores);

// //функция которая работает с переменной обьявденной за рамками себя - называется мутирующими

// const numbers = [1, 2, 3, 4, 5];
// function updateArray(arr) {
//   for (let i = 0; i < arr.length; i += 1) {
//     arr[i] += 1;
//   }
//   return arr;
// }
// console.log(updateArray(numbers));

// //функциональные методы массивов
// Array.mathod(callback);
// callback = () => {};

//array.method((elem, index, array)=>{}) - тот же колбек но по другому записан

//array.forEach()=>undefined
//array.map ()=>всегда массив той же длины что и исходящий
//array.filter()=> всегда массив но только тех элементов что подошли под условие
//array.find()=>только 1 элемент массива, ПЕРВЫЙ который подойдет, дальше искать даже не будет
//array.reduce()=>все что угодно, как сплайс
//array.every()=> true || false, вернет фолс когда хотя бі один н пршел проверку
//array.some() => true || false (вернет тру если хотя б одно подходит под условие)

//array.sort()

//=============================================================

//ПРИМЕРЫ

//forEach

// const newArr = [];
// const numbers = [1, 2, 3, 4, 5];
// const forEachResult = numbers.forEach((num) => {
//   newArr.push(num + 1); //работает
//   //   console.log(num);
//   //   return num; //undefined
// });
// console.log(forEachResult);
// //forEach ничего не возвращает! только андефанд
// console.log(newArr);

const newArr = [];
const numbers = [1, 2, 3, 4, 5];
const forEachResult = numbers.forEach((num) => {
  newArr.push(num + 1);
});
console.log(forEachResult);
console.log(newArr);

// //map
// const mapResult = numbers.map((item) => {
//   console.log(item);
//   return item;
// });
// console.log(mapResult); //впока в теле функции нет какого действия - массив андейфандов
// console.log(numbers);

//map
const mapResult = numbers.map((item) => item + 1);
console.log(mapResult); //впока в теле функции нет какого действия - массив андейфандов
console.log(numbers);

//filter

// const filterResult = numbers.filter((elem) => {
//   const condition = elem > 2 && elem < 5;
//   return condition;
// });

// console.log(filterResult);

const filterResult = numbers.filter((elem) => elem > 2 && elem < 5);

console.log(filterResult);
// //find

// const findResult = numbers.find((i) => {
//   return i > 2 && i < 5;
// });
// console.log(findResult);

//reduce
//здесь появляется еще один параметр, аккумулятор и после т
//функции мі должны обознчить начальное значение этого аккумулятора
// const reduceResultArray = numbers.reduce((acc, elem) => {
//   console.log(acc, elem);
//   //пока что аккумулятор - андефайнд
//   //   return acc;//пустой массив
//   //   acc.push(elem);
//   acc.push(elem + ``);
//   return acc;
// }, []);
// console.log(reduceResultArray); //новый массив
// console.log(reduceResultArray === numbers); //false - это разные массивы, редбюс сделал новую ячейку

// const reduceResultObject = numbers.reduce((newObject, number) => {
//   //   console.log(newObject, number);
//   //   return newObject;
//   // }, {});
//   // console.log(reduceResultObject); //пкоа пустой новый обьект (аккумулятор)
//   newObject[number] = number;
//   return newObject;
// }, {});
// console.log(reduceResultObject);

// const reduceResultNumber = numbers.reduce((total, num) => {
//   console.log(total, num);
//   total += num;
//   return total;
// }, 0);
// console.log(reduceResultNumber);

const reduceResultNumber = numbers.reduce((total, num) => (total += num), 0);
console.log(reduceResultNumber);

//every
// const everyResult = numbers.every((elem) => {
//   console.log(elem); //возвращает только один потом что уже первый элемент не прошел проверку дальше не проверяет
//   return elem > 1;
// });
// console.log(everyResult);
const everyResult = numbers.every((elem) => elem > 1);
console.log(everyResult);

//some
const someResult = numbers.some((elem) => {
  console.log(elem);
  return elem > 3; //проверит все элементы и если хотяб один подходит вернет тру
});
console.log(someResult);

//sort
const fruit = [`banana`, `oranges`, `apples`];
const sortFruits = fruit.sort();
console.log(sortFruits); //сортирует по алфавиту
console.log(fruit);
console.log(fruit === sortFruits); //массивы одинаковы, метод сорт мутирует исхожный массив

const ages = [54, 32, 33, 44, 57, -23, 100];
// const sortAges = ages.sort();
// console.log(sortAges); //сортирует от меньше к большему,однако сотня лезет не туда
//для того чтобі 100 влезло туда куда надо надо передать параметрі
const sortAges = ages.sort((min, max) => {
  //   return min - max;//массив чисел от меньшего к большему с правильной расстановкрй 100
  return max - min;
});
console.log(sortAges);

//цепочки методов
const students = [
  { name: `philip`, age: 21, gender: `male` },
  { name: `Margo`, age: 27, gender: `female` },
  { name: `Oleg`, age: 45, gender: `male` },
  { name: `Hanna`, age: 33, gender: `female` },
  { name: `Oleksij`, age: 32, gender: `male` },
];
// const result1 = students
//   .filter((students) => students.gender === `female`)
//   .map((girl) => girl.name)
//   .sort();
// console.log(result1);

// const result2 = students.sort((a, b) => a.age - b.age)[0];
// console.log(result2);

// const result3 = students.sort((a, b) => b.age - a.age)[0];
// console.log(result3);

const reult4 = students.reduce((acc, elem) => {
  //   console.log((acc += elem.age)); //сумма возрастов
  console.log((acc += elem.age / Array.length));
  return acc;
}, 0);
