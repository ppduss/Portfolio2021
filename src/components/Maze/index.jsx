import React from "react";
import styled from "styled-components";
import Maze from './maze';

const Borderbox = styled.div`
  box-sizing: border-box;
`;

// body {
//   overflow: hidden;
//   min-height: 100vh;
// }

const Pointercontainer = styled.div`
  margin: 3rem;
  margin-bottom: 0;
`;

const Pointer = styled.img`
  width: 25%;
  height: auto;
  transform-origin: center 59%;
  display: block;
  margin: 0 auto;
  touch-action: none;
`;


// ---------LOGIC -----------//

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

const state = {
  mouse: {
    x: 0,
    y: 0,
  },
  maze: {
    x: 200,
    y: 200,
    rotation: 0,
  }
};

window.addEventListener('mousemove', (event) => {
  state.mouse.x = event.clientX;
  state.mouse.y = event.clientY;
})

const loop = (timestamp) => {
  const progress = timestamp - lastRender;
  Maze.update({ progress, state })
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  Maze.draw({ ctx, state });
  lastRender = timestamp;
  window.requestAnimationFrame(loop);
}

let lastRender = 0;
window.requestAnimationFrame(loop);


const Rotating = () => (
    <Borderbox>
    <Pointercontainer>
    <Pointer src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/pink-pointer.svg" alt id="pointer"/>
    </Pointercontainer>
    
    </Borderbox>
  
  
);

export default Rotating;