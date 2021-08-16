//функция-конструктор
//мя всегда с большой буквы!!!!
// function Constructor(prop1, prop2) {
//   this.prop1 = prop1;
//   this.prop2 = prop2;
// }
// //вызов такой функции осуществляется обязательно с new!!!
// const newObj = new Constructor();

// const User = function (login, password) {
//   this.login = login;
//   this.password = password;
//   this.showLogin = function () {
//     console.log(this.login);
//   };
// };

// User.prototype.showPassword = function () {
//   console.log(this.password);
// };
// //записываем необходимую функцию через прототайп функции-конструктора,
// // в следствие чего все элементы будут иметь доступ к этой функции

// //все методы в функциях-конструкторах - нужно записывать через прототип

// const user1 = new User(`user1`, `qweqwe`);
// console.log(user1);

// console.log(User.prototype);

// const user2 = new User(`user 2`, `tretre`);
// console.log(user2);

// //новая функция на базе исхожной

// function NewUser(name, age, login, password) {
//   User.call(this, login, password);
//   this.name = name;
//   this.age = age;
// }
// //перезаписываем прототайп новой функции
// //привязываем в него прототайп из исхожной

// NewUser.prototype = Object.create(User.prototype);
// NewUser.prototype.constructor = NewUser; //добавляем конструктор

// NewUser.prototype.updateAge = function () {
//   return (this.age += 1);
// };

// const newUser1 = new NewUser(`ira`, 33, `zIrka`, `blablabla`);
// console.log(newUser1);
// console.log(newUser1.updateAge());

//ПРИМЕРЫ==============================================
//ФУНКЦИИ_КОНСТРУКТОРЫ=================================

// function Post(title, text) {
//   this.title = title;
//   this.text = text;
// }

// Post.prototype.updateTitle = function (value) {
//   return (this.title = value);
// };

// const post1 = new Post();
// console.log(post1);

// function NewPost(title = `title`, text = `text`, imageUrl) {
//   Post.apply(this, [title, text]);
//   this.image = imageUrl;
// }

// console.log(NewPost.prototype);
// NewPost.prototype = Object.create(Post.prototype);
// NewPost.prototype.constructor = NewPost;

// NewPost.prototype.updateImage = function (url) {
//   return (this.image = url);
// };

// const newPost = new NewPost(undefined, undefined, `image`);
// // console.log(newPost1);
// /// 3rd  внучатый прототип

// function BestPost(author, imageUrl, title, text) {
//   NewPost.call(this, imageUrl, title, text);
//   this.author = author;
// }
// BestPost.prototype = Object.create(NewPost.prototype);
// BestPost.prototype.constructor = BestPost;
// BestPost.prototype.showAuthor = function () {
//   console.log(this.author);
// };
// const bestPost1 = new BestPost(`Anatoliy`);
// console.log(bestPost1);
// bestPost1.showAuthor();
// bestPost1.updateImage(`url`);
// bestPost1.updateTitle(`na-na-na`);
