# Min Max library

Minimax is a decision rule used in artificial intelligence, decision theory, game theory, statistics and philosophy for minimizing the possible loss for a worst case (maximum loss) scenario. When dealing with gains, it is referred to as "maximin" to maximize the minimum gain. Originally formulated for two-player zero-sum game theory, covering both the cases where players take alternate moves and those where they make simultaneous moves, it has also been extended to more complex games and to general decision-making in the presence of uncertainty.

## Parameters

`N` represents game current state

```ts
type MinMaxParameters<N> = {
  depth: number;
  node: N;
  heuristic: (node: N) => number;
  generate: (node: N) => Array<N>;
  isTerminal?: (node: N) => boolean;
};

type MinMaxReturn<N> = {
  value: number;
  node?: N;
};
```

## Examples

- Simple multiply game

```js
import { mm } from minMax;

const result = mm({
  depth: 5,
  node: 1,
  heuristic: node => node,
  generate: node => [node, node * 2, node * 3],
  isTerminal: _ => false
});

console.log(result);

// { value: 27, node: 3 }
```

- Chess game

```js
import { mm } from minMax;

const result = mm({
  depth: 5,
  node: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
  heuristic: functionEvaluateFENPosition,
  generate: functionGenerateArrayOfFENMovements,
  isTerminal: functionEvaluateCheckMate
});

console.log(result);

// { value: bestChildValue, node: bestMovementFEN }
```
