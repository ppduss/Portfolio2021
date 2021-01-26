import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Portrait from "../components/Portrait";
import Collage from "../components/Collage";
import Skills from "../components/Skills/Index";
import Project from "../components/project";
import About from '../components/about';
import SEO from "../components/seo";
import Theme from '../Theme';
import Divider from '../components/Divider';
import mars from '../images/tmwn.jpeg';
import media from '../media';
import GlobalStyle from '../globalStyles';
import Footer from "../components/Footer";

const Main = styled.div`
  background-color: ${({ theme: { colors } }) => colors.deepsalmon};
  display: flex;
  flex-direction: column;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 500;
  /* padding: 30px; */
`;
const TopContainer = styled.div`
  background-color: ${({ theme: { colors } }) => colors.twilight};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 400px;
  z-index: 2;
  margin: 0px 0px 0px 0px;

`;
const ProfileContainer = styled.div`
  /* background-color: ${({ theme: { colors } }) => colors.greenstone}; */
  display: flex;
  flex-direction: column;
  margin-left: 12vw;
  margin-top: 400px;
`;

const SplitContainer = styled.div`
  background-color: ${({ theme: { colors } }) => colors.lightbutter};
  display: flex;
  /* margin-top: 100px; */
`;
const ContainerLeft = styled.div`
  /* display:flex;
  flex-direction: column; */
  width: 18vw; //must be controlled in conjct. with IconContainer
  /* ${media.lg`
    width: 190px;
  `} */
`;
const ContainerRight = styled.div`
  background-color: ${({ theme: { colors } }) => colors.lightbutter};
  /* margin-left: 12vw; */
  width: 100%;
  display: flex;
  flex-direction: column; 
  align-items: center;
`;

const TopSVG = styled.svg`
  /* margin-top: -20px; */
  transform: scaleX(-1); 
  /* translate: (0, -100); */
  /* margin: 0 30px; */
`;
const SecSVG = styled.svg`
  /* margin-top: -20px; */
  transform: scale(1, -1); 
  /* translate: (0, -100); */
  /* margin: 0 30px; */
`;

const IndexPage = () => (
  <Theme>
    <GlobalStyle/>
    <SEO title="Patrick Dussault" />
    <Main>
      <TopContainer>
        <ProfileContainer>
          <Portrait />
          <h2>Patrick Dussault</h2>
          <h3>I develop websites</h3>
          <p>Check me out</p>
          
        </ProfileContainer>
        <Collage /> 
      
      </TopContainer>
      <TopSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2f5a62" fill-opacity="1" d="M0,32L480,64L960,320L1440,224L1440,0L960,0L480,0L0,0Z"></path></TopSVG> 
      {/* <TopSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#bbd1c9" fill-opacity="1" d="M0,320L720,256L1440,64L1440,0L720,0L0,0Z"></path></TopSVG> */}
      {/* <SecSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a7bdd1" fill-opacity="1" d="M0,32L1440,288L1440,0L0,0Z"></path></SecSVG> */}
      {/* <SecSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a7bdd1" fill-opacity="1" d="M0,32L480,64L960,320L1440,224L1440,0L960,0L480,0L0,0Z"></path></SecSVG> */}
      <SecSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff8ef" fill-opacity="1" d="M0,400L450,264L960,320L1440,224L1440,0L960,0L480,0L0,0Z"></path></SecSVG>

      
      <SplitContainer>
        <ContainerLeft>
          <Skills />
          {/* <Link to="/page-2/">Go to page 2</Link> <br />
          <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
        </ContainerLeft>
        <Divider/>
        <ContainerRight>
          
          <h5>Projects</h5>

          <Project title={"The Mars Weather Network"} subTitle={"A weather report using two NASA APIs that tracks   the last seven available Sols (Martian days)."} previewImg={mars} liveLink={'https://ppduss.github.io/  TheMarsWeatherNetwork/'} ghLink={"https://ppduss.github.io/TheMarsWeatherNetwork/"} projSkills={['HTML5',   "CSS3 - SCSS", 'Flexbox', 'Grid', "React", 'API']} />  
          <Project title={"Coffee Prescriber"} subTitle={"A playful app that tracks your happiness to productivity  ratio as you drink coffee and helps monitor whether it's wise to keep drinking."} previewImg={"tmwn"}  liveLink={'https://ppduss.github.io/Coffee-Prescriber/'} ghLink={"https://github.com/ppduss/ Coffee-Prescriber"} projSkills={['HTML5', "SCSS", 'Flexbox', "React"]} /> 
          <Project title={"RGB Game"} subTitle={"Guess which box contains the random RGB value!"} previewImg= {"tmwn"} liveLink={'https://ppduss.github.io/RGB/'} ghLink={"https://github.com/ppduss/RGB"} projSkills={  ['HTML', "CSS", 'JS']} /> 
          <Project title={"Ratatap Drum Pad"} subTitle={"A clone of the patatap.com drum pads using my favorite samples."} previewImg={"tmwn"} liveLink={'https://ppduss.github.io/Ratatap/'} ghLink={"https://github.com/ppduss/Ratatap"} projSkills={['HTML5', 'CSS3', 'JS', 'Paper.js', 'Howler.js']} />  
        </ContainerRight>
      </SplitContainer>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#bbd1c9" fill-opacity="1" d="M0,32L720,320L1440,160L1440,320L720,320L0,320Z"></path></svg> */}
      <About />
      <Footer/>
    </Main>
    
    </Theme>
)

export default IndexPage
