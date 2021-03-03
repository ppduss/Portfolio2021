import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  z-index: 6;
  position: absolute;
  bottom: 0;
  margin-bottom: -1px;
  transform: scale(1, -1); 
`;

const TopSVG = () => (
<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 200 1440 320"><path fill="#1c1d2b" fill-opacity="1" d="M0,400L450,264L960,320L1440,224L1440,0L960,0L480,0L0,0Z"></path></SVG>
);

export default TopSVG;
