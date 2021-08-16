function bake(degrees) {
  let message;
  if (degrees > 500) {
    message = `I'm not a nuclear reactor!`;
  } else if (degrees < 100) {
    message = "I' not a refrigerator";
  } else {
    message = `that\'s a very comfortable temperature for baking`;
    // setMode(`bake`);
    // setTemp(degrees);
  }
  return message;
}
let status = bake(350);
console.log(status);

// function calculateArea(r) {
//   let area;
//   if (r <= 0) {
//     return 0;
//   } else {
//     area = Math.PI * r * r;
//     return area;
//   }
// }
// var radius = 5.3;
// var theArea = calculateArea(radius);
// console.log(`the area is ${theArea}`);

const calculateArea = function (r) {
  let area;
  if (r <= 0) {
    return 0;
  } else {
    area = Math.PI * r * r;
    return area;
  }
};
var radius = 5.3;
var theArea = calculateArea(radius);
console.log(`the area is ${theArea}`);
