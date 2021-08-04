//callback функции- функции которые мы передаем в качестве аргумента
//функция нарезать бутерброт будет функцией высшего порядка так как включает в себя три функции нарезать сыр, колбасу, хлеб

//1example====================
// function highOrder(value, callback) {
//   callback(value);
// }

// highOrder(`hello i'm callback`, setMessage);

// //callback function
// function setMessage(message) {
//   console.log(message);
// }

// //2 example========================
// function toDoMeal(prods, cb) {
//   console.log(prods);
//   let result = cb(prods);
//   console.log(`Your dish - `);
//   console.log(result);
// }
// toDoMeal([`bread`, `meat`], toDoSandwich); //sandwich for you
// toDoMeal([`banana`, `orange`], toDoSandwich); //we have got no bread

// //callback function - в момент когда функция передается как аргумент другой функции - функция тудумил становитсья функией высшего порядка
// function toDoSandwich(arr) {
//   console.log(arr);
//   let bread = arr.includes(`bread`);
//   console.log(bread);
//   return bread ? `sandwich for you` : `we have got no bread`;
// }

//3example======================
// const results = [{ mail: ``, scores: 10 }];
// function getResultsByTests(getMax, getMin, mail, ...scores) {
//   console.log(mail);
//   console.log(scores);
//   //1 доюавляем в базу даннын о тесте
//   let total = 0;
//   for (let i of scores) {
//     total += i;
//   }
//   console.log(total);
//   const obj = { mail: mail, scores: total };
//   results.push(obj);
//   console.log(results);
//   //проверяем обновленные данные с помощью колюеков
//   const scoresArr = [];
//   for (let result of results) {
//     console.log(result.scores);
//     scoresArr.push(result.scores);
//   }
//   console.log(scoresArr);
//   let max = getMax(scoresArr);
//   let min = getMin(scoresArr);
//   console.log(`max`, max);
//   console.log(`min`, min);
// }
// getResultsByTests(
//   getMaxValue,
//   getMinValue,
//   `a@gmail.com`,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1
// );

// //callback getMax
// function getMaxValue(arr) {
//   return Math.max(...arr);
// }
// function getMinValue(arr) {
//   return Math.min(...arr);
// }

//4example ===========================
// let firstNum = 10000;
// const getF = (count, callback) => {
//   let firstNum = 0;
//   let secondNum = 1;
//   const arrayWithValues = [firstNum, secondNum];
//   console.log(arrayWithValues);
//   //получаем массив с числами
//   for (let i = 3; i <= count; i += 1) {
//     let newNum = firstNum + secondNum;
//     console.log(`newNum`, newNum);
//     firstNum = secondNum;
//     secondNum = newNum;
//     arrayWithValues.push(newNum);
//   }
//   console.log(arrayWithValues);
//   // callback(count)

//   console.log(arrayWithValues);
//   let result = callback(arrayWithValues);
//   return result;
//   //   console.log(firstNum);
// };
// getF(18, getEvenValues);
// console.log(`only even numbers`, getF(18, getEvenValues));
// console.log(`sum of the numbers`, getF(18, getSum));
// // console.log(firstNum);
// //callback
// function getEvenValues(arr) {
//   let arrValues = [];
//   for (let num of arr) {
//     if (num % 2 === 0) {
//       arrValues.push(num);
//     }
//   }
//   return;
// }
// function getSum(arr) {
//   let total = 0;
//   for (let i of arr) {
//     total += i;
//   }
//   return total;
// }

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//CALL stack

//LIFO
//7
//6 last in -first out
//5
//4
//3
//2
//1 function execution context
//global/main execution context

function first() {
  console.log(`this is 1 function started`);
  second();
  console.log(`this is 1 function finished`);
}
function second() {
  console.log(`this is 2 function started`);
  third();
  console.log(`this is 2 function finished`);
}
function third() {
  console.log(`this is 3 function started`);
  fourth();
  console.log(`this is 3 function finished`);
}
function forth() {
  console.log(`this is 4 function started`);
  fifth();
  console.log(`this is 4 function finished`);
}
function fifth() {
  console.log(`this is 5 function started`);
  sixth();
  console.log(`this is 5 function finished`);
}
function sixth() {
  console.log(`this is 6 function started`);
  console.log(`this is 6 function finished`);
}

//функция 1 - консоль - функция2 - кнсоль - функция 3 - консоль - функция 4 - консоль
//функция 6 - консоль - консоль2 - консоль2 функции 5 - консоль 2 функции 4 - консоль 2 функции 3
//консоль2 функции 2 - консоль 2 функция 1.
//то есть то что пришло последним вышло первое (LIFO)

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//функции замыкания
// document.getElementById('dec');
// document.getElementById("inc");
document.getElementById("dec").addEventListener("click", () => {
  let count = productCounter.decrement(5);
  document.getElementById("count").textContent = count;
});

// document.getElementById("count").textContent = productCounter.current;
const productCounter = createCounter();

function createCounter() {
  let current = 0;
  function increment(value) {
    return (current += value);
  }
  function decrement(value) {
    if (current <= 0) return;
    return (current -= value);
  }
  return { increment, decrement };
}

function changeColor() {
  let color = "green";
  function getNewColor(value) {
    return (color = value);
  }
  return { getNewColor, resetColor };
  function resetColor() {
    return (color = `green`);
  }
}
const x = changeColor();
let color = x.getNewColor(`black`);
color = x.getNewColor(`blue`);
console.log(color);
color = x.resetColor();
console.log(color);
