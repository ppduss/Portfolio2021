import styled, { keyframes, css } from "styled-components";
import React from "react";
import Button from "./Button";
import media from '../media';

const Proj = styled.div`
  display: flex;  
  flex-direction: column;
  justify-content: space-between;
  background-color:${
    (props) => props.projectTheme === 'mars' ? ({ theme: { colors } }) => colors.butter :
    props.projectTheme === 'coffee' ? ({ theme: { colors } }) => colors.lshadyblue :
    props.projectTheme === 'ratatap' ? ({ theme: { colors } }) => colors.greypoupon :
    props.projectTheme === 'rgb' ? ({ theme: { colors } }) => colors.butter : 'black' };
  /* border-top: 2px solid ${({ theme: { colors } }) => colors.grey}; */
  margin-bottom: 190px;
  border: 1px solid ${({ theme: { colors } }) => colors.twilight};
  height: 300px;
  font-weight: 400;
  font-size: 0.8em;
  width: 70%;
  max-width: 900px;
  
  /* ${media.xs`
    height: 600px;
    width: 600px;
    margin-bottom: 60px;

`}
  ${media.sm`
    height: 320px;
    width: 740px;
    flex-direction: row;
    margin-bottom: 60px;

`}
  ${media.md`
    height: 360px;
    width: 90%;
    max-width: 900px;
`}
  ${media.lg`
    height: 360px;
    width: 90%;
    max-width: 900px;
`}
  ${media.xl`
    height: 400px;
    max-width: 980px;
`} */
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
  width: 100%;
  background-color:${
    (props) => props.projectTheme === 'mars' ? ({ theme: { colors } }) => colors.twilight:
    props.projectTheme === 'coffee' ? ({ theme: { colors } }) => colors.twilight :
    props.projectTheme === 'ratatap' ? ({ theme: { colors } }) => colors.twilight:
    props.projectTheme === 'rgb' ? ({ theme: { colors } }) => colors.twilight : 'black' };
`;

  const Title = styled.h4` 
  font-size: 1.2rem;
  color: ${({ theme: { colors } }) => colors.white};
  font-weight: 600;
  padding-left: 24px;
  /* word-break: normal; */
  margin: 0px;
`;

const Subtitle = styled.p`
  color: ${({ theme: { colors } }) => colors.black};
  font-size: 0.9rem;
  /* display: relative;   */
  padding: 18px;
  word-break: normal;
  /* background-color: ${({ theme: { colors } }) => colors.lbutter}; */

`;


const Content = styled.div`  
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Tools = styled.div`
  /* background-color: ${({ theme: { colors } }) => colors.twilight}; */
  display: flex;
  /* width: 30%; */
  min-width: 120px;
  padding: 10px;
`;

const Preview = styled.img`
  width: 20%;
  max-width: auto;
  max-height: auto;
  margin-bottom: 0;
  /* border-bottom: 4px solid ${({ theme: { colors } }) => colors.twilight};
  border-right: 4px solid ${({ theme: { colors } }) => colors.twilight};
  border-left: 4px solid ${({ theme: { colors } }) => colors.twilight};*/
`;

const Details = styled.div`

`;

const Project = ({title, subTitle, previewImg, ghLink, liveLink, projSkills, projTheme}) => {
  
  return (
    <Proj projectTheme={projTheme}>
      <TitleContainer projectTheme={projTheme}>
        <Title >{title}</Title>  
      </TitleContainer>  
      <Content>
        <Details>
          <Subtitle projectTheme={projTheme}>{subTitle}</Subtitle>
          <Tools>
          {projSkills.map((s, i) => {
            return (
              <div key={i + s}>{s} &nbsp;</div>
            )
          })}
          </Tools>
          <Button goto={liveLink}>View Live</Button>
          <Button goto={ghLink}>View on GitHub</Button>
        </Details>
        <Preview src={previewImg}/>
        </Content>
    </Proj>

  )};

export default Project