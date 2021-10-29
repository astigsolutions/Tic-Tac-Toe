/** This is a Tic Tac Toe Square Layout Component. */
import * as React from 'react';
import styled from 'styled-components';
import { Value } from './GameState';

const StyledSquare = styled.button`
  width: 200px;
  height: 200px;
  background: #fff;
  border: 7px solid #999;
  padding: 7;
  border-radius: 7px;
  font-size: 190px;
  font-weight: bold;
  background-color: blue;
  color: #ffffff;
`;

export type SquareProps = {
  value: Value;
  onClick: () => void;
};

export function Square(props: SquareProps) {
  return (
    <StyledSquare onClick={props.onClick}>
      {props.value}
    </StyledSquare>
  );
}
