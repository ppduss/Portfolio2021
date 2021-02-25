import React from "react";
import styled from "styled-components";
// import Theme from '../Theme';
import media from '../media';
import aboutImg from '../images/tempimg.png';
import aboutBerd from '../images/berd.png';
import aboutPaint from '../images/paint3.gif';

const AboutContainer = styled.div`
  background-color: ${({ theme: { colors } }) => colors.twilight};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 160px;
  height: 1200px;
    ${media.sm`
   flex-direction: row;

  `}
`;

const AboutTitle = styled.h1`
font-size: 4rem;
  color: ${({ theme: { colors } }) => colors.black};
 margin: 0 auto;
  z-index: 5;
       ${media.sm`
    margin-left: -30px;
  margin-top: -30px;

  `}
`;

const AboutSecondContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const AboutBlock = styled.video`
z-index: 1;
  position: absolute;
  left: 35%;
  background-color: ${({ theme: { colors } }) => colors.deepsalmon};
  height: 700px;
  width: 200px;
`;

const AboutPaint = styled.img`
  position: absolute;
  /* top: 10px; */
  left: 48%;
  z-index: 0;
  width: 500px;
  height: 500px;
  /* display: none; */
  opacity: 80%;
`;



const AboutImg = styled.img`
  z-index: 9;
  filter: grayscale(100);
  width: 250px;
  transition: all 100ms linear;
  &:hover {
    filter: grayscale(0);
  }
  ${media.sm`
   width: 400px;
  `}
`;

const AboutTxt = styled.p`
  z-index: 5;
  /* background-color: ${({ theme: { colors } }) => colors.twilight}; */
  border-radius: 15px;
  margin-left: 30px;
  color: ${({ theme: { colors } }) => colors.black};
  width: 90%;
  height: 400px;
  padding: 20px;
       ${media.sm`
   width: 475px;

  `}
`;

const About = () => (
  <AboutContainer>
    <AboutBlock />
    <AboutImg src={aboutBerd} />
    
    <AboutSecondContainer>
    <AboutPaint src={aboutPaint}/>

      <AboutTitle>About<br />me</AboutTitle>
      <AboutTxt>I'm a front-end developer based in Montreal who loves creating beautiful and engaging websites built with elegant code. Always interested in exploring new and creative ways to improve efficiency user experience. I also have experience with 2D/3D modeling for manufacturing, 3D printing, CNC programming, and photography editing.</AboutTxt>
    </AboutSecondContainer>
  </AboutContainer>
)

export default About;