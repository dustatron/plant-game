// const lionSound = soundMaker("roar");
// "The Lion goes roar!"

// const mouseSound = soundMaker("squeak");

function soundMaker(type) {
  return function(animalSound) {
    return `The ${type} goes ${animalSound}`;
  };
}

const lion = soundMaker("lion")("roar");
const mouse = soundMaker("mouse")("squeak");

console.log(lion);
console.log(mouse);
// console.log(soundMaker.mouse());
