import React from 'react';

function Canvas() {
  const {
    Engine,
    Render,
    Runner,
    World,
    Bodies,
    Body,
    Events,
  } = Matter;

  const cells = 6;
  const width = 400;
  const height = 1000;

  const unitLength = width / cells;

  const engine = Engine.create();
  engine.world.gravity.y = 0;
  const {world} = engine;
  const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      wireframes: true,
      width,
      height,
    },
  });
  Render.run(render);
  Runner.run(Runner.create(), engine);
  return (
    <>
      <canvas></canvas>
    </>
  );
}
export default Canvas;
