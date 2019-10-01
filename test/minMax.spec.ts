import { mm } from "../src/index";

type TreeNode = {
  nodes?: number;
  value?: number;
};

const TREE: Record<number, TreeNode> = {
  1: { nodes: 3 },
  11: { nodes: 3 },
  111: { value: 7 },
  112: { nodes: 2 },
  1121: { nodes: 2 },
  11211: { value: 5 },
  11212: { value: 8 },
  11221: { value: 9 },
  11222: { value: 2 },
  1122: { nodes: 2 },
  113: { value: 8 },
  12: { nodes: 2 },
  121: { value: 3 },
  122: { value: 4 },
  13: { nodes: 3 },
  131: { nodes: 2 },
  1311: { nodes: 2 },
  13111: { value: 9 },
  13112: { value: 1 },
  1312: { value: 9 },
  132: { value: 2 },
  133: { value: 1 }
};

function getValue(node: number) {
  return TREE[node].value;
}

function getNodes(node: number) {
  return [...Array(TREE[node].nodes)].map((_, index) =>
    Number(`${node}${index + 1}`)
  );
}

function hasZeroNodes(node: number) {
  return !TREE[node].nodes;
}

describe("minMax", () => {
  it("tree generated", () => {
    const result = mm({
      depth: 5,
      node: 1,
      heuristic: getValue,
      generate: getNodes,
      isTerminal: hasZeroNodes
    });
    expect(result).toEqual({ value: 5, node: 11 });
  });
});
