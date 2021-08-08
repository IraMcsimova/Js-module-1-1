let randomLoc = Math.floor(Math.random() * 5);
const location1 = randomLoc;

const location2 = location1 + 1;
const location3 = location2 + 1;
let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;

while (isSunk === false) {
  guess = prompt(`Ну що, ти готовий? Пали!!! (Введи цифру від 0 до 6:)`);
  if (guess < 0 || guess > 6 || guess === null) {
    alert(
      `Або ти промахнувся клавішою, або ввів зовсім не те, що я тебе просив. Будь ласка, введи правильну цифру! :)`
    );
  } else {
    guesses += 1;
    if (guess == location1 || guess == location2 || guess == location3) {
      hits += 1;
      alert(`Точно в ціль!`);
      if (hits === 3) {
        isSunk === true;
        alert(`Ну все... Кораблик потонув`);
      }
    } else {
      alert(`Ха-ха мазило!!! Не попав`);
    }
  }
}
const stats = `Для того, щоб збити мій кораблик ти використав  ${guesses} спроби. Це означає твоя точність =${
  3 / guesses
} (де 1 це найращий результат).`;
alert(stats);
