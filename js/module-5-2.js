//CLASS
//ES6
// class Class {
//   constructor(prop1 = 0, prop2 = 2) {
//     this.prop1 = prop1;
//     this.prop2 = prop2;
//   }
//   //добавляем методы-консторукторы
//   method1() {
//     console.log(this.prop1);
//   }
//   method2() {
//     return (this.prop2 = value);
//   }
// }

//EXAMPLES
//исхожный класс
// class User {
//   constructor(login, password) {
//     this.login = login;
//     this.password = password;
//   }
//   showLogin() {
//     // console.log(this.login);
//   }
// }

//экземпляр исхожного класс
// const user1 = new User(`user1`, `qweqwe`);
// // console.log(user1);

// //новый (наследуемый) класс на базе исхожного
// class NewUser extends User {
//   constructor(name, age, login, password) {
//     //инициализируем исхожный класс
//     super(login, password);
//     this.name = name;
//     this.age = age;
//   }
//   updateAge() {
//     return (this.age += 1);
//   }
// }
//экземпляр нового класс
// const newUser1 = new NewUser(`Anatoliy`, 33, `Tolyanchyk`, `ghjkl`);
// console.log(newUser1);
// console.log(newUser1.updateAge());
// newUser1.showLogin();

//========================================================================
//свойства-аксессоры getter $ setter

// class BaseProduct {
//   constructor(title, price) {
//     this._title = title;
//     this._price = price;
//   }
//   //нижнее подчеркивание возле прайс уже оворит разрабботчику что у этого свойства есть геттер и сеттер
//   get price() {
//     return this._price;
//   }
//   //getter никогда не ждет никаккого значения
//   set price(value) {
//     return (this._price = value);
//   }
//   //сеттер ожидает значение которое дописывает в наше свойство
//   get title() {
//     return this._title;
//   }
//   set title(value) {
//     return (this._title = value);
//   }
// }
// const baseProduct = new BaseProduct(`banana`, 25);
// console.log(baseProduct);
// console.log(`свойство _price:`, baseProduct._price); //плохой метод достучаться к свйоству
// console.log(`by getter price`, baseProduct.price); //отличный метод
// baseProduct.price = 35; //вызов сеттера
// console.log(`by getter price`, baseProduct.price);

// console.log(`свойство _price:`, baseProduct._title); //плохой метод достучаться к свйоству
// console.log(`by getter price`, baseProduct.title); //отличный метод

// baseProduct.title = `lemon`; //вызов сеттера
// console.log(`by getter price`, baseProduct.title);

//============================================================
//статические свойства и методы

// class Comment {
//   //   name = `anonim`;
//   static name = `anonim`;
//   static showName(name) {
//     console.log(this.name);
//   }
//   //если добавить static то у коммента не будет такого свойства у экземпляра, а только у класса комент!
//   constructor(author, text) {
//     this.author = author;
//     this.text = text;
//   }
// }
// const comment1 = new Comment(`Pushkin`, `красотa мир не спасет, а мир может`);
// console.log(comment1);
// console.log(comment1.author);
// console.log(comment1.text);
// console.log(comment1.name); // undefined (статические или личные свойс тва не доступны экзе мплярам)
// console.log(Comment.name); // такое свойство есть (оно личное, статическое)

//========================================================================
//ПРАКТИКА
class BaseProduct {
  constructor(name, price, category) {
    this.name = name;
    this._price = price;
    this.category = category;
  }
  get price() {
    return this._price;
  }
  set price(value) {
    return (this._price = value);
  }
}
class WeightProduct extends BaseProduct {
  constructor(weight, name, price, category) {
    super(name, price, category);
    this.weight = weight;
  }
  getTotalCost() {
    console.log(this.weight * this._price);
  }
  decrWeight(value) {
    if (this.weight - value < 0) {
      console.log(`товара недостатосно на складе`);
    } else {
      return (this.weight -= value);
    }
  }
  incWeight(value) {
    console.log(`после прихода товара:`, (this.weight += value));
    return (this.weight += value);
  }
}
const weightProduct = new WeightProduct(0.5, `lemon`, 30, `the best `);
weightProduct.getTotalCost();
console.log(weightProduct);
console.log(`остаток`, weightProduct.decrWeight(2));
weightProduct.incWeight(7);

class CountProduct extends BaseProduct {
  constructor(count, name, price, category) {
    super(name, price, category);
    this.count = count;
  }
  getTotalCost() {
    console.log(this.count * this.price);
  }
  decCount(value) {
    return this.count - value < 0
      ? `нет у меня столько сладостей`
      : (this.weight += value);
  }
  incCount(value) {
    return (this.content += value);
  }
}
const countProduct = new CountProduct(100, `snickers`, 25, `sweets`);
console.log(countProduct);
countProduct;
