import React from "react";
import styled from "styled-components";
import Theme from '../Theme';
import media from '../media';    
import Nav from '../components/Nav';

const FooterContainer = styled.div`
  background-color: ${({ theme: { colors } }) => colors.clay};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

const FooterTitle = styled.p`
  color: ${({ theme: { colors } }) => colors.white};
`;

const FooterSecondContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;



const FooterTxt = styled.p`
  color: black;
  text-align: center;
`;

const Footer = () => (
  <FooterContainer>
    {/* <FooterTitle>Thanks for visiting :)</FooterTitle> */}
    <FooterSecondContainer>
      <FooterTxt>© {new Date().getFullYear()}, Built with React, <a href="https://styled-components.com/">Styled-Components</a> , and with <a href="https://www.gatsbyjs.com">Gatsby</a><br /> Interested in how I built this portfolio? Check out my <a href="https://github.com/ppduss/Portfolio2021">github repo</a>.
        <Nav/>
      </FooterTxt>
    </FooterSecondContainer>
  </FooterContainer>
)

export default Footer;
















