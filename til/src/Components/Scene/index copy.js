import React, {useEffect, useRef} from 'react';
import Matter from 'matter-js';
import './Scene.css';

function Scene() {
  useEffect(() => {
    const {
      Engine,
      Render,
      Runner,
      World,
      Bodies,
      MouseConstraint,
      Mouse,
    } = Matter;

    const width = 1800;
    const height = 200;

    const engine = Engine.create();
    const {world} = engine;
    const render = Render.create({
      canvas: document.querySelector('.game'),
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

    World.add(
      world,
      MouseConstraint.create(engine, {
        mouse: Mouse.create(render.canvas),
      })
    );

    // Walls
    const walls = [
      Bodies.rectangle(800, 0, 800, 40, {isStatic: true}),
      Bodies.rectangle(200, 420, 800, 140, {
        isStatic: true,
      }),
      Bodies.rectangle(0, 300, 40, 600, {isStatic: true}),
      Bodies.rectangle(800, 300, 40, 600, {isStatic: true}),
    ];
    World.add(world, walls);
    //random shapes

    for (let i = 0; i < 270; i++) {
      if (Math.random() > 0.5) {
        World.add(
          world,
          Bodies.circle(
            Math.random() * width,
            Math.random() * height,
            20,
            {
              render: {
                fillStyle: 'green',
              },
            }
          )
        );
      } else {
        World.add(
          world,
          Bodies.circle(
            Math.random() * width,
            Math.random() * height,
            35,
            {
              render: {
                fillStyle: 'green',
              },
            }
          )
        );
      }
    }
  }, []);

  return (
    <>
      <section class="container">
        <div id="one"></div>
        <div id="two"></div>
      </section>
    </>
  );
}

export default Scene;
