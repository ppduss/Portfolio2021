import React from 'react';
import styled from 'styled-components';
import media from '../media';

const SVG = styled.svg`
  z-index: 3;
  position: absolute;
  bottom: 26vw;
  width: 100%;
  display: none;
   ${media.sm`
  display: block;
`}
`;

const TopSVG = () => (
  <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <defs>
      <linearGradient id="Gradient6" gradientTransform="rotate(90)">
        <stop offset="0%" stop-color="#6a6d9c"/>
        <stop offset="100%" stop-color="#353b49"/>
      </linearGradient>
    </defs>
    <path fill="url(#Gradient6)" fill-opacity="1" d="M0,192L205.7,224L411.4,288L617.1,192L822.9,224L1028.6,128L1234.3,224L1440,192L1440,320L1234.3,320L1028.6,320L822.9,320L617.1,320L411.4,320L205.7,320L0,320Z">
    </path>
  </SVG>
);

export default TopSVG;

  