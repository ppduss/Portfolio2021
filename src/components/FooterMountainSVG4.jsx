import React from 'react';
import styled from 'styled-components';
import media from '../media';

const SVG = styled.svg`
  z-index: 3;
  position: absolute;
  bottom: 23vw;
  width: 70%;
  display: none;
   ${media.sm`
  display: block;
`}
`;

const TopSVG = () => (
  <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <defs>
      <linearGradient id="Gradient4" gradientTransform="rotate(90)">
        <stop offset="0%" stop-color="#716d9c"/>
        <stop offset="100%" stop-color="#2c323f"/>
      </linearGradient>
    </defs>
    <path fill="url(#Gradient4)" fill-opacity="1" d="M0,160L120,192L240,256L360,128L480,160L600,224L720,96L840,224L960,288L1080,192L1200,256L1320,96L1440,192L1440,320L1320,320L1200,320L1080,320L960,320L840,320L720,320L600,320L480,320L360,320L240,320L120,320L0,320Z">
    </path>
  </SVG>
);

export default TopSVG;

  