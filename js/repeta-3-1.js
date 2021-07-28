//обьект - словарь, используем для того чтобы группировать характеристики одной сущности
//массив - используем чтобы хранить коллекции чего-то

//Как отличить область вилимости от обьекта???
//литерал объекта  - только!!! справа от равно,
//const x ={}
//console.log({передаем параметр то есть по сути справа от равно})

// const fn = function(myObject){
//     console.log(myObject) - фигруные скобы области вилимости
// }
//fn({a:1, b:2}) - фигурные скобы обьекта

//return {a:5} - литерал объекта

//как создается обьект?

// const playlist = {
//   name: [1, 2, 3], //свйоство объекта ключ:значения
//   b: 5,
//   c: 10,
// };
// console.log(playlist);
//два одинковых свойства быть не может - тот который ниже( самое посленее значени) перекроет то что выше

//пример объекта плейлист - собираем все характеричтики этой сущности
//ключ свойства - всегда строка!!!!
// const playlist = {
//   name: "My super-puper playlist",
//   rating: 5,
//   tracks: [`track1`, `track2`, `track3`],
//   trackCount: 3,
// };
// console.log(playlist);
// //чтобы обратиться к свойству ставим после имени объекта точку и далее указываем имя ключа\свойства
// console.log(playlist.rating);
// console.log(playlist.trackCount);

// const propertyName = "tracks";
//бываеют случаи когда свойсто существа записано в переменную,
//чтобы к ней достучаться нужно правильно указать вывод:
// console.log(playlist[propertyName]); //обязательно указываем как строку!!!! редко используется в работе
// console.log(playlist.propertyName); // если обращаемся к свойству которого в ключах нет - андефайнд, значение не найдено, не определено

//КОроткая записьм свойства- shorthand
//если имя ключа и имя переменной совпадают можно записать только имя ключа! через запятую
// const username = "Mango";
// const email = "mango@mail.com";

// // const signupData = {
// //   username: username,
// //   email: email,
// // };
// const signupData = {
//   username,
//   email,
// };

// console.log(signupData);

//когда нужно чтобы ключ был именем переменной зранее которой я не знаю
// const inputName = "color";
// const inputValue = "pink";
// const colorPickerData = {
//   [inputName]: inputValue, //иди найди переменную с таким именем (inputName) и используй ее значение как имя ключа,
//   //и пойди найди переменную с таким именем (inoutValue) и используй ее значение как значние свойства(ключа)
// };
// console.log(colorPickerData);
//это называется ВЫЧИСЛЯЕМЫЕ свойства!!!!!!!!!!!!!!

//к объекту возможно доюавлять свойства!
// const playlist = {
//   name: "My super-puper playlist",
//   rating: 5,
//   tracks: [`track1`, `track2`, `track3`],
//   trackCount: 3,
// };
// console.log(playlist);
// playlist.singer = `zibrov`;
// console.log(playlist);
// //если тоже написать но с уже существующим свойством - то оно будет перезаписано
// playlist.name = "my favourite music";
// console.log(playlist);

//обект - сложный тип и по присвоении не отличаются от массива если сравнить два обьекта они не могут быть равны так как это тоже ссылки
// const a = { x: 1, y: 2 };
// const b = a; //копирует ту же ссылку на ячейку
// console.log(b === a); //будет тру - так как копируется ссылка на ячейку, но!!!!
// console.log({ x: 1 } === { x: 1 }); //будет фолс так как да одинаковые обекты - но ячейки разные, соответсвенно ссылки тоже (как с массивами)

// a.c = 100;

// console.log(a);
// console.log(b);

//массивы и функции - это объекты!!!!!!!!!!!!!! в джаваскрипте по сути нет настоящих массивов
// const a = [1, 2, 3];

// a.hello = `:)`;

// console.log(a);

// const fn = function () {
//   console.log(`hello`);
// };
// fn.hello = `:)`;

// console.log(fn.hello);

//древний способ обьявления метода обьекта
// const playlist = {
//   name: "My super-puper playlist",
//   rating: 5,
//   tracks: [`track1`, `track2`, `track3`],
//   trackCount: 3,
//   getName: function () {
//     console.log(`oohhh this is getName :)`);
//   },
// };
// playlist.getName();

//как записывают объявление метода сейчас

// const playlist = {
//   name: "My super-puper playlist",
//   rating: 5,
//   tracks: [`track1`, `track2`, `track3`],
//   trackCount: 3,
//   getName() {
//     console.log(`oohhh this is getName :)`);
//   },
//   //главное помнить что под капотом данной записи -функция
// };
// playlist.getName();

//сделаем несколько методов
// const playlist = {
//   name: "My super-puper playlist",
//   rating: 5,
//   tracks: [`track1`, `track2`, `track3`],
//   trackCount: 3,
//   changeName(newName) {
//     console.log(`this is inside changeName`, this);

