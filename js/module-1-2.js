console.log('module-1-2')
console.log(`i love Js and hope it loves me`)
//логические операторы
//&& - жесткая проверка тру
console.log('I love JavaScript' && 1);
//true&&true возвращает последнее тру
console.log('react' && 1 && true);
//true&&true&&true
console.log(0 && flase && 'React' &&1);
//false&&false&&true&&true

//example

// let minPrice = 100;
// let maxPrice = 200;
// let currentPrice = 80;
// if(currentPrice >= minPrice && currentPrice <= maxPrice){
//     console.log(`I can buy it now`)
// } else {
//     console.log(`This price is not appropriate`);
// };

// //|| ИЛИ - не жесткая проверка тру
// console.log("true" || true);
// //возвращает первое тру
// console.log("true" || false);
// //вернет первое тру
// console.log("true" || 0 || NaN);
// //вернет ложь последнюю ложь если все ложные значения
// let minPrice = 100;
// let maxPrice = 200;
// let currentPrice = 80;
// if(currentPrice >= minPrice && currentPrice <= maxPrice){
//     console.log(`I can buy it now`)
// } else {
//     console.log(`This price is not appropriate`);
// };

//|| - не жесткая проверка тру
console.log("true" || true);
//возвращает первое тру
console.log("true" || false);
//вернет первое тру
console.log("true" || 0 || NaN);


let minPrice = 100;
let maxPrice = 200;
let currentPrice = 80;
if(currentPrice >= minPrice || currentPrice <= maxPrice){
    console.log(`I can buy it now`)
} else {
    console.log(`This price is not appropriate`);
};

//логическое И проверит оба (все условия и слева и справа) 
//логическо ИЛИ проверит только одно из условий
let day = 'Sunday';
if(day === 'Monday' || day === 'true' || day === 'Wednesday' || day === 'Thursday'|| day === 'Friday'){
    console.log(`${day} - is workdays`)
}else {
    console.log(`${day} - is weekend`)
}


//логическое НЕ

console.log(!true);
console.log(!0);
//переворот к булю а потом преобразует в противоположное значение

console.log(!"object");
console.log(!NaN);


let enterPrompt = null;
if(!enterPrompt){console.log('User choose cancel')};

//двойное НЕ отрицание - дважды преобразовывает значени, приводит к булевому типу

console.log(!!1);
console.log(!!0);


//ветвления
//1.if(условие){команда вызовется если выполнится условие} 


//2.если и все остальные случаи (if, else)

let age = 5;
if (age >= 18){
    console.log(`you can enter!`)
} else{
    console.log(`go away you are too young`)
}
//алтьтернатива if...else - тернарный оператор
age>=18? console.log(`you can enter`): console.log (`go away!`);
//3.множественные условия (if, if else)

let a = 25;
if(a > 0 && a <=5){
    console.log(`0-5`)
} else if (a>5 && a<= 10){
    console.log(`6-10`)}
    else {
        console.log(`11-109`)
};

//SWITCH - альтернатива множественному условию
//full example
switch(day){
    case 'Monday':
        console.log(`is workday`)
        break
        case 'tuesday':
        console.log(`is workday`)
        break
        case 'Wednesday':
        console.log(`is workday`)
        break
        case 'Thursday':
        console.log(`is workday`)
        break
        case 'Friday':
        console.log(`is workday`)
        break
        default:
            console.log(`is weekend`)
};
//short example
day = `Monday`;
switch(day){
    case 'Monday':
        case 'tuesday':
       case 'Wednesday':
        case 'Thursday':
        case 'Friday':
        console.log(`is workday`)
        break
        default:
            console.log(`is weekend`)
};

switch(a){
    case a > 0 && a <= 5:
        console.log('0-5')
        break
        case a>5 && a<10:
            console.log(`6-10`)
            break
            default:
                console.log (`more than 15`)
}

//is NaN - данные являются не числом?
//если реально не число - тру, а если число - фолс
console.log(isNaN(0)) // false -a number
console.log(isNaN(1)) //false - a number
console.log(isNaN(Infinity)) // false - a number 
console.log(isNaN(true)) // false - a number -1
console.log(isNaN(false)) // false - a number
console.log(isNaN('0')) // false - кавычки отбрасывает и получаем число - a number
console.log(isNaN(0.4)) // false - is a number

console.log(isNaN(NaN)) // true - not a number
console.log(isNaN(`NaN`))// true - not a number
console.log(isNaN(`false`)) // true - not a number
console.log(isNaN('0,4')) // true - not a number

//область вилимости определяется фигурными скобками {}
const result = 1 // - глобальная переменная
if (result>0){
    let result = 1
    result +=10
    console.log(`LOCAL:`, result)
}
//в одной глобальной области видимости нельзя чтоб было две одиннаковых переменные
//а в одной локальной ообасти (в фигурных скобках) можно несколько
console.log(`GLOBAL:`, result);
//глобальніе переменніе обьявляются через const!!!!!!!!!!!
//внутрри локальную переменную можно менять и задают через let


//цикл
//бесконечній цикл приводит к зависанию браузера
//какие бывают циклы
//while(){}
//do{}while(){} - сначала делает потом проверяет
// const max = 10;
// let y = 1;
// while(y<max){
//     y = y + 1
//     console.log(y)};
// повторять цикл до тех пор пока ... (в нашем случае пока 1 не станет 10)
const max = 10;
let y = 10;
let i=0
while(y<max){
    y = y + 1
        i+=1
    console.log(`итерация - ${i+1}:`, y)}
// - 10 не меньше 10 (фолс) поэтому все остальное не выполнится

do{
    y=y+1
    i+=1
    console.log(`итерация - ${i}:`, y)}
    while (y<max);

    //for - цикл со счетчиком
    //уникальность этого цикла в том что мы можем задать длину шага итерации, удобен для использования массивов
    //local i||j||k
    for (let i = 1; i<=10; i=i+4) // обьявили - до каких пор изменяем - как изменяем
    //можно i=i+1 можно i++ можно  i+=1 - синонимы
    {
        console.log(`${i}`)
    }
    for (let i = 1; i<=10; i=i+1) {
        if (i%2===0){
            console.log(`continue ${i}`)
            continue
        }
    }
    for (let i = 1; i<=10; i=i+2) {
        if (i%2===0){
            console.log(`break ${i}`)
           break
    }}
     
   
let fullName = "Ira Maksimova";
    function checkForName(fullName, name) {
        const result = fullName.includes("name"); // Change this line
         return result;
       }