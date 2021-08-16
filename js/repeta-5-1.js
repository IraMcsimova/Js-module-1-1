// const objC = {
//   z: 5,
// };
// console.log(objC);

// //а я хочу получить objA.y - но у этого обьекта нет данного свойства - будет андейфанд
// //prototype - резервное зранилише свойств, методов
// //у каждого обьекта есть свойство __прото__ оно ссылается на главное хранилише всех свойств
// //пусть прототипом для обьекта  А будет обьект Б
// //мы можем задавать прототип самостоятельно
// //но не может быть так что у обьекта А ссылка на прототип и обьекта б и С - только один!

// const objB = Object.create(objC);
// objB.y = 2;
// console.log(objC);
// console.log(objB);
// console.log(objB.y);
// console.log(objB.z);

// const objA = Object.create(objB);
// objA.x = 1;
// console.log(`objA:`, objA);
// //в обьекте А есть целая цепочка прототипов, А - Б - С
// objA.z = 1000;
// console.log(objA);
// console.log(objA.hasOwnProperty(`x`));

//

//поиск начинается с собственных свойств
//если нет в собственных поиск переходит к цепочке прототипов, до первого совпадения!!

//===============================================================

//КЛАСС - заготовка на базе которой будет создаваться наша машина
//ЭКЗЕМПЛЯР - машина, когда по схеме (классу) уже сделана машина, набор характеристик разныхх экземпляров - одинаков
//а вот значения этих свойств могут быть разными (чреные стекла или прозрачные)
//ИНТЕРФЕЙС - набор доступных свойств и методов

//Функции-конструкторы
//в JS только функция конструктор называется с БОЛЬШОЙ буквы
//называется с БОЛЬШОЙ буквы и она не отвечает на вопрос что сделает а просто - существительное

// const Car = function () {};

// const myCar = new Car();
//оператор new - создай новую машину
//так вызывается новый экземпляр сделанный по характеристикам класса
//если функция вызывается через нью - гдето там под капотом создается пустой обьект
//функция-конструктор вызывается в контексте созданного пустого обьекта
// const Car = function (value) {

//   console.log(this);
//   this.a = value;
// };

// const myCar = new Car(4);
// console.log(myCar);
// const myCar2 = new Car(45);
// console.log(myCar2);

// const Car = function (brand, model, price) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };

// const myCar = new Car({
//   brand: `Audi`,
//   model: `q3`,
//   price: 78999,
// });
// console.log(myCar);

//(config ={}) - принимаем как аргумент параметры по умолчанию
// const Car = function (config = {}) {
//   this.brand = config.brand;
//   this.model = config.model;
//   this.price = config.price;

//можем деструктуризировать
// const Car = function ({ brand, model, price } = {}) {
//   //const {brand, model, price } = config - а можно сразу в аргументы записать, как сделано выше
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };
// console.log(Car.prototype);
// Car.prototype.sayHi = function () {
//   console.log(`this`, this);
//   console.log(`hello`);
// };
// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };

// const myCar = new Car({
//   brand: `Audi`,
//   model: `q3`,
//   price: 78999,
// });
// console.log(myCar);
// myCar.sayHi();
// myCar.changePrice(765432765432);
// console.log(myCar);
// const myCar2 = new Car({
//   brand: `BMV`,
//   model: `u78re`,
//   price: 7654,
// });
// console.log(myCar2);
// myCar2.sayHi();
// const myCar3 = new Car({
//   brand: `lexusi`,
//   model: `tre`,
//   price: 765439,
// });
// console.log(myCar3);
// myCar3.sayHi();
//у каждой функции есть свойство прототайп!!!
//вызывается пустой обьект, добюавлят

//у обьектов - свойство прото
//а прототайп есть  только у функций!!!! у каждрой функции по умолчанию!!!

// const User = function ({ email, password } = {}) {
//   this.email = email;
//   this.password = password;
// };
// User.prototype.changeEmail = function (newEmail) {
//   this.mail = newEmail;
// };
// const mango = new User({ email: `mango@gmail.com`, password: `trwetrewq` });
// mango.changeEmail(`new-newemail`);
// console.log(mango);
//создал конструктор
//напихал методов
//сделал экземпляр

//ИТОГИ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//у каждого обьекта есть свойство - __proto__
// у этого свойства есть ссылка на его prototype - то есть на другой обьект
//при создании литерала (обьекта массива функции) в свойство __proto__ просто записывается ссылка на прототайп
//функция-конструктор - это просто функция просто она называется  большой буквы
//всю магию функции-конструктор делает оператор new
//если функция вызывается через нью создается пустой обьект где-то в памяти
//функция-констурктор вызывается в контексте вот этого пустого обьекта, то есть ее this ссылается на тот пустой обьект
//за на под капотом в свойство прото этого обьекта новосозданного записывается ссылка на обьект функция_прототайп
//ссылка на обьект р=возвращается в место вызова new функция()

// const objA = {
//   x: 1,
// };

// console.log(objA.__proto__ === Object.prototype);

//СТАТИЧЕСКИЕ СВОЙСТВА или МЕТОДЫ
//те которые не через прототип, они есть только в этом обьекте
//нужны для констант,

User.logInfo = function (obj) {
  console.log(obj);
};
User.logInfo(mango);
