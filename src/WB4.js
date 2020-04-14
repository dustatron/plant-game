// > dancer.samba()
// "The dancer sambas!"
// > dancer.tango()
// "The dancer tangos!"

// const moves = function() {
//   const obj = {
//     danceMove: function() {
//       return `The dancer ${move}s`;
//     }
//   };
// };

// console.log(dancer.dance);

// function dance(dancer) {
//   return function(move) {
//     return `The ${dancer} ${move}s`;
//   };
// }

const dance = (person) => {
  const danceString = `The ${person} `;

  const obj = {
    tango: () => {
      return danceString + "Tangos!";
    },
    samba: () => {
      return danceString + "Sambas!";
    }
  };
  return obj;
};

const dancer = dance("dancer");
const teacher = dance("teacher");

console.log(dancer.tango());
console.log(dancer.samba());
console.log(teacher.samba());
