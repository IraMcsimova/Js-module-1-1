console.log(`module-6-2`);

//что такое трансформация - создание массива такой же длины что и предыдущий
// что такое мутация - изменение текущего массива без создания нового (ая-яй)

// let name = `oleh`;
// let age = 18;
// const user = {
//   name,
//   age,
// };
// const array = [user];
// let result = array.map((elem) => console.log(elem));

//задачки
//===================================================
const arr = [
  { name: `albert`, surname: `einstein`, born: 1879, dead: 1955, id: 1 },
  { name: `isaak`, surname: `newton`, born: 1643, dead: 1975, id: 2 },
  { name: `galileo`, surname: `galilei`, born: 1534, dead: 1995, id: 3 },
  { name: `marie`, surname: `curie`, born: 1879, dead: 1955, id: 4 },
  { name: `johannes`, surname: `kepler`, born: 1569, dead: 1955, id: 5 },
  { name: `nicolaus`, surname: `copernicus`, born: 1947, dead: 2000, id: 6 },
  { name: `max`, surname: `planck`, born: 1857, dead: 1904, id: 7 },
  { name: `katherine`, surname: `blodgett`, born: 1898, dead: 1900, id: 8 },
  { name: `ada`, surname: `lovelace`, born: 1813, dead: 1899, id: 9 },
  { name: `sarah e.`, surname: `goode`, born: 1876, dead: 1945, id: 10 },
  { name: `lise`, surname: `meitner`, born: 1822, dead: 1905, id: 11 },
  { name: `hanna`, surname: `Hammarstrom`, born: 1828, dead: 1911, id: 12 },
];
console.log(arr);

// const consdition = obj.born >= 1900 && obj.born < 1900;
// arr.filter((obj) => {
//   return consdition;
// });
// console.log(result);

//найдите ученных 19 века
// let result = arr.filter((obj) => obj.born >= 1800 && obj.born < 1900);
// console.log(result);

// //obj.dead-obj.born
// result = arr.reduce((acc, obj) => {
//   //   console.log(acc, obj);
//   //   let age = obj.dead - obj.born;
//   acc += obj.dead - obj.born;
//   return acc;
// }, 0);
// console.log(result); //сумма прожитых лет всех ученных

//сортируем ученных по алфавиту (по фамилии)

let result = arr.sort((a, b) => {
  a.name - b.name;
});
console.log(result);
