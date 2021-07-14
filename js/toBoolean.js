console.log('toBoolean');

//TO BOOLEAN
//string-to-boolean

let value = "blablabla";
//1way
let toBoolean = Boolean(value);
console.log(`${value}, via constructor Boolean(): `, toBoolean);
console.log(`${value}, via constructor Boolean(): `, typeof toBoolean);
//2way
toBoolean = !!value;
console.log(`${value}, via !!: `, toBoolean);
console.log(`${value}, via !!: `, typeof toBoolean);
//any string number
value = "123";
//1way
toBoolean = Boolean(value);
console.log(`${value}, via constructor Boolean(): `, toBoolean);
console.log(`${value}, via constructor Boolean(): `, typeof toBoolean);
//2way
toBoolean = !!value;
console.log(`${value}, via !!: `, toBoolean);
console.log(`${value}, via !!: `, typeof toBoolean);
//empty string
value = "";
//1way
toBoolean = Boolean(value);
console.log(`${value}, empty string via constructor Boolean(): `, toBoolean);
console.log(`${value}, via constructor Boolean(): `, typeof toBoolean);
//2way
toBoolean = !!value;
console.log(`${value}, empty string via !!: `, toBoolean);
console.log(`${value}, via !!: `, typeof toBoolean);
//string with space
value = " ";
//1way
toBoolean = Boolean(value);
console.log(`${value}, string with space via constructor Boolean(): `, toBoolean);
console.log(`${value}, via constructor Boolean(): `, typeof toBoolean);
//2way
toBoolean = !!value;
console.log(`${value}, string with space via !!: `, toBoolean);
console.log(`${value}, via !!: `, typeof toBoolean);

//number-to-boolean


value = 0;
//1way
toBoolean = Boolean(value);
console.log(`${value}, string with space via constructor Boolean(): `, toBoolean);
console.log(`${value}, via constructor Boolean(): `, typeof toBoolean);
//2way
toBoolean = !!value;
console.log(`${value}, string with space via !!: `, toBoolean);
console.log(`${value}, via !!: `, typeof toBoolean);

value = 1;
//1way
toBoolean = Boolean(value);
console.log(`${value}, string with space via constructor Boolean(): `, toBoolean);
console.log(`${value}, via constructor Boolean(): `, typeof toBoolean);
//2way
toBoolean = !!value;
console.log(`${value}, string with space via !!: `, toBoolean);
console.log(`${value}, via !!: `, typeof toBoolean);

value = undefined;
//1way
toBoolean = Boolean(value);
console.log(`${value}, via constructor Boolean(): `, toBoolean);
console.log(`${value}, via constructor Boolean(): `, typeof toBoolean);
//2way
toBoolean = !!value;
console.log(`${value}, via !!: `, toBoolean);
console.log(`${value}, via !!: `, typeof toBoolean);

value = null;
//1way
toBoolean = Boolean(value);
console.log(`${value},via constructor Boolean(): `, toBoolean);
console.log(`${value}, via constructor Boolean(): `, typeof toBoolean);
//2way
toBoolean = !!value;
console.log(`${value}, via !!: `, toBoolean);
console.log(`${value}, via !!: `, typeof toBoolean);

value = NaN;
//1way
toBoolean = Boolean(value);
console.log(`${value},via constructor Boolean(): `, toBoolean);
console.log(`${value}, via constructor Boolean(): `, typeof toBoolean);
//2way
toBoolean = !!value;
console.log(`${value}, via !!: `, toBoolean);
console.log(`${value}, via !!: `, typeof toBoolean);

value = Infinity;
//1way
toBoolean = Boolean(value);
console.log(`${value},via constructor Boolean(): `, toBoolean);
console.log(`${value}, via constructor Boolean(): `, typeof toBoolean);
//2way
toBoolean = !!value;
console.log(`${value}, via !!: `, toBoolean);
console.log(`${value}, via !!: `, typeof toBoolean);

//IMPORTANT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//6 falsy значений:
//пустая строка
//числовой 0
//NaN
//null
//undefined
//false