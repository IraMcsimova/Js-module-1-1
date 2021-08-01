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

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   console.log(color.hex);
//   console.log(color.rgb);

//   hexColors.push(color.hex);
//   console.log(hexColors);

//   rgbColors.push(color.rgb);
//   console.log(rgbColors);
// }

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for (const product of products) {
//     console.log(product.name);
//     if (product.name === productName) {
//       return;
//     }
//   }
//   // Change code above this line
// }
// getProductPrice("Grip");

//
// function getProductPrice(productName) {
//   // Change code below this line
//   for (const product of products) {
//     if (productName === product.name) {
//       return product.price;
//     }
//   }

//   return null;
//   // Change code above this line
// }

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// const result = [];
// function getAllPropValues(propName) {
//   // Change code below this line
//   for (const product of products) {
//     console.log(product);
//     if (product.hasOwnProperty(propName)) {
//       result.push(product[propName]);

//       console.log(result);
//     }
//   }
//   return result;

//   // Change code above this line
// }
// getAllPropValues("name");
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function calculateTotalPrice(productName) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки
//   for (const product of products) {
//     console.log(product.price);
//     if (product.name === productName) {
//       console.log(product.price);
//       totalPrice += product.price * product.quantity;
//       console.log(totalPrice);
//       // return totalPrice;
//       // Пиши код выше этой строки
//     }
//   }
// }
// calculateTotalPrice("Grip");

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// console.log(icon);
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//   rgbColors.push(rgb);
//   hexColors.push(hex);
// }
// console.log(hexColors);
// console.log(rgbColors);

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const {
//   today: {
//     high: highToday,
//     low: lowToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;
// console.log(highToday);

// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: lowToday, high: highToday },
//     tomorrow: { low: lowTomorrow, high: highTomorrow },
//   } = forecast;
// }
// calculateMeanTemperature({
//   today: { low: 28, high: 32 },
//   tomorrow: { low: 25, high: 29 },
// });
// console.log(low);

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);
// console.log(bestScore);
// console.log(worstScore);

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// let data = {
//   completed: "false",
//   category: "General",
//   priority: "Normal",
// };
// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   return { completed, category, priority, ...data };
//   // Change code above this line
// }
//Вызов makeTask({ category: 'Finance', text: 'Take interest' })
//возвращает { category: 'Finance', priority: 'Normal', text: 'Take interest', completed: false }

// function add(...args) {
//   let total = 0;
//   for (const arg of args) {
//     console.log(arg);
//     total += arg;
//   }
//   console.log(total);
//   // Change code above this line
// }
// add(15, 27);

// function addOverNum(value, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     console.log(value);
//     console.log(arg);
//     if (arg > value) total += arg;
//   }
//   console.log(total);
//   return total;
//   // Change code above this line
// }
// // addOverNum(50, 15, 27);

// addOverNum(10, 12, 4, 11, 48, 10, 8);

// function findMatches(array, ...args) {
//   const matches = []; // Don't change this line
//   console.log(array);
//   console.log(args);
//   for (let arg of args) {
//     console.log(arg);
//     if (array.includes(arg)) {
//       matches.push(arg);
//     }
//   }
//   console.log(matches);
//   // Change code above this line
//   return matches;
// }
// // findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2);

//если у оьбьекта свойство -это функция, тогда эта дичь называется - метод обьекта
// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
//   // Change code above this line
// };
// const bookShelf = {
//   books: ["Последнее королевство"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // []
// bookShelf.addBook("Мгла");
// bookShelf.addBook("Страж снов");
// console.log(bookShelf.getBooks()); // ["Последнее королевство", "Мгла", "Страж снов"]
// bookShelf.removeBook("Мгла");
// console.log(bookShelf.getBooks());

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const bookIndex = this.books.indexOf(oldName);
//     console.log(bookIndex);
//     const updatedBook = this.books.splice(bookIndex, 1, newName);
//     console.log(updatedBook);
//     // Change code above this line
//   },
// };
// bookShelf.updateBook("Haze", "Dungeon chronicles");

// const atTheOldToad = {
//   // Change code below this line
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   getPotions() {
//     console.log(this.potions);
//     return potions;
//   },
//   // Change code above this line
// };

//ВАЖНАЯ ЗАДАЧКА
// обидно что вообще ни разу не понятная:(
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Выполни рефакторинг методов объекта atTheOldToad так,
//чтобы они работали не с массивом строк, а с массивом объектов.
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     if (this.potions.includes(potionName)) {
//       return `Potion ${potionName} is already equipped!`;
//     }

//     this.potions.push(potionName);
//   },
// removePotion(potionName) {
//   const potionIndex = this.potions.indexOf(potionName);

//   if (potionIndex === -1) {
//     return `Potion ${potionName} is not in inventory!`;
//   }

//   this.potions.splice(potionIndex, 1);
// },

// removePotion(potionName) {
//   let potionIndex = 0;
//   const potion = this.potions;
//   for (let i = 0; i < potion.length; i += 1) {
//     if (potion[i].name === potionName) {
//       potionIndex = i;
//     }
//   }

//   if (potionIndex === -1) {
//     return `Potion ${potionName} is not in inventory!`;
//   }

//   this.potions.splice(potionIndex, 1);
// },

// updatePotionName(oldName, newName) {
//   const potionIndex = this.potions.indexOf(oldName);

//   if (potionIndex === -1) {
//     return `Potion ${oldName} is not in inventory!`;
//   }

//   this.potions.splice(potionIndex, 1, newName);
// },

//   updatePotionName(oldName, newName) {
//     let potionIndex = 0;
//     const potion = this.potions;
//     for (let i = 0; i < potion.length; i += 1) {
//       if (potion[i].name === oldName) {
//         potionIndex = i;
//       }
//     }

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions[potionIndex].name = newName;
//   },
//   // Change code above this line
// };
// console.log(atTheOldToad.getPotions());

// console.log(this);
// ("use strict");
// console.log(this);
// let arr = [0, 1, 2, 3, 4];
// console.log(arr);
// console.log(Array.isArray(arr));
const printMessage = function (message) {
  console.log(message);
};

const higherOrderFunction = function (callback) {
  const string = "HOCs are awesome";
  callback(string);
};

higherOrderFunction(printMessage);
