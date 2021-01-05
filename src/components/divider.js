import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const lineanim = keyframes`
  from {
    height: 0;
    opacity: 0;
  }
  to {
    height: 2000;
    opacity: 1;
  }
`;

const Line = styled.line`
 stroke: black;
 stroke-width: 5;
 `;
const Svg = styled.svg`
 opacity: 0;
 animation: ${lineanim} 4s cubic-bezier(0,0.97,.13,1) forwards;
 animation-iteration-count: 1;
 animation-delay: 1s;
`;

const Divider = () => (

  <Svg height="2000" width="8">
  <Line x1="0" y1="0" x2="0" y2="2000" />
  Sorry, your browser does not support inline SVG.
  </Svg>

);

export default Divider;