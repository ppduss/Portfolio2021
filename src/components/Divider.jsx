import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import media from '../media';


const lineanim = keyframes`
  from {
    height: 0;
    opacity: 1;
  }
  to {
    height: 1500;
    opacity: 1;
  }
`;

const Line = styled.line`
 stroke: black;
 stroke-width: 5;
 z-index: 0;

 `;

const Svg = styled.svg`
  margin-top: -300px;
 opacity: 0;
 animation: ${lineanim} 5s cubic-bezier(.41,.99,.74,.95) forwards;
 animation-iteration-count: 1;
 animation-delay: 1000ms;
 display: none;
 z-index: 0;
  ${media.md`
    display: block;
`}
`;

const Divider = () => (

  <Svg height="1500" width="8">
  <Line x1="0" y1="0" x2="0" y2="2000" />
  Sorry, your browser does not support inline SVG.
  </Svg>

);

export default Divider;