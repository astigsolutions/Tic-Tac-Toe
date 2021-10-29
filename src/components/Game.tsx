/** This is a Tic Tac Toe Game Component. */
import * as React from 'react';
import { useGameState } from './GameState';
import { Log } from './Log';
import { Board } from './Board';
import { Row, Column } from './Layout';

/** This is a Tic Tac Toe Game State Function. */
function Game() {
  const {
    gameState,
    current,
    xIsNext,
    jumpTo,
    winner,
    handleClick,
  } = useGameState();

 /** This is a return sequence of my Tic Tac Toe Game Component. */
  return (
    <Row gap={20}>
      <Column gap={20}>
        <div>{
          winner
            ? `Winner ${winner}`
            : `Next Player ${xIsNext ? 'X' : 'O'}`
        }</div>
        <Board board={current} onClick={handleClick} />
      </Column>
      <Log history={gameState.history} jumpTo={jumpTo}/>
    </Row>
  );
}
export default Game;