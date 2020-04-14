// make a list up 10
// return all multiples of 3 and 5.
// return sum off all multiples

// const recursiveCounter = function(counter = 0, multiples = []) {
//   if (counter >= 10) {
//     const reduced = multiples.reduce((sum, muliple) => {
//       return sum + muliple;
//     }, 0);
//     return reduced;
//   } else if (counter % 3 == 0 || counter % 5 == 0) {
//     const newNumArr = [ ...multiples, counter ];
//     return recursiveCounter(counter + 1, newNumArr);
//   } else {
//     return recursiveCounter(counter + 1, multiples);
//   }
// };

// const multipliesArray = recursiveCounter();
// console.log("returned", multipliesArray);

const reduceMultples = function(limit) {
  return function recursiveCounter(counter = 0, multiples = []) {
    if (counter >= 10) {
      const reduced = multiples.reduce((sum, muliple) => {
        return sum + muliple;
      }, 0);
      return reduced;
    } else if (counter % 3 == 0 || counter % 5 == 0) {
      const newNumArr = [ ...multiples, counter ];
      return recursiveCounter(counter + 1, newNumArr);
    } else {
      return recursiveCounter(counter + 1, multiples);
    }
  };
};

// const reduceLimit = reduceMultples(10);
// console.log("reduce ", reduceLimit());

console.log("reduced ", reduceMultples(10)());

const numberOut = (number) => {
  return (times) => {
    return number * times;
  };
};

console.log("number test", numberOut(5)(5));
