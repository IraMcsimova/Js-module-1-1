//SPREAD - распыление, распоковываение, делает копию примитива или копию ссылки на сложны обект
//операция СПРЕАД не деструктивная, старый массив никуда не девается!!! еще раз, спреад просто делает копию либо аргумента лиюо ссылки на сложный объеки
//распыляются строки массивы и объекты... не числа

// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);
// console.log(numbers);

// const numbers1 = [...[1, 2, 3]]; // возьми  и распыли элементы данного массива в новый массив
// console.log(numbers1);
// //например в следующем случае создается новый массив а тот массив перед которым операция спреад распыляется по элементам в новый массив
// const numbers2 = [1, 2, 3, ...[10, 20, 30, 50, 100], 10, 9, 1000];
// console.log(numbers2);

// //в отличии от конката мы можем в спреад операцию добавить новые элементы без проблем с конкатом будет сложней

// console.log(Math.max(1, 4, 6, 7, 23)); //покажет натбольшое число данного сбора аргументов (!!!обрати внимание это не массив!!!)
// //в массиве этот метод не сработатет но! если добавить спреад - получится
// const temps = [18, 14, 12, 21, 17, 29, 24];
// console.log(Math.max(temps)); //увы ничеговыводит нот э намбер
// console.log(Math.max(...temps)); //29//распыление отдельными значениями не в массив
// console.log(Math.min(...temps)); //12

// //получаем копию на ссылку робъекта
// const a = [{ a: 1 }, { b: 2 }, { c: 3 }];
// const b = [...a];//делаю новый пустой массив и распыляю в него массив а
// //две переменные вверху это две разные ячейки в памяти не равны друг другу даже не смтря на то что массивы там выглядят одинаково
// console.log(`a:`, a);
// console.log(`b:`, b);
// console.log(a[0] === b[0]); //true элементы равны
// console.log(a === b); //false

// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];
// const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// console.log(allTemps);

//РАСПЫЛЕНИЕ ОБЪЕКТОВ

const a = { x: 1, y: 2 }; //не может быть в одном оьекте два одинаковых свойства (два х к примеру)
const b = { x: 0, z: 3 };

// const c = Object.assign({ x: 5 }, a, b);
// console.log(c);
//
//современная запись!!!!!!!
// const c = {
//   ...a,
//   x: 10,
//   ...b,
//   y: 20,
// };
// console.log(c);
// //свойства те которые повторяются запишется то что ниже
// //то есть получается порядок распыления влияет на значения свойств которые мы получим в итоге

// const defaultSettings = {
//   theme: "light",
//   showNotifications: true,
//   hideSidebar: false,
// };

// const userSettings = {
//   showNotifications: false,
//   hideSidebar: true,
// };

// const finalSettings = {
//   ...defaultSettings,
//   ...userSettings,
// };
// console.log(finalSettings);

//Деструктуризация объекта!!! - разархивирование
//создается локальная переменная!!! спасает от повторения
// const playlist = {
//   name: `My super-druper musik`,
//   rating: 5,
//   tracks: [`track1`, `track2`, `track3`],
//   //   trackCount: 3,
// };

//пузатые скобки СЛЕВА от равно - это деструктуризация
//буквально из обьекта плейлист возьми и деструктуризируй свойсства указанные слева в пузатых скобках
// const { rating, tracks } = playlist; // эти скобки пузатые это не область видимости и не обект а деструктуризация
// console.log(rating, tracks); //5,  [`track1`, `track2`, `track3`]

//ВАЖНО!!! имя (левая часть) должна совпадать с названием свойства
// console.log(rating, tracks, author); //если в оьекте нет свойства с именем (автор у нас) получим андефайнд.
//но мы можем его добавить следующим обращзом
// const { rating, tracks, author = 555 } = playlist;
// console.log(author);
// console.log(playlist);
//при этом в сам обект автор не обавляется
//есть возможность переименовать  следующим образом

// const { rating, tracks, trackCount: numberOfTracks, author = 555 } = playlist;
// console.log(numberOfTracks); //3

//если б не было трекКаунт то присвоить значени можно так
// const {
//   rating,
//   tracks,
//   trackCount: numberOfTracks = 7, //возьми в оркальной переменной намберофтрекс возьми значени треккаунт
//   author = 555,
// } = playlist;
// console.log(numberOfTracks);

// const profile = {
//   name: "Gluke",
//   tag: "superman",
//   location: "Ocho Rios, Jamaica",
//   avatar: "avatar.jpg",
//   stats: {
//     followers: 5603,
//     view: 4027,
//     likes: 1308,
//   },
// };
// const { name, tag, location, avatar, stats } = profile;
// console.log(name, tag, location, avatar, stats);
//если надо достучаться глубже в статс
// const {
//   name,
//   tag,
//   location,
//   avatar,
//   stats: { followers, view, likes },
// } = profile;
// console.log(name, tag, location, avatar, followers, view, likes);
//глубина бесконечная

