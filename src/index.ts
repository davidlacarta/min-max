type MinMaxParameters<N> = {
  depth: number;
  node: N;
  heuristic: (node: N) => number;
  generate: (node: N) => Array<N>;
  isTerminal?: (node: N) => boolean;
  max?: boolean;
  alpha?: number;
  beta?: number;
};

type MinMaxReturn<N> = {
  value: number;
  node?: N;
};

function minMax<N>({
  depth,
  node,
  heuristic,
  generate,
  isTerminal = () => false,
  max = true,
  alpha = Number.NEGATIVE_INFINITY,
  beta = Number.POSITIVE_INFINITY
}: MinMaxParameters<N>): MinMaxReturn<N> {
  if (depth === 0 || isTerminal(node)) {
    return { value: heuristic(node) };
  }

  const initBestValue = max
    ? Number.NEGATIVE_INFINITY
    : Number.POSITIVE_INFINITY;

  let best = { value: initBestValue, node };

  const nodes = generate(node);
  for (let i = 0; i < nodes.length; i++) {
    const child = nodes[i];
    const { value: currentValue } = minMax({
      depth: depth - 1,
      node: child,
      alpha,
      beta,
      max: !max,
      heuristic,
      generate,
      isTerminal
    });

    const isMaxAndBestMax = max && currentValue > best.value;
    const isMinAndBestMin = !max && currentValue < best.value;

    if (isMaxAndBestMax || isMinAndBestMin) {
      best.value = currentValue;
      best.node = child;
    }

    if (max) {
      alpha = Math.max(alpha, currentValue);
    } else {
      beta = Math.min(beta, currentValue);
    }

    const prune = alpha >= beta;
    if (prune) {
      break;
    }
  }

  return best;
}

export { minMax };
