import React from 'react';
import styled from 'styled-components';
import media from '../media';

const SVG = styled.svg`
  z-index: 6;
  position: absolute;
  bottom: 0vw;
  display: none;
  ${media.sm`
  display: block;
`}
`;

const TopSVG = () => (
  <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 420">
        <defs>
      <linearGradient id="Gradient" gradientTransform="rotate(90)">
        <stop offset="0%" stop-color="#0f162b"/>
        <stop offset="100%" stop-color="#030508"/>
      </linearGradient>
    </defs>
    <path fill={'url(#Gradient'} fill-opacity="1" d="M0,40L720,0L1240,50L1440,20L1440,420L0,420Z"></path>
  </SVG>
);

export default TopSVG;