// const {
//   name,
//   tag,
//   location,
//   avatar,
//   stats: { followers: myFollowers = 9, view, likes },
// } = profile;
// console.log(name, tag, location, avatar, myFollowers, view, likes);

// const rgb = [255, 180, 80];

// const [red, green, blue] = rgb;

// console.log(red, green, blue);
//а если надо все кроме одного
// const [red, , blue]
// console.log(red,blue)
//сколько нужно пропустить столько пробелов

// const authors = {
//   kiwi: 4,
//   poly: 7,
//   ajax: 9,
//   mango: 6,
// };
// const keys = Object.keys(authors);
// for (const key of keys) {
//   console.log(key);
//   console.log(authors[key]);
// }
// const entries = Object.entries(authors);
// for (const entry of entries) {
//   console.log(entry); //получаем 4 массива м 4 свойств
//   const name = entry[0];
//   const rating = entry[1];
//   console.log(name, rating);
// }//вот это есть пример как сы деструктурировали массив
//но конечно же есть новый метод деструктуризации

// for (const entry of entries) {
//   const [name, rating] = entry;
//   console.log(name, rating);
// }
//ну и ХАй левел той де деструктуризации массивов
// for (const [name, rating] of entries) {
//   console.log(name, rating);
// }

//мозг сломался

//REST - сбор
//бывают такие случаи когда нужно вытянуть только некоторые свойства а остальные нужно собрать в другой обьект
//для этого нам понадобится операция рест (...restProps)

// const profile = {
//   name: "Gluke",
//   tag: "superman",
//   location: "Ocho Rios, Jamaica",
//   avatar: "avatar.jpg",
//   stats: {
//     followers: 5603,
//     view: 4027,
//     likes: 1308,
//   },
// };
// const { name, tag, location, ...restProps } = profile;
// console.log(name, tag, location);
// console.log(restProps);

//не очень удобно когда нужно передать большое количество аргументов в функцию
// const fn = function (a, b, c, d, e, f) {};
// fn(10, 5, `nika`, true, `seld`);
//вообще не понятно что это за аргументы,Ю но есть патерг обектнастроек

//ПАТТЕРГ ОБЪЕКТ НАСТРОЕК!!!!!!
//к примеру следубщий вызов функций намного удобнее и читабельней, и никто вас придурком не назовет
// fn({
//   age: 10,
//   rating: 5,
//   name: `nika`,
//   isOnline: true,
//   favouriteDish: `seld`,
// });

// const showProfileInfo = function (userProfile) {
//   console.log(userProfile);
//   const { name, tag, location, avatar } = userProfile; //можно так
//   console.log(name, tag, location, avatar);
// };
//аможно так

// const showProfileInfo = function ({
//   name,
//   tag,
//   location,
//   avatar,
//   ...restProps
// }) {
//   console.log(name, tag, location, avatar);
//   console.log(restProp);
// };

// const profile = {
//   name: "Gluke",
//   tag: "superman",
//   location: "Ocho Rios, Jamaica",
//   avatar: "avatar.jpg",
//   stats: {
//     followers: 5603,
//     view: 4027,
//     likes: 1308,
//   },
// };
// showProfileInfo(profile); // в вызов функции килае просто весь обьект

//Корзина
const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    this.items.push(product);
  },
  remove(productName) {
    const { items } = this; //деструктуризация зис
    for (let i = 0; i < this.items.length; i += 1) {
      console.log(this.items[i]);
      //   const item = this.items[i];
      //  if (productName === item.name) {
      //    console.log(`нашли такой продукт`, productName);
      //  }

      //с деструктуризацией
      const { name } = items[i];
      if (productName === name) {
        console.log(`нашли такой продукт`, productName);
        console.log(i);
        items.splice(i, 1); //удаляем наш банан
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    const { items } = this; //деструктуризация
    let total = 0;

    for (const { price } of items) {
      //деструктуризация
      total += price;
    }

    return total;
  },
  Price() {},
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};
console.log(cart.getItems());
cart.add({ name: `apple`, price: 50 });
cart.add({ name: `orange`, price: 60 });
cart.add({ name: `banana`, price: 100 });
cart.add({ name: `melon`, price: 150 });
cart.add({ name: `melon`, price: 150 });
cart.add({ name: `melon`, price: 150 });
console.table(cart.getItems());

cart.remove(`banana`);
cart.clear();
