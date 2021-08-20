//sort
//по умолчанию сортирует по взорастанию, причем приводит значения к строке в зависимости от ЮНИКОДА
//изменяет исходный массив

// const numbers = [1, 9, 6, 2, 3];
// numbers.sort();
// console.log(`numbers:`, numbers);

// const letters = [`b`, `a`, `f`, `A`];
// // letters.sort();
// console.log(`letters:`, letters);

// numbers.sort((curEl, nextEl) => {
//   return curEl - nextEl; //возрастание
// });
// console.log(numbers);

// //как работает данная функция:
// //если сорт(а,б) меньше 0, сортировка поставит а перед б
// //если сорт(а,б) больше 0, сортировка поставит б перед а
// //если сорт(а,б) вернет 0, сортировка оставит а и б на своих местах без изменений по отношению друг к другу но! отсортирует по отношению к лругим едементам
// numbers.sort((curEl, nextEl) => {
//   return nextEl - curEl; //убывание
// });
// console.log(numbers);

//то есть данной функцией мы сортируем оригинальный массив, но зачастую  мы не хотим изменять исхожный массив
//поэтому нам нужно сдлеать копию  с помощью слайс или спреад

// const copy = [...numbers];
// copy.sort();
// console.log(copy);
// console.log(numbers);//в данном случае исхожный массив не изменяется а остается прежним ура!
//если короче
// const ascSortedNumbers = [...numbers].sort((a, b) => a - b); //вот так в одну строку можно записать два метода получим одно и то же
// const descSortedNumbers = [...numbers].sort((a, b) => b - a);
// console.log(ascSortedNumbers);
// console.log(descSortedNumbers);
// console.log(numbers);

// //кастомная сортировка сложных типов

// const players = [
//   { id: `player-1`, name: `mango`, timePlayed: 310, online: false },
//   { id: `player-2`, name: `poly`, timePlayed: 470, online: true },
//   { id: `player-3`, name: `kiwi`, timePlayed: 230, online: true },
//   { id: `player-4`, name: `ajax`, timePlayed: 150, online: false },
//   { id: `player-5`, name: `chalsy`, timePlayed: 80, online: true },
// ];

// //сортировка по числам
// const sortedByBestPlayers = [...players].sort((prevPlayer, nextPlayer) => {
//   return nextPlayer.timePlayed - prevPlayer.timePlayed;
// });
// console.table(sortedByBestPlayers);

// const sortedByWorstPlayers = [...players].sort((prevPlayer, nextPlayer) => {
//   return prevPlayer.timePlayed - nextPlayer.timePlayed;
// });
// console.table(sortedByWorstPlayers);

// //сортировка по буквам
// const byName = [...players].sort((a, b) => {
//   //   console.log(a.name[0]);
//   const result = a.name[0] > b.name[0];

//   if (result) {
//     return -1;
//   }

//   if (!result) {
//     return 1;
//   }
// });
// console.table(byName);

//===============================================================================
//flat
// const array = [1, [2], [[4, [5]]], [6, [7, 8, [9]]]];
// console.log(array.flat(1)); //либо аарай.флет(), по умолчанию один - глубина разглаживания
// console.log(array.flat(2)); //глуюина разглаживания две вложенности
// console.log(array.flat(3)); //глубина разглаживания три вложенноти

// const tweets = [
//   { id: `800`, likes: 5, tags: [`js`, `node.js`] },
//   { id: `800`, likes: 2, tags: [`html`, `css`] },
//   { id: `800`, likes: 15, tags: [`js`, `html`, `node.js`] },
//   { id: `800`, likes: 45, tags: [`js`, `react`] },
//   { id: `800`, likes: 55, tags: [`node.js`] },
// ];
// // const tags = tweets.map((t) => t.tags).flat();
// //а можно так, делает то же самое!
// const tags = tweets.flatMap((t) => t.tags);
// //flatMap по умолчанию использует глубину разглаживания - 1, если нуно боольше то используем флет и меп отдельно
// console.log(tags);
// //а можно так
// const stats = tweets
//   .flatMap((t) => t.tags)
//   .reduce((acc, tag) => {
//     return { ...acc, [tag]: acc[tag] ? acc[tag] + 1 : 1 };
//   }, {});
// console.log(stats);
// const numbers = [1, 5, 2, 4, 3];

// const greaterThenTwo = numbers.filter((num) => num > 2);
// console.log(greaterThenTwo);

// const multByThree = greaterThenTwo.map((num) => num * 3);
// console.log(multByThree);

// const sorted = multByThree.sort((a, b) => a - b);
// console.log(sorted);

//цепоска предыдущих трех (без лишних переменных)
// const sorted = numbers
//   .filter((num) => num > 2)
//   .map((num) => num * 3)
//   .sort((a, b) => a - b);
// console.log(sorted);
//работает ТОЛЬКО потому что каждый метод возвращает новый массив

// const players = [
//   { id: `player-1`, name: `mango`, timePlayed: 310, online: false },
//   { id: `player-2`, name: `poly`, timePlayed: 470, online: true },
//   { id: `player-3`, name: `kiwi`, timePlayed: 230, online: true },
//   { id: `player-4`, name: `ajax`, timePlayed: 150, online: false },
//   { id: `player-5`, name: `chalsy`, timePlayed: 80, online: true },
// ];

// // const onlineAndSorted = players
// //   .filter((player) => player.online)
// //   .sort((a, b) => a.timePlayed - b.timePlayed);
// // console.table(onlineAndSorted);

// //lodash - библиотека методов
// //загрузили через тег <script src="html..." сразе после открівающегося тега боди
// //после загрузки нам становится доступнрой переменная (_) - котррая открівает нам доступ ко всем методам библиотеки
// // console.log(_);

// //map - из библиотеки

// //isEmpty
// console.log(_.isEmpty({})); //пустой, - да, возвращает тру
// console.log(_.isEmpty({ a: 1 })); //пустой? нет - возвращает фалс

// //get
// //позволяет найти элемент на людой глубине
// const user = {
//   name: `mango`,
//   location: {
//     coords: [1, 2],
//     city: `Lviv`,
//   },
// };
// console.log(_.get(user, `location.city`));
// //если без лоудеш
// //нативный JS
// if (user && user.location && user.location.city) {
//   console.log(user.location.city);
// }
// //НОВЫЙ СИНТАКСИС JS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// console.log(user?.location?.city);
// //нету юзера - андефайнд, есть юзер? - дальше ищет локейшн - нет локейшн? ДАЛЬШЕ НЕ ИЩЕТ - АНДЕФАНД И Т.Д.

// //далее ллоудеш
// //union()
// console.log(_.union([1, 2, 3], [3, 4, 5])); //выдаст массив уникальных, не повторяющихся  чисел

// //range()
// console.log(_.range(1, 6, 2));

// //sortBy()
// console.log(_sortBy(players, (player) => player.timePlayed));

//sum () - для массива

//sumBy() - для массива обьектов

//camelCase()

//kebabCase()
console.log(_.kebabCase(`a b c d`));
//a-b-c-d

//lowerCase()

//upperCase()

//capitalize()
