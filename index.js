const { minMax } = require("./dist/min-max.js");

function evaluate(node) {
  return Number((node + "").split(".")[1] || 0);
}

function moves(node) {
  return [node * 2, node * 3, node * 5];
}

console.log(
  minMax({
    depth: 2,
    node: 2.3,
    heuristic: evaluate,
    generateNodes: moves
  })
);
