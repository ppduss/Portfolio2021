import React, { useState, useEffect } from "react";
// import { Link } from "gatsby";
import styled from "styled-components";
import Collage from "../components/Collage";
import Skills from "../components/Skills/Index";
import Project from "../components/project";
import About from '../components/about';
import SEO from "../components/seo";
import Theme from '../Theme';
import Divider from '../components/Divider';
import mars from '../images/mars3.png';
import coffee from '../images/coffee3.png';
import rgb from '../images/rgb3.png';
import ratatap from '../images/ratatap3.png';
import marssq from '../images/proj-mars.png';
import coffeesq from '../images/proj-coffee.png';
import rgbsq from '../images/proj-rgb.png';
import ratatapsq from '../images/proj-ratatap.png';
import media from '../media';
import GlobalStyle from '../globalStyles';
import Footer from "../components/Footer";
import TopSVG from '../components/TopContainerSVG';
import SplitSVG from '../components/SplitContainerSVG';
import Profile from '../components/Profile';
import Blok from '../components/Blok';
import Nav from '../components/Nav';
import Recent from '../components/Recent';
import Prohibition from '../images/Prohibition.png';
import Watchdogs from '../images/watchdogs.png';
import Naturally from '../images/Naturally2.png';
import Urania from '../images/Urania.png';

function ImgSelector(img, imgsq) {
  const [imgSelection, setSelection] = useState(img)
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 992) {
        setSelection(img);
      } else {
        setSelection(imgsq);
      }
    }
    window.addEventListener('resize', handleResize)
  }, [])
  return imgSelection
}

const Main = styled.div`
  background-color: ${({ theme: { colors } }) => colors.deepsalmon};
  display: flex;
  flex-direction: column;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 500;
`;
const TopContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme: { colors } }) => colors.twilight};
  height: 600px;
    ${media.md`
  height: 500px;
  
`}
`;
const TopContent = styled.div`
  z-index: 5;
  margin: 10% auto 0 auto;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  ${media.md`
  width: 85%;
  flex-direction: row;
  align-items: initial;
  justify-content: space-between;
`}
    ${media.lg`
  width: 75%;
`}
    ${media.xl`
  width: 72%;
`}
    ${media.xxl`
  width: 80%;
`}
`;

const PageTitle = styled.h2`
  font-size: 1.1rem;
  color: black;
    ${media.lg`
  font-size: 1.4rem;
`}
`;
const TopRight = styled.h1`
  margin-top: 10rem;
  display: none;
  ${media.md`
  display: flex;
  flex-direction: column;
`}
`;

const MNIMN = styled.h1`
  color: white;
  margin-bottom: 1.2rem;
  font-size: 2rem;
  ${media.lg`
   font-size: 2.1rem;
`}
`;

const SplitContainer = styled.div`
  /* position: relative; */
  background-color: ${({ theme: { colors } }) => colors.lbutter};
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  ${media.lg`
  flex-direction: row;
`}
`;
const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  ${media.lg`
  width: 18vw; //must be controlled in conjct. with IconContainer
`}
`;
const ContainerRight = styled.div`
  background-color: ${({ theme: { colors } }) => colors.lbutter};
  width: 100%;
  display: flex;
  flex-direction: column; 
  align-items: center;
  /* margin-top: -200px; */
`;
const RecentPosition = styled.div`
  /* position: absolute; */
  width: 60%;
  margin-bottom: 100px;
`;
const RecentContainer = styled.div`
  /* background-color: white; */
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 80px;
    ${media.sm`
  flex-direction: row;
`}
    ${media.md`
    width: 70%;
`}
`;


const IndexPage = () => (
  <Theme>
    <GlobalStyle/>
    <SEO title="Patrick Dussault" />
    <Main>
      <TopContainer>
        <TopContent>
          <Profile />
          <TopRight>
            <MNIMN>Patrick Dussault</MNIMN>
            <PageTitle>Developer - Designer - Photographer</PageTitle>
            <Collage />
          </TopRight>
          <Nav />
        </TopContent>
      </TopContainer>
      <TopSVG/>
      <SplitSVG />
      <SplitContainer>
        <ContainerLeft>
          <Skills />
          {/* <Blok/> */}
        </ContainerLeft>
        <Divider/>
        <ContainerRight>
          <h3 style={{ color: 'black', marginBottom: '4rem', textTransform: "uppercase"}}>Recent projects</h3>
          {/* <RecentPosition> */}
          <RecentContainer>
            <Recent title={"Naturally"} subTitle={"Webflow Mock Website"} liveLink={'https://wellnaturally.webflow.io/'} ghLink={""} previewImg={Naturally}/>
            <Recent title={"Urania"} subTitle={"Mock Wordpress"} liveLink={'https://uraniaai.wordpress.com/'} ghLink={""} previewImg={Urania} />
            <Recent title={"CS Games"} subTitle={"Layout and countdown for CS Games 20"} liveLink={'https://ppduss.github.io/CSGames/'} ghLink={"https://github.com/ppduss/CSGames"} previewImg={Prohibition}/>
            <Recent title={"Watchdogs"} subTitle={"Watchdogs"}  liveLink={'https://ppduss.github.io/Watchdogs/'} ghLink={"https://github.com/ppduss/Watchdogs"} previewImg={Watchdogs}/>
          </RecentContainer>
          {/* </RecentPosition> */}
          <Project class="project" title={"The Mars Weather Network"} subTitle={"A weather report using two NASA APIs that tracks the last seven available Sols (Martian days). NOTE: An electronics issue these past few months is preventing InSight's sensors from sharing their data reliably."} previewImg={ImgSelector(mars, marssq)} liveLink={'https://ppduss.github.io/TheMarsWeatherNetwork/'} ghLink={"https://ppduss.github.io/TheMarsWeatherNetwork/"} projSkills={['HTML5', "SCSS", 'Flexbox', 'Grid', "React", 'API']} projTheme='mars'/>  
          <Project class="project" title={"Coffee Prescriber"} subTitle={"A playful app that tracks your happiness to productivity  ratio as you drink coffee and helps monitor whether it's wise to keep drinking."} previewImg={ImgSelector(coffee, coffeesq)} liveLink={'https://ppduss.github.io/Coffee-Prescriber/'} ghLink={"https://github.com/ppduss/Coffee-Prescriber"} projSkills={['HTML5', "SCSS", 'Flexbox', "React"]} projTheme='coffee' />  
          <Project class="project" title={"Ratatap Drum Pad"} subTitle={"A clone of the fantastic patatap.com drum pads using my favorite samples from their library."} previewImg={ImgSelector(ratatap, ratatapsq)} liveLink={'https://ppduss.github.io/Ratatap/'} ghLink={"https://github.com/ppduss/Ratatap"} projSkills={['HTML5', 'CSS3', 'JS', 'Paper.js', 'Howler.js']} projTheme='ratatap'/> 
          <Project class="project" title={"RGB Guessing Game"} subTitle={"Test your RGB skills and guess which box contains the randomly generated RGB value!"} previewImg={ImgSelector(rgb, rgbsq)} liveLink={'https://ppduss.github.io/RGB/'} ghLink={"https://github.com/ppduss/RGB"} projSkills={  ['HTML', "CSS", 'JS']} projTheme='rgb'/> 
        </ContainerRight>
      </SplitContainer>
      <About />
      <Footer/>
    </Main>
    </Theme>
)


export default IndexPage
