import styled from "styled-components";
import React from "react"
import media from '../media';
import portrait from '../images/portrait3.png'
import GeodomeSVG from '../components/Geodome';
import Theme from '../Theme';


const ProfileContainer = styled.div`
  position: relative;
  display: flex; 
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  ${media.xs`
  width: 400px;
  height: 400px;
  `}
  ${media.md`
  justify-content: space-between;
  width: 350px;
  height: 400px;
  `}
    ${media.lg`
  width: 380px;
  height: 450px;

  `}
    ${media.xl`
  width: 500px;
  `}
    ${media.xxl`
  width: 550px;
  `}
`;

const ProfileContent = styled.div`
  position: absolute;
  z-index: 4;
  /* margin-top: 30%; */
  top: 22%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${media.md`
  top: 5%;
`}
`;

const PortImg = styled.img`
/* position: relative; */
  width: 200px;
  border-radius: 35%;
  margin-bottom: 1rem;

  ${media.md`
    width: 200px;
    margin-bottom: 1.45rem;
`}
  ${media.xl`
    width: 240px;
`}
`;

const TxtCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-radius: 12px;
  background-color: rgb(47,90,98,0.9);
  padding-bottom: 2rem;
  ${media.md`
   display: none;
`}
`;

const MNIMN = styled.h1`
  color: white;
  padding: 15px;
  margin-bottom: 5px;
   font-size: 2rem;
  ${media.sm`
   font-size: 2.1rem;
`}
`;


const Collage = () => (
  <ProfileContainer>
    <GeodomeSVG />
    <ProfileContent>
      <PortImg src={portrait} alt="portrait"/>
      <TxtCont>
        <MNIMN>Patrick Dussault</MNIMN>
        <h3>Web Developer</h3>
      </TxtCont>
    </ProfileContent>
  </ProfileContainer>
)

export default Collage