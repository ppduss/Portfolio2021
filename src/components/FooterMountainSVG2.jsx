import React from 'react';
import styled from 'styled-components';
import media from '../media';

const SVG = styled.svg`
  z-index: 5;
  position: absolute;
  bottom: 16vw;
  display: none;
   ${media.sm`
  display: block;
`}
`;

const TopSVG = () => (
  <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
       <defs>
      <linearGradient id="Gradient2" gradientTransform="rotate(90)">
        <stop offset="0%" stop-color="#202c5e"/>
        <stop offset="100%" stop-color="#020305"/>
      </linearGradient>
    </defs>
    <path fill={'url(#Gradient2'} fill-opacity="1" d="M0,72L205.7,50L411.4,64L617.1,160L822.9,128L1028.6,128L1234.3,160L1440,160L1440,320L1234.3,320L1028.6,320L822.9,320L617.1,320L411.4,320L205.7,320L0,320Z">
    </path>
  </SVG>
);

export default TopSVG;

  