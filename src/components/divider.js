import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const lineanim = keyframes`
  from {
    height: 0;
  }
  to {
    height: 1200;
    
  }
`;

const Line = styled.line`
 stroke: black;
 stroke-width: 5;
 `;
const Svg = styled.svg`
 animation: ${lineanim} 4s cubic-bezier(0,1,.75,.96) ;
 animation-iteration-count: 1;
`;

const Divider = () => (

  <Svg height="1200" width="8">
  <Line x1="0" y1="0" x2="0" y2="1200" />
  Sorry, your browser does not support inline SVG.
  </Svg>

);

export default Divider;