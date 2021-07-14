console.log('toNumber');

// toNumber
// string-to-number

let value = "Bla bla blacka";
//1way
let toNumber = Number(value);
console.log(`${value}, via constructor Number(): `, toNumber);
console.log(`type of data ${value}, via constructor Number(): `, typeof toNumber);
//2way
toNumber = +value;
console.log(`${value}, via constructor Number(): `, toNumber);
console.log(`type of data ${value}, через унарный +: `, typeof toNumber);
//
value="123";
toNumber = Number(value);
console.log(`${value}, via constructor Number(): `, toNumber);
console.log(`type of data ${value}, via constructor Number(): `, typeof toNumber);

toNumber = +value;
console.log(`${value}, via constructor Number(): `, toNumber);
console.log(`type of data ${value}, через унарный +: `, typeof toNumber);
//пустая строка
value="";
toNumber = Number(value);
console.log(`empty string ${value}, via constructor Number(): `, toNumber);
console.log(`type of data ${value}, via constructor Number(): `, typeof toNumber);

toNumber = +value;
console.log(`empty string ${value}, via constructor Number(): `, toNumber);
console.log(`type of data ${value}, через унарный +: `, typeof toNumber);
//строка с пробелом
value=" ";
toNumber = Number(value);
console.log(`string with space ${value}, via constructor Number(): `, toNumber);
console.log(`type of data ${value}, via constructor Number(): `, typeof toNumber);

toNumber = +value;
console.log(`string with space ${value}, via constructor Number(): `, toNumber);
console.log(`type of data ${value}, через унарный +: `, typeof toNumber);

//булевое логическое значение true к числу
value = true;
toNumber = Number(value);
console.log(`${value}, via constructor Number(): `, toNumber);
console.log(`type of data ${value}, via constructor Number(): `, typeof toNumber);

toNumber = +value;
console.log(`${value}, via constructor Number(): `, toNumber);
console.log(`type of data ${value}, через унарный +: `, typeof toNumber);

value = false;
toNumber = Number(value);
console.log(`${value}, via constructor Number(): `, toNumber);
console.log(`type of data ${value}, via constructor Number(): `, typeof toNumber);

toNumber = +value;
console.log(`${value}, via constructor Number(): `, toNumber);
console.log(`type of data ${value}, через унарный +: `, typeof toNumber);

//undefined to number
value = undefined;
toNumber = Number(value);
console.log(`${value}, via constructor Number(): `, toNumber);
console.log(`type of data ${value}, via constructor Number(): `, typeof toNumber);

toNumber = +value;
console.log(`${value}, via constructor Number(): `, toNumber);
console.log(`type of data ${value}, через унарный +: `, typeof toNumber);

//null to number
value = null;
toNumber = Number(value);
console.log(`${value}, via constructor Number(): `, toNumber);
console.log(`type of data ${value}, via constructor Number(): `, typeof toNumber);

//тип данных null  при этом изменится с object на number!!!

toNumber = +value;
console.log(`${value}, via constructor Number(): `, toNumber);
console.log(`type of data ${value}, через унарный +: `, typeof toNumber);
