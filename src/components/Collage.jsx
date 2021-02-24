import styled from "styled-components";
import React from "react"
import collage from '../images/collage.png';
import media from '../media';

const ImgContainer = styled.a`
  /* position: absolute; */
  display: none;
  /* top: -90px;
  right: 2vw; */
  margin-top: 6rem; 
  ${media.md`
  display: block;
  `}
`

const Img = styled.img`
  width: 400px;
  ${media.md`
    width: 500px;
`}
  ${media.lg`
    width: 600px;
`}
  ${media.xl`
    width: 700px;
`}
`;

const Collage = () => (
  <ImgContainer href="/Gallery">
    <Img src={collage} />
  </ImgContainer>
)

export default Collage