import styled from "styled-components";
import React from "react"
import collage from '../images/collage.png';
import media from '../media';

const ImgContainer = styled.div`
  /* position: absolute; */
  display: block;
  top: 0;
  left: 0;
  margin-top: -30px;
`

const Img = styled.img`
  width: 400px;
  /* border-radius: 100%; */
  ${media.md`
    width: 600px;
`}
  ${media.xl`
    width: 700px;
`}`

const Collage = () => (
  <ImgContainer>
    <Img src={collage} />
  </ImgContainer>
)

export default Collage