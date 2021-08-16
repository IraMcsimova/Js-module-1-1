//ПЕРЕБИРА,ЩИЕ МЕТОДЫ МАССИВОВ
//большинство методов не изменяют старій массив - а копируют оригинал а далее раюотают с копией

//===============================================================
//for each
//просто замены фора
//для собеседования в методе форИч - два аргумента: первый - это функция, а ворой - это обьект в контексте которого эту функцию нужно вызвать
// const numbers = [5, 10, 15, 20, 25];
// numbers.forEach(function (number, index, array) {
//   console.log(number); //all numbers are counted
//   //если мы изменим намберс - исхождный массив не изменится
//   //но если мы помеяем массив через индекс - изменится исхожный массив
//   //но такое требуется крайне редко
//   number = 20;
//   console.log(number); //все числа поменяются на 20 но только внутри функции,
//   //на скопированном обьекте а исхожный - не меняется
//   array[index] = 20; //меняется исхожный обьект
// });
// console.log(numbers); //все числа - 20
// console.log(numbers);

//================================================================
//map
//не меняет исхожный, но! кое-что возвращает
// const numbers = [5, 10, 15, 20, 25];
// const doubledNums = numbers.map(function (number) {
//   console.log(number);
//   return number * 2;
// });
// console.log(`numbers:`, numbers);
// console.log(`doubledNums:`, doubledNums);
// //с помощью мепа можна получить просто список всех пользователей без дишней инфы
// const players = [
//   { id: `player-1`, name: `mango`, timePlayed: 310, points: 54, online: false },
//   { id: `player-2`, name: `poly`, timePlayed: 478, points: 92, online: true },
//   { id: `player-3`, name: `kiwi`, timePlayed: 238, points: 48, online: true },
//   { id: `player-4`, name: `ajax`, timePlayed: 150, points: 71, online: false },
//   { id: `player-5`, name: `chelsy`, timePlayed: 80, points: 40, online: true },
// ];

//явный возврат стрелочной функции
// const playerNames = players.map((player) => {
//   console.log(player);
//   return player.name;
// });
// //пока функция не обозначена - возвращает андефанд
// //когда обозначена вернет то что в функции колбек, получим массив из имен пользователей
// console.log(`playerNames:`, playerNames);

//неявный возврат стрелокчной функции
// const playerNames = players.map((player) => player.name);
// console.log(`playerNames:`, playerNames);

//можно получить список id
// const idList = players.map((player) => player.id);
// console.log(`player id:`, idList);

//моожно получить сразу два свойства из обьекта в массив
// const res = players.map((player) => {
//   return {
//     name: player.name,
//     online: player.online,
//   };
// });
// console.log(res);

//а теперь магическое преобразование этого же кода в одну строку (с деструктуризацией)
// const res = players.map(({ name, online }) => ({ name, online }));
// console.log(res);

//так же удобно взять и обновить данные каждого игрока

// const updatePlayers = players.map((player) => {
//   console.log(player);
//   return {
//     ...player,
//     //распыляем старый обьект в новый
//     points: player.points * 1.1,
//   };
// });
// console.table(updatePlayers);
// console.log(updatePlayers);

//нужно измени ть одного игрока
// const playerIdToUpdate = `player-4`;
// const updatePlayers = players.map((player) => {
//   if (playerIdToUpdate === player.id) {
//     console.log(`вот мы нашли того кого нужно обновить`);
//     return `это будет обновленный обьект`;
//   }
//возвращаем просто старый обьект
//   return `это будет старый обьект`;
// });
// console.table(updatePlayers);
//нашли элемент который мы хотим изменить а теперь его поменяем
// const playerIdToUpdate = `player-4`;
// const updatePlayers = players.map((player) => {
//   if (playerIdToUpdate === player.id) {
//     console.log(`вот мы нашли того кого нужно обновить`);
//     //возвращаем новый обьект и распыляем в нем старый
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 100,
//     };
//   }
//   return player;
// });
// console.table(updatePlayers);
//it is magic ,maaaan

//теперь магия - сокращаем, самая краткая запись, и идеальная)

// const playerIdToUpdate = `player-4`;
// const updatePlayers = players.map((player) =>
//   playerIdToUpdate === player.id
//     ? { ...player, timePlayed: player.timePlayed + 100 }
//     : player
// );
// console.table(updatePlayers);

//====================================================================
//filter
//возвращает всегда новый массив, этот метод сравнивает с чем-то и всегда работает  с тру или фолс
//умеет только фильтровать!!!!!!!

// const numbers = [5, 10, 15, 20, 25];
// const filteredNumbers = numbers.filter((number) => {
//   console.log(number);
//   //возврат - пустой массив,э тот фильтр вернет только отфильтрованные данные (то что будет тру)
//   //   return number > 15;
//   //все числа котоорый больше 15 - вернутся, а те что нет
//   return number < 10 || number > 20;
//   //можно записать любое условие, хоть самое сверхсложное, главное чтобы ответ был тре или фолс
// });
// console.log(filteredNumbers);
//с помощью мепа можна получить просто список всех пользователей без дишней инфы

//сокращаем

// const filteredNumbers = numbers.filter((number) => number > 15);
// console.log(filteredNumbers);
//ха-хэ))

