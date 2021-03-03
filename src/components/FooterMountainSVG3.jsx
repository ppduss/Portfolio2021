import React from 'react';
import styled from 'styled-components';
import media from '../media';

const SVG = styled.svg`
  z-index: 4;
  position: absolute;
  bottom: 22vw;
  display: none;
   ${media.sm`
  display: block;
`}
`;

const TopSVG = () => (
  <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
       <defs>
      <linearGradient id="Gradient3" gradientTransform="rotate(90)">
        <stop offset="0%" stop-color="#404a6b"/>
        <stop offset="100%" stop-color="#171e25"/>
      </linearGradient>
    </defs>
    <path fill={"url(#Gradient3)"} fill-opacity="1" d="M0,256L160,156L320,120L480,224L640,224L800,120L960,100L1120,160L1280,224L1440,128L1440,320L1280,320L1120,320L960,320L800,320L640,320L480,320L320,320L160,320L0,320Z">
    </path>
  </SVG>
);

export default TopSVG;

  