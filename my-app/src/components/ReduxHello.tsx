import * as React from 'react';

import './Hello.css';

export interface ReduxHelloProps {
  name: string;
  enthusiasmLevel?: number;

  // todo test
  onIncrement?: () => void;
  onDecrement?: () => void;
}

const ReduxHello = ({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: ReduxHelloProps)  => {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
}

export default ReduxHello;

// helpers

function getExclamationMarks(numChars: number) : string {
  return Array(numChars + 1).join('!');
}
  