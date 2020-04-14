const nameMaker = (name) => {
  return function(prefix) {
    return function(suffix) {
      return `${prefix} ${name} ${suffix}`;
    };
  };
};

const dusty = nameMaker("Dusty");
console.log(dusty("Mr")("The Third"));
