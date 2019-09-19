export function minMax({
  max = true,
  alpha = Number.NEGATIVE_INFINITY,
  beta = Number.POSITIVE_INFINITY,
  depth,
  node,
  heuristic,
  generateNodes,
  isTerminalNode = () => false
}) {
  if (depth === 0 || isTerminalNode(node)) {
    return { bestValue: heuristic(node) };
  }

  const initBestValue = max
    ? Number.NEGATIVE_INFINITY
    : Number.POSITIVE_INFINITY;

  let bestValue = initBestValue;
  let bestNode = undefined;

  const nodes = generateNodes(node);
  for (let i = 0; i < nodes.length; i++) {
    const child = nodes[i];
    const { bestValue: currentValue } = minMax({
      depth: depth - 1,
      node: child,
      alpha,
      beta,
      max: !max,
      heuristic,
      generateNodes
    });

    const isCurrentBest =
      (max && currentValue > bestValue) || (!max && currentValue < bestValue);
    if (isCurrentBest) {
      bestValue = currentValue;
      bestNode = child;
    }

    if (max) {
      alpha = Math.max(alpha, currentValue);
    } else {
      beta = Math.min(beta, currentValue);
    }

    const prune = beta <= alpha;
    if (prune) {
      break;
    }
  }

  return { bestValue, bestNode };
}
