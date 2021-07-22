// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     // Change code below this line
      
//     if (password === ADMIN_PASSWORD) {
//       return "Welcome!";
//     } 
//       return "Access denied, wrong password!";
//     }

//     // Change code above this line

    // function checkStorage(available, ordered) {
    //     // Change code below this line

    //     if (ordered === 0) {
    //      return "Your order is empty!";
    //     } if (ordered > available) {
    //      return "Your order is too large, not enough goods in stock!";
    //     }
    //       return "The order is accepted, our manager will contact you";
    //     }
    //     // Change code above this line
      
    // const fruits = ["apple", "plum", "pear", "orange"];

    // // Change code below this line
    // const firstElement = fruits[0];
    // const secondElement = fruits[1];
    // const lastElement = fruits[3];
    // console.log(lastElement)
    // const fruits = ["apple", "plum", "pear", "orange"];

    // // Write your code under this line
    // fruits[1] = `peach`
    // fruits[3] = `banana`
//     // console.log (fruits)
//     const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const fruitsArrayLength = fruits.length
//     console.log (fruits)

//     const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length-1
// const lastElement = fruits[lastElementIndex]

// function getExtremeElements(array) {
//     // Change code below this line
//   const newArr = [];
//   newArr.push(array[0],array[array.length -1])
//   return newArr;
//   } 

//   function splitMessage(message, delimeter) {
//     let words;
//     // Change code below this line
//    words = message.split(delimeter);
//     // Change code above this line
//     return words;
//   }

    // Change code below this line
    // let message = `JavaScript is in my blood`
    // let pricePerWord = 10
    // const messageSplit = message.split(' ');
    // console.log (messageSplit.length*pricePerWord)

    // // Change code above this line
    // function makeStringFromArray(array, delimeter) {
    //     let string;
    //     // Change code below this line
      
    //   string = array.join(delimeter)
      
    //     // Change code above this line
    //     return string;
    // //   }
    // function slugify(title) {
        // Change code below this line
//       let title = `I love JavaScript and hope it loves me`
//      let slug = title.toLowerCase().replace(/ /g, '-')
//      console.log(slug)
      
//         // Change code above this line
//         const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

//         // Change code below this line
//         const firstTwoEls = fruits.slice(0,2);
//         const nonExtremeEls = fruits.slice(1,4);
//         const lastThreeEls = fruits.slice(-3);
// //
//         const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line
// let firstArray=['I', 'love', 'js']
// let secondArray=['and', 'hope', 'it','loves', 'me']
// let maxLength=7
// let newArray = firstArray.concat(secondArray)
// console.log(newArray)
// if(newArray.length<maxLength){
//     console.log(newArray)
// } else {
//     console.log(newArray.slice(0,maxLength))
// }
// //or you can do as coded below
// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line

// let newArray = firstArray.concat(secondArray)

// if(newArray.length<maxLength){
//   return newArray
// } 
//    return newArray.slice(0,maxLength)
// }
// let number = 3;
// let calculateTotal=0
// for (let i=1; i<=number; i+=1)[
//     calculateTotal+=i
// ]
// console.log (calculateTotal)

// // or you can code 
// function calculateTotal(number) {
//     // Change code below this line
//      let calculateTotal = 0;
//    for(let i=1; i<=number; i+=1){
//     calculateTotal += i;
//    }
//    return calculateTotal
//      // Change code above this line
//    }
//
//через циклfjr можем перебрать массив след.образом
//    const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i<fruits.length; i+=1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }
 
// let calculateTotalPrice = [12, 85, 37, 4];
// let total = 0;
// for (let i=0; i<calculateTotalPrice.length; i+=1){
//     total += calculateTotalPrice[i]
// }
// console.log(total)

//самое длинное слово в массиве можно выбрать так
// function findLongestWord(string) {
//     // Change code below this line
//    let arrStr = string.split(' ');
//     let wordLength = 0;
//     let longestWord = 0;
  
//     for (let i = 0; i <= arrStr.length; i += 1) {
//       wordLength = arrStr[1].length;
  
//       if (arrStr[i].length > wordLength) {
//         longestWord = arrStr[i];
//         return longestWord;
//       }
//     }
//     // Change code above this line
//   }
  //лтбо так
let findLongestWord ="The quick brown fox jumped over the lazy dog"

let longestWordSplit=findLongestWord.split(' ');
let longestWord = 0;
let wordLength = 0;
for (let i = 0; i <= longestWordSplit.length; i += 1) {
    wordLength = longestWordSplit[1].length;

    if (longestWordSplit[i].length > wordLength) {
      longestWord = longestWordSplit[i];
    }
console.log(longestWord)
  }



