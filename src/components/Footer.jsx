import React from "react";
import styled from "styled-components";
import Theme from '../Theme';
import media from '../media';    

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

`;

const Footer = () => (
  <FooterContainer>
    <FooterTitle>Footer</FooterTitle>
    <FooterSecondContainer>
      <FooterTxt>© {new Date().getFullYear()}, Built with love and with {` `} <a href="https://www.gatsbyjs.com">Gatsby</a><br/> Interested in how I built this portfolio? Check out my git repo.
      </FooterTxt>
    </FooterSecondContainer>
  </FooterContainer>
)

export default Footer;
















