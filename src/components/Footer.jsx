import React from "react";
import styled from "styled-components";
import Theme from '../Theme';
import media from '../media';    
import Nav from '../components/Nav';
import FooterSVG from './FooterMountainSVG';
import FooterSVG2 from './FooterMountainSVG2';
import FooterSVG3 from './FooterMountainSVG3';
import FooterSVG4 from './FooterMountainSVG4';
import FooterSVGCity from './FooterSVGCity';

const FooterContainer = styled.div`
  position: relative;
  background: linear-gradient(#2f5a62, #4f7680);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 700px;
`;

const FooterTitle = styled.p`
  color: ${({ theme: { colors } }) => colors.white};
`;

const FooterSecondContainer = styled.div`
  background-color: rgba(20, 7, 7, 0.95);
  border-radius: 18px;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 85%;
`;

const FooterTxt = styled.p`
  color: white;
  padding: 26px 36px;
  text-align: center;
  margin-bottom: 0px;
`;

const Footer = () => (
  <FooterContainer>
    <FooterSVG/>
    <FooterSVG2/>
    <FooterSVG3 />
    <FooterSVG4 />
    <FooterSVGCity />
    {/* <FooterTitle>Thanks for visiting :)</FooterTitle> */}
    <FooterSecondContainer>
      <FooterTxt>© {new Date().getFullYear()} - Built with React, <a href="https://styled-components.com/">Styled-Components</a> , and with <a href="https://www.gatsbyjs.com">Gatsby</a>.<br /> Interested in how I built this portfolio? Check out my <a href="https://github.com/ppduss/Portfolio2021">github repo</a>.
        {/* <Nav/> */}
      </FooterTxt>
    </FooterSecondContainer>
  </FooterContainer>
)

export default Footer;
















