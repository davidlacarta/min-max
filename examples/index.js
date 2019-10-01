const { minMax } = require("../dist/min-max.js");

const result = minMax({
  depth: 5,
  node: 1,
  heuristic: node => node,
  generate: node => [node, node * 2, node * 3]
});

console.log(result);
