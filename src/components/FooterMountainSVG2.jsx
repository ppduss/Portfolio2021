import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  z-index: 5;
  position: absolute;
  bottom: 0px;

`;

const TopSVG = () => (
  <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
       <defs>
      <linearGradient id="Gradient" gradientTransform="rotate(90)">
        <stop offset="0%" stop-color="#1d2233"/>
        <stop offset="100%" stop-color="#090c11"/>
      </linearGradient>
    </defs>
    <path fill={'url(#Gradient'} fill-opacity="1" d="M0,32L205.7,0L411.4,64L617.1,160L822.9,128L1028.6,128L1234.3,160L1440,160L1440,320L1234.3,320L1028.6,320L822.9,320L617.1,320L411.4,320L205.7,320L0,320Z">
    </path>
  </SVG>
);

export default TopSVG;

      {/* <TopSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#bbd1c9" fill-opacity="1" d="M0,320L720,256L1440,64L1440,0L720,0L0,0Z"></path></TopSVG> */}
      {/* <SecSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a7bdd1" fill-opacity="1" d="M0,32L1440,288L1440,0L0,0Z"></path></SecSVG> */}
  