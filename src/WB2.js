// > faucet.sound()
// "Drip drip drip."
// > oldCar.sound()
// "Grumble grumble"
// > sleepyBear.sound()
// "Grrr...yawn"

const sounds = function(noise) {
  const obj = {
    sound: function() {
      return `${noise}`;
    }
  };
  return obj;
};

const faucet = sounds("Drip drip drip.");
const oldCar = sounds("Grumble grumble.");
const sleepyBear = sounds("Grrr. yawn.");

console.log(faucet.sound());
console.log(oldCar.sound());
console.log(sleepyBear.sound());
