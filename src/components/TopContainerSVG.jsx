import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import media from '../media';

const SVG = styled.svg`
  /* margin-top: -20px; */
  transform: scaleX(-1); 
  /* translate: (0, -100); */
  /* margin: 0 30px; */
`;


const TopSVG = () => (

  <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2f5a62" fill-opacity="1" d="M0,32L480,64L960,320L1440,224L1440,0L960,0L480,0L0,0Z"></path></SVG>

);

export default TopSVG;