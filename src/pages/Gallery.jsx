import React from "react"
import styled from "styled-components";
import media from '../media';
import { Link } from "gatsby"
import GlobalStyle from '../globalStyles';
import Footer from "../components/Footer";
import TopSVG from '../components/TopContainerSVG';
import SplitSVG from '../components/SplitContainerSVG';
import SEO from "../components/seo";
import Theme from '../Theme';

const Main = styled.div`
  background-color: ${({ theme: { colors } }) => colors.deepsalmon};
  display: flex;
  flex-direction: column;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 500;
`;

const TopContainer = styled.div`
  background-color: ${({ theme: { colors } }) => colors.twilight};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 450px;
  z-index: 5;
  margin: 0px 0px 0px 0px;
  ${media.md`
  justify-content: space-between;

`}
`;

const GalleryPage = () => (

   <Theme>
    <GlobalStyle/>
    <SEO title="Gallery" />
    <Main>
      <TopContainer>
        <Link to="/">Go back to the homepage</Link>
      </TopContainer>
      <TopSVG/>
      <SplitSVG />
    </Main>
<Footer/>
    </Theme>
    

 
 
)

export default GalleryPage