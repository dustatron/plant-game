// > painter1.paints()
// "Paints green!"
// > painter2.paints()
// "Paints yellow!"
// > painter3.paints()
// "Paints red!"

const canPaint = function(color) {
  const obj = {
    paints: function() {
      return `Paints in ${color}.`;
    }
  };
  return obj;
};
const painter1 = canPaint("Green");
const painter2 = canPaint("Yellow");
const painter3 = canPaint("Red");
painter1.paints("green");
painter2.paints("yellow");
painter3.paints("red");
// console.log(canPaint);
// console.log(painter1);
console.log(painter1.paints());
console.log(painter2.paints());
console.log(painter3.paints());
