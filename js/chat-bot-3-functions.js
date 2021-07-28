// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//   console.log(key);
//   console.log(apartment[key]);
//   keys.push(key);
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

//алілуя

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
//   // Change code above this line
// }

//подсчитываем свойства которые принадлежат объекту
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const key in object) {
//     console.log(key);
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//       console.log(propCount);
//     }
//   }
//   // Change code above this line
//   return propCount;
// }
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });

// const book = {
//   title: "Последнее королевство",
//   author: "Бернард Корнуэлл",
//   genres: ["историческая проза", "приключения"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значение свойства
//   console.log(book[key]);
// }
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   console.log(key);
//   console.log(apartment[key]);
//   values.push(apartment[key]);
//   console.log(values);
// }

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   const keys = Object.keys(object);
//   console.log(keys);

//   propCount = Object.keys(object).length;
//   console.log(propCount);
//   return propCount;
//   // Change code above this line
// }
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });

//а давай-ка расчитаем общую сумму затрат на зарплату сотрудничков

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const keys = Object.values(salaries);
//   console.log(keys);
//   for (const key of keys) {
//     totalSalary += key;
//   }
//   console.log(totalSalary);

//   // Change code above this line
//   return totalSalary;
// }
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 });

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line
for (const color of colors) {
  console.log(color.hex);
  console.log(color.rgb);

  hexColors.push(color.hex);
  console.log(hexColors);

  rgbColors.push(color.rgb);
  console.log(rgbColors);
}
