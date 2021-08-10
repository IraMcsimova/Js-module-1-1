//this======================================
//локальная переменная которая есть у каждой функции
//одна из самых важных концепций языкка
//находится внутри любой (каждой функции)
// console.log(`[]===[]:`, [] === []);
// console.log(`{}==={}:`, {} === {});
// console.log(`function (){}===function(){}:`, function () {} === function () {});
//функция - єто обьект и она передается по ссылке, то есть выше наипсанное сравнение - все фолс
//но! если создать другую переменную которая равна первой - то они будут трушные, потому что передатеся ссылка на обьект!!! не сам обьект!
//ИТАК как вычислить где нужен ЗИС
//1. нНЕВАЖНО где и как обьявлена функция
//2. ЗИС записывается именно во время вызова функции!!!

//пример один метод обьекта
// const user = {
//   tag: `mango`,
//   showTag() {
//     console.log(`showTag - > this`, this);
//   },
// };
// user.showTag();
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//слева от вызова функции стоит обьект в контексте которого она вызывается

//пример два - когда зис вызывается без обьекта слева
// const foo = function () {
//   console.log(`foo->this`, this);
// };
// foo();
//если функция вызывается в строгом режиме, то в консоли покажется андефайнд (никто меня н е вызывает, слева никого нет)
//но если убрать модуль или юз стрикт зис будет отконсолен как ВИНДОВ, то есть его вызвали в глобальном обьекте - ВИНДОВ

//пример три зис вызывается внешней функцией
// const showTag = function () {
//   console.log(`showTag - > this`, this);
//   console.log(`showTag - > this.tag`, this.tag);
// };

// const user = {
//   tag: `mango`,
// };
// user.showUserTag = showTag;
// console.log(`user:`, user);
// user.showUserTag();

//this определяется в момент вызова функции, в данном случае так как функция с зис вызвана в контексте обекта юзер
//то есть тем кто стоит слева от вызова функции
//НЕ ВАЖНО где ты обьявил функцию, ВАЖНО где функция обьявдена!!!!!!!!!!!!!!!!!!!!!

//пример 4

// const user = {
//   tag: `mango`,
//   showTag() {
//     console.log(`showTag - > this`, this);
//     console.log(`showTag - > this.tag`, this.tag);
//   },
// };
// user.showTag();

// const outerShowTag = user.showTag;
// outerShowTag();
//в таком вызове зис будет андефайнд так как слева ничего не стоит

//пример 5

// const user = {
//   tag: `mango`,
//   showTag() {
//     console.log(`showTag - > this`, this);
//     console.log(`showTag - > this.tag`, this.tag);
//   },
// };
// user.showTag(); // this ссыдает на обьект юзер

// // const xyz = user.showTag; //запись ссылки на оригинальную функцию
// // xyz(); //фнукция вызывается вне какого-либо контекста, поэтому в консоле будет андефайнд
// const invokeAction = function (action) {
//   console.log(action);
//   action(); //функципя вызывается вне всяукого контента, поэтому в консоле будет андефайнд
// };
// invokeAction(user.showTag); //во время этого вызова в екшн записывается ссылка на функцию шовтег
//в зис будет что? будет андефайнд. ПОЧЕМУ? а потому что вызвана функция вне всякого контекст!!!! (action())
//важно не то внутри какой функции вызвана функция важно кто!!!

// const fn = function () {
//   console.log(`fn->this`, this);
// };
// fn();
//андефайнд вне контекста обьекта

// const book = {
//   title: `react for beginners`,
//   showTHis() {
//     console.log(`showThis -> this:`, this);
//   },
//   showTitle() {
//     console.log(`showTitle - > this.title:`, this.title);
//   },
// };

// // book.showTHis();
// //функция вызвана в контексте обьекта бук

// const outerShowTHis = book.showTHis;
// outerShowTHis();

//зис будет андефайнд - так как создается какая-то независимая

// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log(`changeColor -> this`, this);
//     this.color = color;
//   };
//   //   changeColor()
//   //андефайнд, просто функция и просто вызвается, без какого-либо обьекта

//   const sweater = {
//     color: `teal`,
//   };
//   sweater.updateColor = changeColor;
//   //   sweater.updateColor(`red`); // функция вызвана в контексте светер
//   //   console.log(sweater);
//   return sweater.updateColor;
// };

// // makeChangeColor();//

// const swapColor = makeChangeColor();
// swapColor(`blue`);
// //thid - андефайнд

// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log(`changeColor -> this`, this);

//   };
//   return changeColor;
// };

// const updateColor = makeChangeColor();
// updateColor(`yellow`);
// //undefined - вне обьекта
// const hat = {
//   color: `blue`,
//   updateColor,
// };
// console.log(hat.updateColor);
// hat.updateColor(`orange`);

// const counter = {
//   value: 0,
//   increment(value) {
//     console.log(this);
//     this.value -= value;
//   },
//   decrement(value) {
//     console.log(this);
//     this.value -= value;
//   },
// };
// //далее обьявляем независимую функцию которая должна получить аргументов какое-то значение
// //насколько мы должны изменить каунтер и операция
// const updateCounter = function (value, operation) {
//   operation(value); //вызов операции- аргумента
// };
// updateCounter(10, counter.increment);
// updateCounter(5, counter.decrement);
// //при передачи метода обьекта как колбека  - контекст не сохраняется!!!!!!!!!!!

//CALL, APPLY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const showThis = function () {
//   console.log(`showThis->this:`, this);
// };
// // console.dir(showThis);
// showThis();
// //console.dir  дает возможность увидет функцию как обьект с ее функциями
// const objA = {
//   a: 5,
//   b: 10,
// };
// showThis.call(objA, 10, 20, 30, 40, 50);
// //функция шовзи вызорви у себя функцию кол в контексте обьектаА + произвольное количество аргументов
// //метод кол берет функцию при которой вы его вызвали и принудительно в этой же строке вызвает в контексте этого обьекта
// //а обьектов может быть сколько угодно, А,Б,
// const objB = {
//   a: 4535,
//   b: 13450,
// };
// showThis.call(objB, 10, 20, 30, 40, 50);
// showThis();
// //а потом опять вызывается так как должно вызываться то есть функция КОЛ не привязывает к контексту,
// // а просто делает это на один раз вот, в этой строке где стоит кол
// //метод кол позволяет себе взять каку.то-функцию и вызвать ее под капотом хитро так в контексте обьекта который перевадется в скобках первым

// //apply делает все точно тоже, но аргументы передаются немного по дргоуму - через массив!
// //ВСЕ!! вся разница
// showThis.apply(objB, [10, 20, 30, 40, 50]); //мы не получим как результат массив, это просто синтаксис метода апплай, получим мы обычные значени

//есть случаи когда две или больше обьектов вмещают в себя два одинаковых метода, но это не очень экономично
//поэтому мы можем использовать функцию кол или еплай, тогда создаем отдельно функцию и два обьекта через кол вызываем нужную функцию
// const changeColor = function (color) {
//   console.log(`this`, this);
//   //   this.color = color;
// };
// const hat = {
//   color: `black`,
// };
// // changeColor.call(hat, `orange`); //при таком вызове зис ссылается на охет
// // console.log(hat);

// const sweater = {
//   color: `green`,
// };
// // changeColor.call(sweater, `yellow`); //при таком вызове зис ссылается на охет
// // console.log(sweater);

// //то есть CALL и APPLY вызывают функцию здесь сейчас и никогда больше (то есть без привязки к контексту)

// //BIND!!!!!!!!!!!!!!!!!!!!!!!!!

// //bind позволяет сделать копию функции с привязанным контекстом НАВСЕГДА!!!!!при этом оригинальная функция не меняется, создается копия функции с привязкой
// const changeHatColor = changeColor.bind(hat);
// //то есть функция чеджХетКолор - навсегда контекст привязан к обьекту хет

// changeColor();
// changeHatColor();
// const changeSweaterColor = changeColor.bind(sweater);
// //то есть функция ченджСвеатерКОлор навсегда привязана к контексту обьекта светер
// hangeSweaterColor();

//чем полезен байнд? - передачаа методов обьекта как колбека
// const counter = {
//   value: 0,
//   increment(value) {
//     console.log(this);
//     this.value -= value;
//   },
//   decrement(value) {
//     console.log(this);
//     this.value -= value;
//   },
// };
// const updateCounter = function (value, operation) {
//   operation(value);
// };
// // updateCounter(10, counter.increment)
// // updateCounter(15, counter.decrement)
// //контекст будет андефайнд (выше разбирали) НО! мы можем это пофиксить с помощью байнд
// updateCounter(10, counter.increment.bind(counter));
// updateCounter(15, counter.decrement.bind(counter));

//веселый живой пример - нужен в счетчике

let x = typeof NaN;
console.log(x);
