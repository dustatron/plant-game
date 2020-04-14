// > battleRobot1.throw();
// "The battle robot throws the spear 100 yards at 200 miles per hour!"

const battleProps = function(yards) {
  return function(speed) {
    const obj = {
      throw: function() {
        return `the battle robot throws the spear ${yards} at ${speed} miles per hour!`;
      }
    };
    return obj;
  };
};

const battleRobot1 = battleProps(100)(200);
console.log(battleRobot1.throw());