// const players = [
//   { id: `player-1`, name: `mango`, timePlayed: 310, points: 54, online: false },
//   { id: `player-2`, name: `poly`, timePlayed: 478, points: 92, online: true },
//   { id: `player-3`, name: `kiwi`, timePlayed: 238, points: 48, online: true },
//   { id: `player-4`, name: `ajax`, timePlayed: 150, points: 71, online: false },
//   { id: `player-5`, name: `chelsy`, timePlayed: 80, points: 40, online: true },
// ];
// const onlinePlayers = players.filter((player) => player.online);
// // console.table(onlinePlayers);
// const offlinePlayers = players.filter((player) => !player.online);
// // console.table(offlinePlayers);

//==============================================
//find
//находит тольк оодин элемент
// const numbers = [5, 10, 15, 20, 25];
// const number = numbers.find((number) => number === 10);
// console.log(number);
// const players = [
//   { id: `player-1`, name: `mango`, timePlayed: 310, points: 54, online: false },
//   { id: `player-2`, name: `poly`, timePlayed: 478, points: 92, online: true },
//   { id: `player-3`, name: `kiwi`, timePlayed: 238, points: 48, online: true },
//   { id: `player-4`, name: `ajax`, timePlayed: 150, points: 71, online: false },
//   { id: `player-5`, name: `chelsy`, timePlayed: 80, points: 40, online: true },
// ];

// const playerIdToFind = `player-3`;
// const playerWithId = players.find(({ id }) => id === playerIdToFind);
// console.log(playerWithId);
// //напишем функцию
// const findPlayerById = (allPlayer, playerId) => {
//   return allPlayer.find((player) => player.id === playerId);
// };
// console.log(findPlayerById(players, `player-1`));
// const playerNameToFind = `poly`;
// const playerWithName = players.find(
//   (player) => player.name === playerNameToFind
// );
// console.log(playerNameToFind);

//=====================================================
//every and some
//every -проверяет все єлементы массива если все такие - тру
// const players = [
//   { id: `player-1`, name: `mango`, timePlayed: 310, points: 54, online: false },
//   { id: `player-2`, name: `poly`, timePlayed: 478, points: 92, online: true },
//   { id: `player-3`, name: `kiwi`, timePlayed: 238, points: 48, online: true },
//   { id: `player-4`, name: `ajax`, timePlayed: 150, points: 71, online: false },
//   { id: `player-5`, name: `chelsy`, timePlayed: 80, points: 40, online: true },
// ];
// const isAllOnline = players.every((player) => player.online);
// // console.log(isAllOnline);
// //а все элементы онлайн? нет - поэтому возвращает фолс. если бы все были онлайн - было бы тру
// //some - возвращает тру когда хотя бы один элемент удовлетворяет условие - тру, если нет фолс

// const isAnyOnline = players.some((player) => player.online);
// console.log(isAnyOnline);
//возвращает онлайн - так как да один точно онлайн

//=======================================================
//reduce
//швейцарский нож работы с коллекцией
// const numbers = [5, 10, 15, 20, 25];
// const total = numbers.reduce((acc, number) => {
//   return acc + number;
// }, 0);
// console.log(total);
// //0 - это начальное значение акк, если его не задать будет первое из масива

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };
// const totalSalary = Object.values(salary).reduce(
//   (total, value) => total + value,
//   0
// );
// console.log(totalSalary);

// const players = [
//   { id: `player-1`, name: `mango`, timePlayed: 310, points: 54, online: false },
//   { id: `player-2`, name: `poly`, timePlayed: 478, points: 92, online: true },
//   { id: `player-3`, name: `kiwi`, timePlayed: 238, points: 48, online: true },
//   { id: `player-4`, name: `ajax`, timePlayed: 150, points: 71, online: false },
//   { id: `player-5`, name: `chelsy`, timePlayed: 80, points: 40, online: true },
// ];

// const totalTimePlayed = players.reduce(
//   (totalTime, player) => totalTime + player.timePlayed,
//   0
// );
// console.log(totalTimePlayed);

// //посичатем корзину товаров
// const card = [
//   { label: `apples`, price: 100, quantity: 2 },
//   { label: `tomatoes`, price: 200, quantity: 3 },
//   { label: `bananas`, price: 300, quantity: 4 },
// ];
// const totalAmount = card.reduce(
//   (total, { price, quantity }) => total + price * quantity,
//   0
// );
// console.log(totalAmount);

const tweets = [
  { id: `800`, likes: 5, tags: [`js`, `node.js`] },
  { id: `800`, likes: 2, tags: [`html`, `css`] },
  { id: `800`, likes: 15, tags: [`js`, `html`, `node.js`] },
  { id: `800`, likes: 45, tags: [`js`, `react`] },
  { id: `800`, likes: 55, tags: [`node.js`] },
];
// const allTags = tweets.reduce((tags, tweet) => {
//   tags.push(tweet.tags); //пушится как массивы тегов (много)
//   tags.push(...tweet.tags); //будет один массив из последовательносетй тегов
//   return tags;
// }, []);
// console.log(allTags);

//более правиолтно написать так как нижн, так не будут кричат ьлинкеры (кто???_)
const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
console.log(allTags); //получааем перечисление тегов

//а теперь надо посмотреть сколько какаого тега поставили раз
// const tagsStats = allTags.reduce((acc, tag) => {
//   console.log(acc);
//   if (acc[tag]) {
//     acc[tag] += 1;

//     return acc;
//   }
//   acc[tag] = 1;
//   return acc;
// }, {});
//проверяет если есть - жобавляет один а если нет, записывает новый и добавляет одни
//сокращаем, переписываем иммутабельно -
const tagsStats = allTags.reduce(
  (acc, tag) => ({
    ...acc,
    [tag]: acc[tag] ? acc[tag] + 1 : 1,
  }),
  {}
);
console.log(tagsStats);
