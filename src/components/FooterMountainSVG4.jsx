import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  z-index: 3;
  position: absolute;
  bottom: 220px;
  fill: black;
  width: 70%;
`;

const TopSVG = () => (
  <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <defs>
      <linearGradient id="Gradient2" gradientTransform="rotate(90)">
        <stop offset="0%" stop-color="#6171a7"/>
        <stop offset="100%" stop-color="#222a3d"/>
      </linearGradient>
    </defs>
    <path fill="url(#Gradient2)" fill-opacity="1" d="M0,160L120,192L240,256L360,128L480,160L600,224L720,96L840,224L960,288L1080,192L1200,256L1320,96L1440,192L1440,320L1320,320L1200,320L1080,320L960,320L840,320L720,320L600,320L480,320L360,320L240,320L120,320L0,320Z">
    </path>
  </SVG>
);

export default TopSVG;

  