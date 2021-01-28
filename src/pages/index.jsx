import React from "react";
import { Link } from "gatsby";
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
import media from '../media';
import GlobalStyle from '../globalStyles';
import Footer from "../components/Footer";
import TopSVG from '../components/TopContainerSVG';
import SplitSVG from '../components/SplitContainerSVG';
import Profile from '../components/Profile';

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

const SplitContainer = styled.div`
  background-color: ${({ theme: { colors } }) => colors.lbutter};
  display: flex;
  flex-direction: column;
  padding-top:100px;
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
`;

const IndexPage = () => (
  <Theme>
    <GlobalStyle/>
    <SEO title="Patrick Dussault" />
    <Main>
      <TopContainer>
        <Profile/>
        <Collage /> 
      </TopContainer>
      <TopSVG/>
      <SplitSVG/>
      <SplitContainer>
        <ContainerLeft>
          <Skills />
          {/* <Link to="/page-2/">Go to page 2</Link> <br />
          <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
        </ContainerLeft>
        <Divider/>
        <ContainerRight>
          <Project title={"The Mars Weather Network"} subTitle={"A weather report using two NASA APIs that tracks   the last seven available Sols (Martian days)."} previewImg={mars} liveLink={'https://ppduss.github.io/  TheMarsWeatherNetwork/'} ghLink={"https://ppduss.github.io/TheMarsWeatherNetwork/"} projSkills={['HTML5', "CSS3 - SCSS", 'Flexbox', 'Grid', "React", 'API']} projTheme='mars'/>  
          <Project title={"Coffee Prescriber"} subTitle={"A playful app that tracks your happiness to productivity  ratio as you drink coffee and helps monitor whether it's wise to keep drinking."} previewImg={coffee}  liveLink={'https://ppduss.github.io/Coffee-Prescriber/'} ghLink={"https://github.com/ppduss/ Coffee-Prescriber"} projSkills={['HTML5', "SCSS", 'Flexbox', "React"]} projTheme='coffee'/>  
          <Project title={"RGB Game"} subTitle={"Guess which box contains the random RGB value!"} previewImg= {rgb} liveLink={'https://ppduss.github.io/RGB/'} ghLink={"https://github.com/ppduss/RGB"} projSkills={  ['HTML', "CSS", 'JS']} projTheme='rgb'/> 
          <Project title={"Ratatap Drum Pad"} subTitle={"A clone of the patatap.com drum pads using my favorite samples."} previewImg={ratatap} liveLink={'https://ppduss.github.io/Ratatap/'} ghLink={"https://github.com/ppduss/Ratatap"} projSkills={['HTML5', 'CSS3', 'JS', 'Paper.js', 'Howler.js']} projTheme='ratatap'/>    
        </ContainerRight>
      </SplitContainer>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#bbd1c9" fill-opacity="1" d="M0,32L720,320L1440,160L1440,320L720,320L0,320Z"></path></svg> */}
      <About />
      <Footer/>
    </Main>
    
    </Theme>
)

export default IndexPage
