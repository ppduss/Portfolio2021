import styled from "styled-components";
import React from "react"
import media from '../media';
import blok1 from '../images/blok1.png'


const BlokContainer = styled.div`

  ${media.md`

`}
`;

const Blok1Img = styled.img`
  width: 100px;

  ${media.md`
    width: 150px;
`}
  ${media.xl`
    width: 200px;
`}
`

const Blok = () => (
  <BlokContainer>
    <Blok1Img src={blok1}/>
    
  </BlokContainer>
)

export default Blok