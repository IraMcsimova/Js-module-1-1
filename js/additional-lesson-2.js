//CRUD
//creat - addItem
//read - showItem
//update - updateItem
//delete - removeItem

// let items = [
//   { id: `id-1`, name: `apple`, price: 35, qty: 500, category: `fruits` },
//   { id: `id-2`, name: `potato`, price: 15, qty: 875, category: `fruits` },
//   { id: `id-3`, name: `bananas`, price: 27, qty: 400, category: `fruits` },
//   { id: `id-4`, name: `tomatoes`, price: 25, qty: 650, category: `fruits` },
// ];
// let total = 0;
// for (let item of items) {
//   //   console.log(item);
//   //   console.log(item.price);
//   //   console.log(item.category);

//   //   console.log(item.price * item.qty);
//   total += item.price * item.qty;
// }
// console.log(total);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//а теперь с деструктуризацией
// чтобы понять как записать деструктуризацию, сомтрим что ламаем, обьект или массив?
//в нашем случае - обьект айтем, пишем скобы соответсвтенные, потом пишем название массива или обьекта
//а в с кобы добавляем то что нам надо вытянуть

// let total = 0;
// // const { price, qty } = item;
// //итак делаем рефаткоринг кода с деструктуризацией
// for (let { price, qty } of items) {
//   console.log(price * qty);
//   total += price * qty;
// }
// console.log(total);

//НЕ важно где обьявлена функция. важно кто ее вызывает!!!!!!!!!!!!!!!
//вызывает функцию тот кто стоит слева от точки
// alert(`hello`);
// window.alert(`widow hello`);
// this.alert(`this alert`);

//this -контекст вызова, тот кто вызывает функцию
// function sum(a, b) {
//   console.log(a + b);
//   console.log();
// }
// sum(5, 10); //точка стоит всегда, либо мы ее ставим либо сам JS
//кто вызвал функцию? Window...так как функция обьявлена в глобальном просстранстве(глобальный обьект)

// let userVova = {
//   name: `vova`,
//   age: 25,
//   showThis() {
//     console.log(this);
//   },
//   getInfo() {
//     this.showThis();
//     console.log(this.name, this.age);
//   },
// };
// userVova.getInfo(); //функцию вызывает юзерВова

// let userSara = {
//   name: `Sara`,
//   age: 45,
//   showThis() {
//     console.log(this);
//   },//   getInfo() {
//     this.showThis();
//     console.log(this.name, this.age);
//     sum(5, 10);
//   },}
// userSara.getInfo(); //функцию вызывает юзерСара

// let userVova = {
//   name: `vova`,
//   age: 25,

//   getInfo() {
//     console.log(this.name, this.age); //вова
//     console.log(this); //сара после добавления бобюзера - боб
//   },
// };
// userVova.getInfo(); //функцию вызывает юзерВова

// let userSara = {
//   name: `Sara`,
//   age: 45,
// };

// let userBob = {
//   name: `Bob`,
//   age: 51,
// };

// let userIra = {
//   name: `Ira`,
//   age: 33,
// };
// userSara.getInfo(); //функцию вызывает юзерСара

// userVova.getInfo.call(userSara); //возьми мне метод гетинфо обьекта вова и вызови его на обьекте сара
// userVova.getInfo.call(userBob); //берет временно метод из юзер вовы, и вставляет юзеру боб
// userVova.getInfo.call(userIra);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//SPREAD

// const citiesOfUkraine = [`Kiev`, `Kharkiv`, `Dnipro`, `Vinnytsya`];
// const citiesOfEurope = [`London`, `Paris`, `China`, `America`];
// const cities = [...citiesOfUkraine, `Canada`, ...citiesOfEurope, `new York`];
// console.log(cities);

let items = [
  { id: `id-1`, name: `apple`, price: 35, qty: 500, category: `fruits` },
  { id: `id-2`, name: `potato`, price: 15, qty: 875, category: `fruits` },
  { id: `id-3`, name: `bananas`, price: 27, qty: 400, category: `fruits` },
  { id: `id-4`, name: `tomatoes`, price: 25, qty: 650, category: `fruits` },
];

let shop = {
  items,

  title: `Silpo`,
  address: `Kyiv`,

  showInfo() {
    // console.log(`${this.title} and ${this.address}`);
  },

  showItems() {
    for (let pizza of items) {
      // console.log(`${pizza.name} and ${pizza.price} and ${pizza.category}`);
    }
  },

  // addItems(newItem) {
  //   this.items.push(newItem);
  // },
  //або без пуша доюавить в масив
  //с помощью спреада
  // addItems(newItem) {
  //   this.items = [...this.items, newItem];
  // },

  //
  addItems(id, name, price, qty, category) {
    let newItem = {
      id,
      name,
      price,
      qty,
      category,
    };
    this.items = [...this.items, newItem];
  },
  // updateItem(productName, newName) {
  //   for (let item of this.items) {
  //     console.log(item);
  //     if (item.name === productName) {
  //       console.log(`${item.name} is found`);
  //       item.name = newName;
  // return
  //     }
  //   }
  //   console.log(`${productName} are not found`);
  // },


 updateItem(productName, newName) {
   if (this.findItem(productName)){
     let item=this.findItem(productName)
       item.name = newName;
console.log(item)
   }
    for (let item of this.items) {
      console.log(item);
      if (item.name === productName) {
        console.log(`${item.name} is found`);
        item.name = newName;
  return
      }
    }
    console.log(`${productName} are not found`);
  },



  // updateItem(productName, newName) {
  //   for (let i = 0; i < this.items.length; i += 1) {
  //     console.log(this.items[i].name);
  //     if (this.items[i].name === productName) {
  //       this.items[i].name = newName;
  //       return;
  //     }
  //   }
  //   console.log(`${productName} are not found`);
  // },

  
  // removeItem(productName) {
  //   for (let item of this.items) {
  //     console.log(item);
  //     if (productName === item.name) {
  //       console.log(`${productName} is found`);
  //       const itemIndex = this.items.indexOf(item);
  //       console.log(itemIndex);
  //       this.items.splice(itemIndex, 1);
  //       return;
  //     }
  //   }
  //   console.log(`not found`);
  

  removeItem(productName) {
    for (let i =0; i<this.items.length; i+=1) {
     if(productName===this.items[i].name){
       this.items.splice(i,1)
       return
     }
      }  console.log(`not found`);
    },


  findItem (productName){
for(let item of this.items){
    console.log(item)

  if (productName===item.name){

      return item
  }
}
  }
  },


// shop.showInfo();
// shop.showItems();

// const newItem = {
//   id: `id-5`,
//   name: `kiwi`,
//   price: 30,
//   qty: 250,
//   category: `fruits`,
// };
// shop.addItems(newItem);
// shop.addItems(`id-5`, `mango`, 30, 250, `fruits`);
// shop.showInfo();
// shop.showItems();
// shop.updateItem(`bananas`, `gold bananas`);
// shop.removeItem(`tomatoes`);
shop.findItem (`tomatoes`)
shop.showItems();
