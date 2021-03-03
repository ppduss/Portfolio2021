import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import Theme from '../Theme';
import media from '../media';
import aboutBerd from '../images/berd.png';
import aboutPaint from '../images/paint3.gif';

function ScrollSelect() {
  const [scroll, setScroll] = useState("none");
  useEffect(() => {
    function handleScroll() {
      window.scrollY >= 2000 ? setScroll("block") : setScroll("none") 
    }
    window.addEventListener("scroll", handleScroll);
  }, [])
  return scroll
}

const AboutContainer = styled.div`
  z-index: 2;
  background-color: ${({ theme: { colors } }) => colors.twilight};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 160px;
  height: 1400px;
  ${media.sm`
   flex-direction: row;
  `}
`;

const AboutBlock = styled.div`
  z-index: 1;
  position: absolute;
  margin: 0 auto;
  background-color: ${({ theme: { colors } }) => colors.deepsalmon};
  height: 700px;
  width: 90%;
  transition: all 800ms ease-in-out;
  ${media.sm`
    left: 35%;
    height: 700px;
    width: 200px;
  `}
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


const AboutSecondContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PaintContainer = styled.div`
  position: relative;
  width: auto;
  ${media.sm`
    width: 600px;
  `}
`;


const AboutPaint = styled.img`
  position: absolute;
  top: 60px;
  left: 0px;
  z-index: 0;
  width: 500px;
  height: 500px;
  display: ${ScrollSelect};
  opacity: 90%;
  ${media.sm`
  /* margin-left: 90px; */

    left: -30px;
    width: 800px;
    height: 400px;
  `}
`;

const AboutTitle = styled.h1`
font-size: 4.1rem;
  color: ${({ theme: { colors } }) => colors.black};
 margin: 0 auto;
  z-index: 5;
       ${media.sm`
    margin-left: -30px;
  margin-top: -30px;

  `}
`;


const AboutTxt = styled.p`
  /* font-size: 1.1rem; */
  line-height: 1.6rem;
  z-index: 5;
  margin: 0 auto;
  color: ${({ theme: { colors } }) => colors.black};
  width: 90%;
  text-align: center;
  height: 400px;
  padding: 20px;
  ${media.xs`
    width: 80%;
  `}
  ${media.sm`
    text-align: start;
   /* margin-left: 160px;     */
   width: 475px;
  `}
`;

const About = () => (
  <AboutContainer>
    <AboutBlock />
    <AboutImg src={aboutBerd} alt="about portrait"/>
    <AboutSecondContainer>
      <PaintContainer>
        <AboutPaint src={aboutPaint} alt="paint gif"/>
      </PaintContainer>
      <AboutTitle>About<br />me</AboutTitle>
      <AboutTxt>I'm a front-end developer based in Montreal who loves creating beautiful and engaging websites built with elegant code. Always interested in exploring new and creative ways to improve efficiency user experience. I also have experience with 2D/3D modeling for manufacturing, 3D printing, CNC programming, and photography editing.</AboutTxt>
    </AboutSecondContainer>
  </AboutContainer>
)

export default About;