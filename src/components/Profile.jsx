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
  width: 400px;
  ${media.md`
  justify-content: space-between;
  /* margin-top: 400px; */
  /* margin-left: 12vw; */
  `}
    ${media.lg`
  width: 450px;
  `}
    ${media.xl`
  width: 550px;
  `}
`;

const ProfileContent = styled.div`
 display: flex;
 flex-direction: column;
  align-items: center;
  justify-content: center;
 /* left: 12vw; */
`;

const PortImg = styled.img`
  /* position: absolute; */
  width: 200px;
  border-radius: 35%;
  margin-top: 20%;
  ${media.md`
    width: 200px;
`}
  ${media.xl`
    width: 260px;
`}
`
const MNIMN = styled.h1`
  background-color: ${({ theme: { colors } }) => colors.twilight};
  color: white;
  padding: 15px;
`;

const Collage = () => (
  <ProfileContainer>
    <GeodomeSVG />
    <ProfileContent>
      
      <PortImg src={portrait}/>
      <MNIMN>Patrick Dussault</MNIMN>
      <h3>I develop websites</h3>
      <p>Check meee out</p>
    </ProfileContent>
  </ProfileContainer>
)

export default Collage