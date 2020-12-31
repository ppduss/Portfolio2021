import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";
import Portrait from "../components/portrait";
import Collage from "../components/collage";
import Skills from "../components/skills";
import Project from "../components/project";
import SEO from "../components/seo";
// import Modal from '../components/modal/modal';
import mars from '../images/tmwn.jpeg';


const Main = styled.div`
  display: flex;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 500;
`;

const ContainerLeft = styled.div`
  /* background-color: whitesmoke; */
  border-right: 1px solid #111;
  max-width: 25vw;
  padding-right: 50px;
  margin-top: 100px;

`;
const ContainerRight = styled.div`
  /* background-color: whitesmoke; */
  margin-left: 100px;
  margin-top: 100px;
  width: 60vw;
`;


const IndexPage = () => (
  <Layout>
    <SEO title="Patrick Dussault" />
    <Main>
      {/* <Modal/> */}
    <ContainerLeft>
      <h1>Patrick Dussault</h1>
      <p>I develop websites</p>
      <p>Check me out</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Portrait/>
      </div>
        
      <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </ContainerLeft>
  
    <ContainerRight>
      <Skills/>
        <h5>Projects</h5>
        
        <Project title={"The Mars Weather Network"} subTitle={"A weather report using two NASA APIs that tracks the last seven available Sols (Martian days)."} previewImg={mars} liveLink={'https://ppduss.github.io/TheMarsWeatherNetwork/'} ghLink={"https://ppduss.github.io/TheMarsWeatherNetwork/"} projSkills={['HTML5', "CSS3 - SCSS", 'Flexbox + Grid', "React", 'API']} />  

        <Project title={"Coffee Prescriber"} subTitle={"A playful app that tracks your happiness to productivity ratio as you drink coffee and helps monitor whether it's wise to keep drinking."} previewImg={"tmwn"} liveLink={'https://ppduss.github.io/Coffee-Prescriber/'} ghLink={"https://github.com/ppduss/Coffee-Prescriber"} projSkills={['HTML5', "CSS3 - SCSS", 'Flexbox', "React"]} /> 
        
        <Project title={"RGB Game"} subTitle={"Guess which box contains the random RGB value!"} previewImg={"tmwn"} liveLink={'https://ppduss.github.io/RGB/'} ghLink={"https://github.com/ppduss/RGB"} projSkills={['HTML', "CSS", 'JS']} /> 
        
        <Project title={"Ratatap Drum Pad"} subTitle={"A clone of the patatap.com drum pads using my favorite samples."} previewImg={"tmwn"} liveLink={'https://ppduss.github.io/Ratatap/'} ghLink={"https://github.com/ppduss/Ratatap"} projSkills={['HTML5', 'CSS3', 'JS', 'Paper.js', 'Howler.js']} />  
      


        <div style={{ maxWidth: `800px`, marginBottom: `1.45rem` }}>
        <Collage/>
      </div>
    </ContainerRight>
      
    </Main>
  </Layout>
)

export default IndexPage
