import styled from "styled-components";
import React from "react"
import collage from '../images/collage.png';
import media from '../media';

const ImgContainer = styled.a`
  /* position: absolute; */
  display: none;
  /* top: -90px;
  right: 2vw; */
  margin-top: 8rem; 
  margin-right: 3%; 
  ${media.md`
  display: block;
  `}
`

const Img = styled.img`
  width: 400px;
  ${media.md`
    width: 400px;
`}
  ${media.lg`
    width: 500px;
`}
  ${media.xl`
    width: 600px;
`}
  ${media.xxl`
    width: 800px;
`}
`;

const Collage = () => (
  <ImgContainer href="/Portfolio2021/Gallery">
    <Img src={collage} />
  </ImgContainer>
)

export default Collage