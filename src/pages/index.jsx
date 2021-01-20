import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Portrait from "../components/portrait";
import Collage from "../components/collage";
import Skills from "../components/skills";
import Project from "../components/project";
import About from '../components/about';
import SEO from "../components/seo";
import Theme from '../Theme';
import Divider from '../components/divider';
// import Modal from '../components/modal/modal';
import mars from '../images/tmwn.jpeg';
// import Maze from '../components/Maze';


const Main = styled.div`
  background-color: ${({ theme: { colors } }) => colors.butter};
  display: flex;
  flex-direction: column;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 500;
  padding: 30px;

`;
const TopContainer = styled.div`
  background-color: ${({ theme: { colors } }) => colors.greenstone};
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 500px;
  /* width: 100vw; */
  margin-top: 100px;
`;
const ProfileContainer = styled.div`
  background-color: ${({ theme: { colors } }) => colors.greenstone};
  display: flex;
  flex-direction: column;
`;


const SplitContainer = styled.div`
  background-color: ${({ theme: { colors } }) => colors.butter};
  display: flex;
  margin-top: 100px;
`;
const ContainerLeft = styled.div`
  /* background-color: whitesmoke; */
  /* border-right: 1px solid #111; */
  max-width: 20vw;
  padding-right: 50px;
`;
const ContainerRight = styled.div`
  background-color: ${({ theme: { colors } }) => colors.butter};
  margin-left: 100px;
  width: 70vw;
`;



const IndexPage = () => (
  <Theme>
    <SEO title="Patrick Dussault" />
    <Main>
      <TopContainer>
        <ProfileContainer>
          <h1>Patrick Dussault</h1>
          <p>I develop websites</p>
          <p>Check me out</p>
          <Portrait />
        </ProfileContainer>
        <Collage />   
      </TopContainer>
      <SplitContainer>
        <ContainerLeft>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
        </ContainerLeft>
          <Divider/>
        <ContainerRight>
          <About/>
          <Skills />
          <h5>Projects</h5>

          <Project title={"The Mars Weather Network"} subTitle={"A weather report using two NASA APIs that tracks   the last seven available Sols (Martian days)."} previewImg={mars} liveLink={'https://ppduss.github.io/  TheMarsWeatherNetwork/'} ghLink={"https://ppduss.github.io/TheMarsWeatherNetwork/"} projSkills={['HTML5',   "CSS3 - SCSS", 'Flexbox + Grid', "React", 'API']} />  
          <Project title={"Coffee Prescriber"} subTitle={"A playful app that tracks your happiness to productivity  ratio as you drink coffee and helps monitor whether it's wise to keep drinking."} previewImg={"tmwn"}  liveLink={'https://ppduss.github.io/Coffee-Prescriber/'} ghLink={"https://github.com/ppduss/ Coffee-Prescriber"} projSkills={['HTML5', "CSS3 - SCSS", 'Flexbox', "React"]} /> 
          <Project title={"RGB Game"} subTitle={"Guess which box contains the random RGB value!"} previewImg= {"tmwn"} liveLink={'https://ppduss.github.io/RGB/'} ghLink={"https://github.com/ppduss/RGB"} projSkills={  ['HTML', "CSS", 'JS']} /> 
          <Project title={"Ratatap Drum Pad"} subTitle={"A clone of the patatap.com drum pads using my favorite samples."} previewImg={"tmwn"} liveLink={'https://ppduss.github.io/Ratatap/'} ghLink={"https://github.com/ppduss/Ratatap"} projSkills={['HTML5', 'CSS3', 'JS', 'Paper.js', 'Howler.js']} />  
        </ContainerRight>
      </SplitContainer>
    </Main>
    </Theme>
)

export default IndexPage
