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
import img1 from '../images/gallery/Library - 1 of 10.png'
import img2 from '../images/gallery/Library - 2 of 10.png'
import img3 from '../images/gallery/Library - 3 of 10.png'
import img4 from '../images/gallery/Library - 4 of 10.png'
import img5 from '../images/gallery/Library - 5 of 10.png'
import img6 from '../images/gallery/Library - 6 of 10.png'
import img7 from '../images/gallery/Library - 7 of 10.png'

const Main = styled.div`
  background-color: ${({ theme: { colors } }) => colors.deepsalmon};
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 500;
`;

const TopContainer = styled.div`
  background-color: ${({ theme: { colors } }) => colors.twilight};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  z-index: 5;
  margin: 0px 0px 0px 0px;
  ${media.md`
  justify-content: space-between;

`}
`;

const Intro = styled.h2`

`;

const GalleryContainer = styled.div`
  width: 90%;
  background-color: white;
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  justify-content: space-between;
  align-items: center;
  ${media.sm`
  width: 80%;
`}
`;

const GalleryImg = styled.img`
  width: 600px;
  margin-bottom: 80px;
`;
const GalleryPage = () => (

   <Theme>
    <GlobalStyle/>
    <SEO title="Gallery" />
    <Main>
      <TopContainer>
        <Link to="/Index">Go back to the homepage</Link>
      </TopContainer>
      <TopSVG/>
      <SplitSVG />
      <Intro>Here is a selection of photos</Intro>
      <GalleryContainer>
        <GalleryImg src={img1}/>
        <GalleryImg src={img2}/>
        <GalleryImg src={img3}/>
        <GalleryImg src={img4}/>
        <GalleryImg src={img5}/>
        <GalleryImg src={img6}/>
        <GalleryImg src={img7}/>
      </GalleryContainer>
    </Main>
<Footer/>
    </Theme>
    

 
 
)

export default GalleryPage