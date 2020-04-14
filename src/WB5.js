function prefix(title) {
  return function(name) {
    return `${title} ${name}`;
  };
}
const prefixSir = prefix("Sir");

console.log(prefixSir("Mick Jagger"));
console.log(prefixSir("Tiger King"));
