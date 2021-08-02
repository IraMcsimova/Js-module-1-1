//функция которая передается другой функции как аргумент - функция обратного вызова
//функция которая принримает другую функцию как параметр, или возвращает другую функцию - функция высшего порядка
//колбек - онцепция

// const fnA = function (message, callback) {
//   console.log(message);
//   console.log(callback);
//   //   callback();//вызываем функцию переданную как аргумент через параметр
//   callback(100); //так передаются параметры в функцию ааргумент
// };

// const fnB = function (number) {
//   console.log(`THis is the log during calling fnB`, number);
// };
// fnA(`qweqwe`, fnB);
//итак функция fnB передается как аргумент другой функции fnA.
//ВНИМАНИЕ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//передается просто ссылка на фкнкцию. она не сработает до тех пор пока мы ее не вызовем!!!!!
//

// const doMath = function (a, b, callback) {
//   const result = callback(a, b); //передаем 2 и 3 или другие значения
//   console.log(result); // 5
// };
// const add = function (x, y) {
//   return x + y;
// };
// const sub = function (x, y) {
//   return x - y;
// };
//обьявили параметр ед, ед передается аргументом функции думес, потом вызываем колюек в функции
//мы записываем еще параметры 2 и 3, которые тоже аргументами передаются функции думес,
//а потом  2 и 3 передаются в ед в качетсве переменных x и y ед их посчитал и вернул в место вызова функции
// doMath(2, 3, add); //передаю функцию ед
// doMath(10, 8, sub); //передаю функцию саб
//можно так передать в колбек любую функцию которая работает с двумя переменными

//функции записанные выше - это функции записанные в переменные, так делаем если нужно испольщовать функцию много раз
//но есть такое понятие как анонимная функция(смотри ниже) используется литерал функции его и нужно постоянно использовать!!!!
//inline функция!!! одноразовая функция она используется тольк оодин раз
// doMath(2, 3, function (x, y) {
//   return x + y;
// });
// doMath(10, 8, function (x, y) {
//   return x - y;
// });

//usecases!!!!!!!!!!!!!!!!
//кейс1.
// регистрация события (вызывается функция потом, а обьявляется вот сейчас)
// const buttonRef = document.querySelector(`.js.button`);
// const handleBtnClick = function () {
//   console.log(`Click on the button` + Date.now());
// };

// buttonRef.addEventListener(`click`, handleBtnClick); //вызываем функцм регистрации события, как зарегать юзера? сделать функцию и сделать ее колбеком
//где-то там под капотом

//кейс 2.
//получить геолокацию юзера

// const onGetPoditionSuccess = function (position) {
//   console.log(position);
// };

// const onGetPositionError = function (error) {
//   console.log(error);
// };
//ниже втсроенная функция которая сама по себе не работает а только если мы в нее передадим какие-то другие функции
//сработает либо та либо другая функция(либо пользователь согласитя на передачу данных о геолокации лиюо нет)
// window.navigator.geolocation.getCurrentPosition(
//   onGetPoditionSuccess,
//   onGetPositionError
// );

//под капотом если getCurrentPosition(success, error)

//кейс 3.
//функция со счетчиком (через какое фремя єта функция будет візвана)

// const callback = function () {
//   console.log(`in three seconds the function will be apply`);
// };
// console.log(`in code before timeout`);

// setTimeout(callback, 2000);

// console.log(`in code after timeout`);
//обьявил функцию колбек и передал ее в функцию сеттаймаут,
// браузер регистрирует функцию колбек но сначала ждет 2000 милисекунд
//на протяжении котороых выполняются консольки а тогду выполняет колбек

//кейс 4.
// //работа с бекендом
// const onRequestSuccess = function (response) {};

// fetch(`http_addres`)
//   .then((res) => res.json())
//   .then(onRequestSuccess);

//

//итак суть всего ранее написаного, Я ОБЬЯВЛЯЮ ФУНКЦИЮ И КИДАЮ ЕЕ КАК
//КОЛБЕК В ДРУГУЮ ФУНКЦИЮ, ГДЕ ОНА БУДЕТ ВЫЗВАНА И КУДА ПЕРЕДАСТЯ РЕЗУЛЬТАТ

//функция filter
// const filter = function (array, test) {
//   const filteredArray = [];

//   for (const el of array) {
//     console.log(el);
//     const passed = test(el);

//     if (passed) {
//       filteredArray.push(el);
//     }
//   }
//   return filteredArray;
// };
//1.надо передать функцию
//2.функция получает елемент,
//3.если елемент удовлетворяет условие функция вернет тру если нет функция вернет фолс

// const callback1 = function (value) {
//   return value >= 3;
// };

// const callback2 = function (value) {
//   return value >= 44;
// };

// const r1 = filter([1, 2, 3, 4, 5, 6, 7], callback1);
// console.log(r1);
// const r2 = filter([10, 20, 30, 40, 50, 60, 70], callback2);
// console.log(r2);
//что мы тут сдлелаи? перебрали, отфильтровали абсолютно произволтьный массив чисел больше 3 и 44
//либо можно со сложным массивом|

// const fruits = [
//   { name: `apples`, qty: 200, isFresh: true },
//   { name: `grapes`, qty: 150, isFresh: false },
//   { name: `bananas`, qty: 180, isFresh: true },
// ];