//     //в этом зис лежит ссылка на объект!!!!!!!!
//     this.name = newName;
//   },
//   addTrack(tracks) {
//     this.tracks.push(tracks);
//     this.trackCount = this.tracks.length;
//   },
//   updateRating(newRating) {
//     this.rating = newRating;
//   },
// };
// playlist.changeName(`new name`);
// console.log(playlist);
// //внутри методов!!!! объекта никогда не используем имя самого объекта!!1
// playlist.addTrack(`New track`);
// playlist.updateRating(4);

// перебираем обьект

//метод Object.keys
// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };
// let totalFeedback = 0;
// const keys = Object.keys(feedback);
// console.log(keys); //получаем массив из ключей

// for (const key of keys) {
//   console.log(key); //good,neutral,bad
//   console.log(feedback[key]); //5,10,3

//   totalFeedback += feedback[key];
// }

// console.log(totalFeedback);

//метод Object.values
// const values = Object.values(feedback);
// console.log(values);

// for (const value of values) {
//   console.log(value);

//   totalFeedback += value;
// }
// console.log(totalFeedback);

//перед тем как перебрать объект нужно подумать что нам нужно - ключи или значения?

//чаще всего мы будем работать с массивом объектов!!!!

// const friends = [
//   { name: `mango`, online: false },
//   { name: `kiwi`, online: true },
//   { name: `poly`, online: true },
//   { name: `ajax`, online: false },
// ];
// console.table(friends);
// for (const friend of friends) {
//   console.log(friend.online);

//   friend.newprop = 555;
// }
// console.table(friends);
// массив сложных типов (объект) в фор офе - мы получаем ссыку!!!!

//TASKS
//TASK1 ищем друга по имени

// const friendFriendByName = function (allFriends, name) {
//   console.log(allFriends.includes(name)); //приравнивает  { name: `mango`, online: false } к Poly - не подходит
// };
// console.log(friendFriendByName(friends, `Poly`));

// const friendFriendByName = function (allFriends, name) {
//   for (const friend of allFriends) {
//     console.log(friend);

//     if (friend.name === name) {
//       return "is found";
//     }
//   }

//   return "is not found";
// };
// console.log(friendFriendByName(friends, `poly`));
// console.log(friendFriendByName(friends, `chelsy`));

//итак самый важный вывод - инклудс со сложными массивами (объектами) не работает!!! инклудс применим только к массивам примитивных типов данных строк чисел булей

//TASK2
// const getAllNames = function (allFriends) {
//   const names = [];

//   for (const friend of allFriends) {
//     console.log(friend.name);

//     names.push(friend.name);
//   }

//   return names;
// };

// console.log(getAllNames(friends));

//TASK 3 надо получить всех друзей которые оналйн
// const friends = [
//   { name: `mango`, online: false },
//   { name: `kiwi`, online: true },
//   { name: `poly`, online: true },
//   { name: `ajax`, online: false },
// ];
// const getOnlineFriends = function (allFriends) {
//   const onlineFriends = [];
//   for (const friend of allFriends) {
//     console.log(friend);
//     console.log(friend.online);

//     if (friend.online) {
//       onlineFriends.push(friend);
//     }
//   }
//   return onlineFriends;
// };
// console.log(getOnlineFriends(friends));

// const getOfflineFriends = function (allFriends) {
//   const offlineFriends = [];

//   for (const friend of allFriends) {
//     console.log(friend);
//     console.log(friend.online);

//     if (!friend.online) {
//       offlineFriends.push(friend);
//     }
//   }
//   return offlineFriends;
// };
// console.log(getOfflineFriends(friends));
// const friends = [
//   { name: `mango`, online: false },
//   { name: `kiwi`, online: true },
//   { name: `poly`, online: true },
//   { name: `ajax`, online: false },
// ];
// const getFriendsByOnlineStatus = function (allFriends) {
//   const friendsByStatus = {
//     online: [],
//     offline: [],
//   };
//   // return friendsByStatus;
//   for (const friend of allFriends) {
//     if (friend.online) {
//       friendsByStatus.online.push(friend);
//       continue;
//     }
//     friendsByStatus.offline.push(friend);
//   }
//   return friendsByStatus;
// };

// console.log(getFriendsByOnlineStatus(friends));

//task 4 -как узнат количество свойств в обьекте?
// const x = {
//   a: 1,
//   b: 2,
//   c: 50,
//   d: 100,
// };
// console.log(Object.keys(x).length);

//task 5 - сделать корзину товара
const cart = {
  items: [],
  getItems() {},
  add(product) {},
  remove(productName) {},
  clear() {},
  countTotalPrice() {},
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};

cart.add({ name: `mango`, price: 30 });
cart.add({ name: `lemon`, price: 60 });
cart.add({ name: `apple`, price: 70 });
cart.add({ name: `mango`, price: 30 });
