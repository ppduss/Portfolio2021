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
  width: 400px;
  height: 400px;
  ${media.md`
  justify-content: space-between;
  /* margin-top: 400px; */
  /* margin-left: 12vw; */
  `}
    ${media.lg`
  width: 450px;
  height: 450px;

  `}
    ${media.xl`
  width: 550px;
  `}
`;

const ProfileContent = styled.div`
  margin-top: 30%;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PortImg = styled.img`
/* position: relative; */
  width: 200px;
  border-radius: 35%;

  /* top: 40%; */
  ${media.md`
    width: 200px;
`}
  ${media.xl`
    width: 260px;
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
`;

const MNIMN = styled.h1`
  color: white;
  padding: 15px;
  margin-bottom: 5px;
`;


const Collage = () => (
  <ProfileContainer>
    <GeodomeSVG />
    <ProfileContent>
      <PortImg src={portrait} />
      <TxtCont>
        <MNIMN>Patrick Dussault</MNIMN>
        <h3>Web Developer</h3>
      </TxtCont>
    </ProfileContent>
  </ProfileContainer>
)

export default Collage