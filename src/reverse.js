const recurseReverse = (string) => {
  if (string === "") {
    console.log("base case ''");
    return "";
  } else {
    console.log(string.substring(1), string[0]);
    return recurseReverse(string.substring(1)) + string[0];
    // return recurseReverse(string.substring(1));
  }
};

console.log(recurseReverse("taco cat"));

const testLoop = (index = 1) => {
  if (index === 10) {
    return "";
  } else {
    return testLoop(index + 1) + index;
  }
};

console.log("testLoop = ", testLoop());
