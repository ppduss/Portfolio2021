import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  z-index: 4;
  position: absolute;
  bottom: 160px;

`;

const TopSVG = () => (
  <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
       <defs>
      <linearGradient id="Gradient" gradientTransform="rotate(90)">
        <stop offset="0%" stop-color="#42507e"/>
        <stop offset="100%" stop-color="#19202e"/>
      </linearGradient>
    </defs>
    <path fill={"url(#Gradient)"} fill-opacity="1" d="M0,160L160,32L320,0L480,128L640,256L800,128L960,288L1120,32L1280,64L1440,192L1440,320L1280,320L1120,320L960,320L800,320L640,320L480,320L320,320L160,320L0,320Z">
    </path>
  </SVG>
);

export default TopSVG;

  