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
  background-color: ${({ theme: { colors } }) => colors.butter};
  display: flex;
  flex-direction: column;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 500;
  /* padding: 30px; */
`;
const TopContainer = styled.div`
  background-color: ${({ theme: { colors } }) => colors.greenstone};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 350px;
  z-index: 2;
  margin: 80px 30px 0 30px;

`;
const ProfileContainer = styled.div`
  /* background-color: ${({ theme: { colors } }) => colors.greenstone}; */
  display: flex;
  flex-direction: column;
  margin-left: 5vw;
  margin-top: 200px;

`;
const CollageAboutContainer = styled.div` 
  display: flex;
  flex-direction: column;
  margin-top: 140px;
  margin-right: 1vw;
  ${media.md`
    margin-top: 140px;

  `}
  ${media.lg`
    margin-top: 600px;

  `}
  ${media.xl`
    margin-top: 500px;
  `}
`;

const SplitContainer = styled.div`
  background-color: ${({ theme: { colors } }) => colors.butter};
  display: flex;
  margin-top: 180px;
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
  background-color: ${({ theme: { colors } }) => colors.butter};
  margin-left: 12vw;
  width: 70vw;
  /* display: flex;
  flex-direction: column; */
  /* justify-items: left; */
`;

const TopSVG = styled.svg`
  /* margin-top: -20px; */
  transform: scaleX(-1);
  margin: 0 30px;
`;


const IndexPage = () => (
  
  <Theme>
    <GlobalStyle/>
    <SEO title="Patrick Dussault" />
    <Main>
      <TopContainer>
        <ProfileContainer>
          <h1>Patrick Dussault</h1>
          <h3>I develop websites</h3>
          <p>Check me out</p>
          <Portrait />
        </ProfileContainer>
        <CollageAboutContainer>
          
          <Collage /> 
        </CollageAboutContainer>
      </TopContainer>
      {/* <TopSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#bbd1c9" fill-opacity="1" d="M0,320L720,256L1440,64L1440,0L720,0L0,0Z"></path></TopSVG> */}
      {/* <TopSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#bbd1c9" fill-opacity="1" d="M0,32L1440,288L1440,0L0,0Z"></path></TopSVG> */}
      <TopSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#bbd1c9" fill-opacity="1" d="M0,32L480,64L960,320L1440,224L1440,0L960,0L480,0L0,0Z"></path></TopSVG>
      
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
