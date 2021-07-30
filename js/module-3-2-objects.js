//деструктуризация

//особо не нужна дуструктуризация примитива
// const product = {
//   title: `mask`,
//   price: 100,
//   values: [`50ml`, `30ml`],
// };
// const { title: myTitle } = product;
// console.log(myTitle);

// // console.log(product);
// function showTitle(name) {
//   console.log(`this product is ${name}`);
// }
// showTitle(`Parfum`);
// console.log(product.title)

// const product = {
//   parfums: {
//     male: {
//       title: `More`,
//       name: `Dior`,
//       price: 5000,
//     },
//     female: [
//       {
//         title: `Jadore`,
//         name: `Dior`,
//         price: 3000,
//       },
//     ],
//   },
//   masks: {
//     wet: `dry skin`,
//     dry: `for fat skin`,
//   },
// };
// console.log(product);

// const { masks } = product;
// console.log(masks);

// const { masks: productMasks } = product;
// console.log(productMasks);

// const user = {
//   login: `nickname`,
//   pass: `lkjhjhljhbjh`,
//   userInfo: {
//     email: `ilisay777@gmail.com`,
//     phone: `000-000-00-00`,
//   },
// };
// function sayHello(name) {
//   alert(`${name} hello`);
// }
// const { login } = user;
// // sayHello(login);
// // console.log(user);

// const rgb = [255, 99, 45];
// console.log(rgb);

// const [red, , blue] = rgb;
// console.log(`red`, red, blue);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 84];
// console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 84));
// console.log(Math.max(numbers)); //NaN это массив, оператор не ожидает массив поэтому используем спреад, он рассеет массив и высыпет все значения как аргументы
// console.log(Math.max(...numbers));
// console.log(Math.min(...numbers));

// function getResult(a, b) {
//   let total = 0;
//   console.log(arguments); //псевдомассив
//   const nums = [...arguments]; //полноценный массив
//   for (let num of nums) {
//     total += num;
//   }
//   console.log(nums);
//   return total;
// }
// console.log(getResult(2, 5, 4, 6, 7));

// const first = [1, 2, 3];
// const cloneFirst = first.slice();
// console.log(`cloneFirst`, cloneFirst);
// console.log(first === cloneFirst);

// const newArr = first.concat(cloneFirst);
// console.log(newArr);

//SPREAD + SLICE() массива
// const spreadArr = [...first, ...first.slice(1, 2), 777];
// console.log(spreadArr);

//SPREAD объекта
// const product = {
//   title: `cake`,
//   name: `Napoleon`,
// };
// console.log(product);
// const params = {
//   category: `sweets`,
// };

// const newProduct = { ...product, price: 30, cream: `chocolate`, ...params };
// console.log(newProduct);

// const getTotalResult = (...args) => {
//   console.log(args);
//   let total = 0;
//   for (let num of args) {
//     total += num;
//   }
//   return total;
// };
// let result = getTotalResult(23, 45, 27, 23, 25, 26, 14, 50);
// console.log(result);

//(email, arg1, ...for, arg)
// const scoresOfStudents = [];
// function getResultsOfTests(mail, ...scores) {
//   console.log(args);
//   console.log(mail);
//   let totalScores = 0;
//   for (let score of scores) {
//     console.log(score);
//     totalScores += score;
//   }
//   const obj = {
//     email: mail,
//     score: totalScores,
//   };
//     console.log(obj);
//     scoresOfStudents.push(obj);
// }

// console.log(scoresOfStudents);
//   console.log(totalScores);
//   console.log(scoresOfStudents);

// getResultsOfTests(`ilisay777@gmail.com, 1,0,1,0,1,1,1,1,1,0,0,0`);
// getResultsOfTests(`ilisay777@gmail.com, 1,0,1,0,1,0,1,0,0,0`);
// getResultsOfTests(`ilisay777@gmail.com, 1,0,1,0,1,1,1,1,1,0,0,0`);
// getResultsOfTests(`ilisay777@gmail.com, 1,0,1,0,1,1,1,1,1,0,0,0`);
// getResultsOfTests(`ilisay777@gmail.com, 1,0,1,0,1,0,1,1,1,0,0,0`);

//TASKS

//TASK1 - добавляес методы объекту как свойства
// const product = {
//   name: ``,
//   price: 0,
//   quantity: 0,
//   showName() {
//     console.log(this.name);
//   },
//   showPrice() {
//     console.log(this.price);
//   },
//   showQuantity() {
//     console.log(this.quantity);
//   },
//   changeName(value) {
//     return (this.name = value);
//   },
//   changePrice(value) {
//     return (this.price = value);
//   },
//   changeQuantity(value) {
//     return (this.quantity = value);
//   },
//   updateQuantity(value, isCost) {
//     isCost ? (this.quantity -= value) : (this.quantity += value);
//   },
// };

// product.showName();
// product.showPrice();
// product.showQuantity();
// product.changeName(`peach`);
// product.changeName(55);
// product.changeQuantity(3);
// console.log(product);
// product.updateQuantity(1, true);
// product.showQuantity();
// product.updateQuantity(1, true);
// product.showQuantity();
// product.updateQuantity(0.5, false);
// product.showQuantity();

// product.getTotalPrice = function () {
//   return this.price * this.quantity;
// };

// console.log(product.getTotalPrice());

//TASK3
// const products = [
//   { name: `apple`, price: 50, quantity: 2 },
//   { name: `orange`, price: 60, quantity: 2 },
//   { name: `banana`, price: 100, quantity: 2 },
//   { name: `melon`, price: 150, quantity: 2 },
// ];
// let totalPrice = 0;
// for (let i = 0; i < products.length; i += 1) {
//   console.log(products[i]);
//   totalPrice += products[i].price * products[i].quantity;
// }
// console.log(totalPrice);

//TASK 4
const allProducts = [
  { name: `apple`, price: 50, quantity: 2 },
  { name: `orange`, price: 60, quantity: 2 },
  { name: `banana`, price: 100, quantity: 2 },
  { name: `melon`, price: 150, quantity: 2 },
];
function getResponse(arr, prod, count) {
  //   console.log(arr);
  for (let product of arr) {
    console.log(product.name);
    const { name } = allProducts;
    if (product.name === prod) {
      console.log(`${prod} is in the market`);
      product.quantity >= count
        ? console.log(`you can buy`)
        : console.log(`you can not buy`);
    }
  }
  console.log(`there are no units`);
}
getResponse(allProducts, `lawazza`, 33);
getResponse(allProducts, `banana`, 33);
getResponse(allProducts, `lawazza`, 33);
