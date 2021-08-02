import { useState } from "react";
import styled from "styled-components";

const BallsStyle = styled.figure`
  z-index: -1;
  position: fixed;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  border-radius: 100%;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: ${props => props.dark ? props.theme.background.dark : props.theme.background.light};
  box-shadow: 9px 17px 15px -5px rgba(0,0,0,0.3);
  border: 2px solid #fff;
`;

export default function Balls({
  width,
  height,
  dark,
}) {
  const [top] = useState(Math.floor(Math.random() * (100 - 0 + 1)) + 0);
  const [left] = useState(
    Math.floor(Math.random() * (100 - 0 + 1)) + 0
  );
  const [widthState,] = useState(width);
  const [heightState,] = useState(height);

  return (
    <BallsStyle
      top={top}
      left={left}
      width={widthState}
      height={heightState}
      dark={dark}
    />
  );
}
