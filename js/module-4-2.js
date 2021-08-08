// const user = {
//   name: `Sandra`,
//   showName() {
//     console.log(this.name);
//   },
// };
// user.showName();
// console.log(this);

//GLOBAL==========================================
//this with `use strict` || type = module - выводит в консоль как андефайнд
//но если убрать юз стрикт и тайп модул то выведет глобальную область видимости - виндов
// console.log(this)
// function showThis(){
//     console.log(this)
// }
// showThis()

// showThisDecl(){

//     const showThisExpr = function(){
//         console.log(this)
//     }
// }
// showThisExpr()

// const showThisArrow = () => {
//   console.log(this);
// };
// showThisArrow();

// const user = {
//   name: `Sandra`,
//   showName() {
//     console.log(this.name);
//     const showAge = () => {
//       console.log(this.age);
//     };
//     showAge();
//   },
// };
// user.showName();
// console.log(user);

// //использование метода одного обьекта в другом обьекте

// const newUser = {
//   name: `VOva`,
//   age: 22,
// };
// user.showName.call(newUser);

// const bestUser = {
//   name: `Sara`,
//   age: 18,
// };
// user.showName.apply(bestUser);

// //отличие кол и еплай. отличаются тем как передаются аргументы после вызова
// //apply всегда ожидает в аргументы обьект и массив
// function toSayHello(manager, group) {
//   console.log(
//     `${this.name}, we are glad to see you! I am ${manager}, your manager. Your group is ${group}`
//   );
// }
// toSayHello.call(bestUser, `Petro`, 37);
// toSayHello.apply(newUser, [`petro`, 37]);
// let manager = `petro`;
// let group = 37;
// toSayHello.call(bestUser, manager, group);

// const data = [manager, group];
// toSayHello.apply(newUser, data);

// //BIND - прибить
// const product = {
//   name: `banana`,
//   price: 25,
//   changePrice(value) {
//     return (this.price = value);
//   },
// };

// const fruit1 = {
//   name: `ananas`,
//   price: 50,
// };
// function showProduct(product, callback) {
//   let price = callback();
//   console.log(`${product} costs ${price} now`);
// }
// showProduct(`Orange`, product.changePrice.bind(product, 77));
// showProduct(`Fruit1`, product.changePrice.bind(fruit1, 99));

//call apply - аргумент методы моментального вызова функции
//bind - создает копию ссылки потом вызывается когда передается колбеку

//ЗАДАЧИ

//1==============================================================================
// function every(array, callback) {
//   const results = [];
//   for (let elem of array) {
//     let condition = callback(elem);
//     // console.log(condition);
//     results.push(condition);
//   }
//   console.log(results);
//   if (results.includes(false)) {
//     return false;
//   } else {
//     return true;
//   }
// }
// let result = every([1, 11, 111, 2, 22, 33], getLessThenTen);
// console.log(result);

// result = every([1, 2, 3, 4, 5, 6], getLessThenTen);
// console.log(result);

// function getLessThenTen(number) {
//   return number < 10 ? true : false;
// }

// function getMoreThenTen(number) {
//   return number > 10 ? true : false;
// }
// result = every([1, 2, 3, 23, 5], getMoreThenTen);
// console.log(result);

// result = every([21, 32, 63, 123, 55], getMoreThenTen);
// console.log(result);

//2================================================================================
// function compact(array, callback) {
//   const newArray = [];
//   for (let value of array) {
//     console.log(Boolean(value));
//     // if (Boolean(value)) newArray.push(value);
//     callback(value, newArray);
//   }

//   return newArray;
// }

// function getFalsyValues(element, falsyValues) {
//   if (!Boolean(element)) falsyValues.push(element);
// }
// function getNotFalsyValues(element, trueValues) {
//   if (Boolean(element)) trueValues.push(element);
// }

// // console.log(compact([1, 2, ``, null, `hello`]));
// // console.log(compact([Infinity, `  `, {}, []]));
// console.log(compact([1, 0, ``, null, `hello`], getFalsyValues));
// console.log(compact([1, 0, ``, null, `hello`], getNotFalsyValues));

//3===============================================================================
const orderA = [
  { name: `Phone`, deliveryProgress: 50, type: 0 },
  { name: `TV`, deliveryProgress: 100, type: 1 },
  { name: `Laptop`, deliveryProgress: null, type: 2 },
];

const orderB = [];
function showDeliveryStatus(array) {
  let message;
  let progress;
  const results = [];
  for (let order of array) {
    //   let progress;
    // console.log(order);
    // console.log(order.deliveryProgress);
    // let { deliveryProgress: progress } = order;
    progress = order.deliveryProgress;

    if (progress === 100) {
      message = `done`;
      results.push(message);
    } else if (progress <= 99) {
      message = `in progress`;
      results.push(message);
    } else if (progress === null) {
      message = `ready to delivery`;
      results.push(message);
    } else {
      message = `not ordered`;
      results.push(message);
    }
  }
  return results.join(` , `);
  //if progress 100
  // if progress <100

  //   console.log(`object`);
}
console.log(showDeliveryStatus(orderA));
