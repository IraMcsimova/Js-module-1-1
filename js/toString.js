console.log('toString');

//toString

//number-to-string
let value = 0;
//1 way
let toString = String(value);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);

//2way

toString = value + "";
console.log(`тип данных ${value}, через конкатенацию String(): `, typeof toString);
//examples

value = Infinity;
toString = String(value);
console.log(`type of data ${value} via string sonstructor: `, typeof toString);

toString = value + "";
console.log(`type of data ${value} via concatination: `, typeof toString);

value = undefined;
toString = String(value);
console.log(`type of data ${value} via string constructor: `, typeof toString);

toString = value + "";
console.log(`type of data ${value} via concatination: `, typeof toString);