import mazeImageSrc from '../../images/code.png';

const mazeImage = new Image();
let imageLoaded = false;
mazeImage.onload = () => {
  imageLoaded = true;
}
mazeImage.src = mazeImageSrc

export default {
  update: ({ progess, state }) => {
    state.maze.rotation = Math.atan2(
      state.mouse.x - state.maze.x,
      -(state.mouse.y - state.maze.y),
    );
  },
  draw: ({ ctx, state }) => {
    ctx.save();
    ctx.translate(
      state.maze.x,
      state.maze.y,
    );
    ctx.rotate(state.maze.rotation);

    ctx.drawImage(
      mazeImage,
      -mazeImage.width / 2,
      mazeImage.heigh / 2,
    )
    ctx.restore();
  }

}