//обїект - все что не входит в примитивные значения
//у обьекта родитель конструктор - прототип
// console.log({});
// const obj = {
//   //property (key:value,) - свойство
//   prop_a: `A`,
//   prop_b: `B`,
//   prop_c: 2,
//   prop_d: null,
//   prop_e: true,
//   name: `Sandra`,
//   age: 33,
//   isOnline: false,
//   isStudent: true,
//   skills: [`html`, `css`],
//   music: {
//     bands: [`9-01`],
//     songs: [`zfkgmnmf`],
//   },

//   //методы!!!!
//   //ES5-2009-2015
//   // showName1:function(){
//   //     console.log(`bonjour`)
//   // }

//   //ES6 -2015
//   showName() {
//     console.log(`bonjour`);
//   },
// };
// console.log(obj);

// //способы полчить свойства объектов
// //получаем свойсвто объекта
// // console.log(`name`, obj.name);
// // //либо так
// // console.log(obj["age"]);
// // console.log(obj["skills"]);
// // console.log(obj[`music`]);
// // obj.showName();
// //итак научились создать обьект через литерад {} и добавлять свуойства, так же
// // научились объявлять методы по страому и новому способу - используем только новый))
// console.log(obj.age);
// obj.age = 18;
// console.log(obj.age);
// console.log(obj.languages);
// obj.languages = [`russian`, `francais`, `ukraine`];
// console.log(obj.languages);

// //delete - ооооочень редко используется, и лучше не использовать
// delete obj.age;
// console.log(obj.age);
// console.log(obj); //нет юольше ейдж :(
// //
// //ПЛЮШКИ  объектов

// //короткая запись
// let age = 33;
// console.log(age);

// //если имя ключа = имя значения то указываем только имя ключа через запятую

// let skills = [`html`, `css`];
// console.log(skills);

// const myUser = {
//   age,
//   skills,
// };
// console.log(myUser);

// //вычисляемые переменные

// let key1 = `name`;
// let key2 = `lastName`;
// let key3 = `skills`;

// const nextUser = {
//   [key1]: `user`,
// };

// console.log(nextUser);

// //for in - лучше не использовать достает значение родителя если нет у самого

// for (let prop in nextUser) {
//   console.log(`key`, prop);
// }

// const product = {
//   price: 10,
// };

// console.log(product);
// const newProduct = Object.create(product);
// console.log(newProduct);

// newProduct.price = 100;

// for (let key in newProduct) {
//   console.log(key);
//   console.log(newProduct[key]);
// }
//newProduce - от папы доступно свойство прайс, а сам он пустой пока

// const newNewProd = Object.create(newProduct);
// newNewProd.title = `product`;
// for (let key in newNewProd) {
//   //   console.log(key);
//   //   console.log(newNewProd[key]);

//   if (newNewProd.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(newNewProd[key]);
//   }
// }
// console.log(newNewProd.hasOwnProperty(`product`));

//objects.keys(obj) - массив ключей
//Objects.values(obj) - массив значений
//Objects.entries - многомерный массив
const obj = {
  //property (key:value,) - свойство
  prop_a: `A`,
  prop_b: `B`,
  prop_c: 2,
  prop_d: null,
  prop_e: true,
  name: `Sandra`,
  age: 33,
  isOnline: false,
  isStudent: true,
  skills: [`html`, `css`],
  music: {
    bands: [`9-01`],
    songs: [`zfkgmnmf`],
  },
};
const myKeys = Object.keys(obj);
console.log(myKeys);
console.log(myKeys[0]);

console.log(obj[myKeys[0]]);

const myValues = Object.values(obj);
console.log(myValues);
const prod = {
  count: 2,
  price: 10,
};

const vals = Object.values(prod);
console.log(vals);

const totalPrice = vals[0] * vals[1];
console.log(totalPrice);

//entries

const myEntries = Object.entries(prod);
console.log(myEntries);

//this - когад нужно обратиться к свойству этого же

let nickName = `blablabla`;
const user = {
  nickName: `Super user`,
  showUserName() {
    return `hello ${this.nickName}`; //если не использовать зис то выведет блаблабла
  },
};
console.log(user.showUserName());
