import React from "react";
import styled from "styled-components";
import Theme from '../Theme';
import media from '../media';    
import Nav from '../components/Nav';
import FooterSVG from './FooterMountainSVG';
import FooterSVG2 from './FooterMountainSVG2';
import FooterSVG3 from './FooterMountainSVG3';
import FooterSVG4 from './FooterMountainSVG4';
import FooterSVG5 from './FooterMountainSVG5';
import FooterSVG6 from './FooterMountainSVG6';

const FooterContainer = styled.div`
  position: relative;
  background: linear-gradient(#2f5a62, #1f5a62);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  ${media.sm`
  justify-content: flex-end;
  height: 900px;
  background: linear-gradient(#2f5a62, #83663b, #ffb288);
`}
`;

const FooterTitle = styled.p`
  color: ${({ theme: { colors } }) => colors.white};
`;

const FooterSecondContainer = styled.div`
  background-color: #193135;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  ${media.sm`
    width: 100%;
    background-color: rgba(56, 99, 124, 0.4);
`}
`;

const FooterTxt = styled.p`
  color: white;
  padding: 36px 36px;
  text-align: center;
  margin-bottom: 0px;
`;

const Footer = () => (
  <FooterContainer>
    <FooterSVG/>
    <FooterSVG2/>
    <FooterSVG3 />
    <FooterSVG4 />
    <FooterSVG5 />
    <FooterSVG6 />
    {/* <FooterTitle>Thanks for visiting :)</FooterTitle> */}
    <FooterSecondContainer>
      <FooterTxt>© {new Date().getFullYear()} - Built with React, <a href="https://styled-components.com/">Styled-Components</a> , and <a href="https://www.gatsbyjs.com">Gatsby</a>.<br /> Interested in how I built this portfolio? Check out my <a href="https://github.com/ppduss/Portfolio2021">github repo</a>.
        {/* <Nav/> */}
      </FooterTxt>
    </FooterSecondContainer>
  </FooterContainer>
)

export default Footer;
