// const getFruitsWithQuantity = function (fruit) {
//   return fruit.qty >= 170;
// };
// const r3 = filter(fruits, getFruitsWithQuantity);
// console.log(r3); //вернет массив обьетов только тех, где количество больше 170
//фруиты идет в фунцию фильтра вначале темы фильтр как аргумент еррей, а тест это наша функция!!!

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//вот она сила колбека, постигать нам ее еще и постигать :)
//главное что нужно запомнить, мы передаем ссылку на функцию, которая выполнит свою задачу тогда, когда мы ее вызовем,и столько раз сколько нам понадобится

//ЗАМЫКАНИЕ ФУНКЦИИ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//еще одна концепция в джаваскрипте
//когда функция возвращает из себя другую функцию

// const fnA = function (parameter) {
//   const innerVariable = `значение внутренней переменной функции fnA`;
//   //далее идет функция замыкания
//   const innerFunction = function () {
//     console.log(parameter);
//     console.log(innerVariable);
//     console.log(`это вызов innerFunction`);
//   };
//   return innerFunction; //из функции форзвращаю другую функцию которая была ранне внутри нее обьявлена
// };
// const fnB = fnA(777); //в переменную фнБ записываем результат вызова фнБ
// fnB();
// console.log(fnB);
//возваращаемая функция будет иметь доступ ко всем локальным переменным (параметр, иннервериабл)
//даже если она будет вызвана вне тела оригинальной функции
//то есть возможность функции получать доступ к локальным переменном родительской функцмм даже когда мы уже далеко
//собственно происходит замыкание на обасти видимости функции которая фовращается
//почему не иннерФанкш? потому что эта фунция существует только в области видимости фнА но! не в глобальной области где нахрдится фнБ

//пример ПОВАРЕНОК

// const makeDish = function (sheffName, dish) {
//   console.log(`${sheffName} готовит ${dish}`);
// };
// makeDish(`Mango`, `пирожок`);
// makeDish(`Mango`, `омлет`);
// makeDish(`Mango`, `чай`);

// makeDish(`Poly`, `котлетки`);
// makeDish(`Poly`, `супик`);
// makeDish(`Poly`, `кофе`);

// const makeSheff = function (name) {
//   const a = 777;
//   const message = `теперь я доступна функции мейкшеф даже за пределами этой функции`;

//   const makeDish = function (dish) {
//     console.log(`${name} готовит ${dish}`);
//   };
//   return makeDish;
// };
// const mango = makeSheff(`mango`);
// mango(`котлетки`);
// const poly = makeSheff(`mango`);
// poly(`чаечек`);
// console.dir(poly); //елис вібрать скоуп - покажет на чем замкнуло функцию

//пример ОКРУГЛЯТОР
// const floatingPoint = 3.1409098097;
// const someInt = Math.round(floatingPoint);
// const withDecimals = Number(floatingPoint.toFixed(2));

// const rounder = function (number, places) {
//   return Number(number.toFixed(places));
// };
// const number1 = 3.795824;
// const number2 = 4.2958574;
// console.log(rounder(3.456456, 2));

// const rounder = function (places) {
//   return function (number) {
//     return Number(number.toFixed(places));
//   };
// };
// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// console.log(rounder2(5.756645353));
// console.log(rounder3(7.876543296975654323456789));

//пример ПРИВАТНЫЕ ДАННЫЕ
//функция замыкания позволяет спрятать данные функции
// const salaryManagerFactory = function (employeeName, baseSalary) {
//   let salary = baseSalary;

//   const changeBy = function (amount) {
//     salary += amount;
//   };
//   return {
//     raise(amount) {
//       changeBy(amount);
//     },
//     lower(amount) {
//       changeBy(amout);
//     },
//     current() {
//       return `текущая зарплата ${employeeName} - ${salary}`;
//     },
//   };
// };

// const salaryManager = salaryManagerFactory(`Mango`, 5000);
// console.log(salaryManager.current());
//можно только вызвать переменные но не получить доступ к переменным
//очень интересно, но пока не все понятно)
//но главное суть концепции!!!!!!!!!!!!!!! концепции функции колбека и функции замыкания (смтори выше)

//СТРЕЛОЧНАЯ ФУНКЦИЯ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const add = function (a, b, c) {
//   console.log(a, b, c);
//   return a + b + c;
// };

//а теперь в виде стрелочной функции

// const addArrow = (a, b, c) => {
//   console.log(a, b, c);
//   return a + b + c;
// };
// console.log(add(5, 10, 15));
//если параметорв больше чем дваа, либо вообще нет, скобки обязательны!!!!!!!!!!!!!
//если параметр 1 - скобки можно опустить
// const addArrow2 = z => {
//   console.log(z);
//   return z + z;
// };
// console.log(add(58));

// const add = function (a, b, c) {
//   console.log(a, b, c);
//   return a + b + c;
// };
// console.log(add(58, 109, 715));

//а теперь неявній возврат, когда только одно выражение
// const add = (a, b, c) => a + b + c;
// console.log(add(58, 109, 715));
//красиво и удобно !!!!!!!!!!!!

//у стрелочных функций нет локальной переменной arguments
//как полчуить доступ ко всем аргументам - ха-ха, через rest(...args)!!!!!!!!!

// const fnA = function () {
//   return { a: 5 };
// };
// console.log(fnA());

// const arrowFnA = ()=>{a:5}//нельзя так написать, так как браузер воспринимает это не как обьект а как тело функции,
// const arrowFnA = () => ({
//   a: 5,
// }); //поэтому ополнительно берем еще в круглые скобки чтобы браущер воспринял как обьект
//такой себе хак

//ИТОГО
//колбек
//замыкание
//стрелочные функции - используем всегда когда есть возможность