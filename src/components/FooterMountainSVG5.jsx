import React from 'react';
import styled from 'styled-components';
import media from '../media';

const SVG = styled.svg`
  z-index: 1;
  position: absolute;
  bottom: 20vw;
  width: 100%;
  display: none;
   ${media.sm`
  display: block;
`}
`;

const TopSVG = () => (
  <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <defs>
      <linearGradient id="Gradient5" gradientTransform="rotate(90)">
        <stop offset="0%" stop-color="#857eac"/>
        <stop offset="100%" stop-color="#151518"/>
      </linearGradient>
    </defs>
    <path fill="url(#Gradient5)" fill-opacity="1" d="M0,164L288,224L576,96L864,96L1152,64L1440,256L1440,320L1152,320L864,320L576,320L288,320L0,320Z">
    </path>
  </SVG>
);

export default TopSVG;

  