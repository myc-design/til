import React, {useEffect, useRef} from 'react';
import Matter from 'matter-js';
import './Scene.css';

function Scene() {
  const boxRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const {
      Engine,
      Render,
      Runner,
      World,
      Bodies,
      Body,
      Events,
      MouseConstraint,
      Mouse,
    } = Matter;

    const cells = 6;
    const width = 1000;
    const height = 200;

    const unitLength = width / cells;

    const engine = Engine.create();
    engine.world.gravity.y = 1;
    const {world} = engine;
    const render = Render.create({
      element: boxRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        wireframes: false,
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

    // Walls 1000/200
    const walls = [
      Bodies.rectangle(500, 0, 999, 1, {
        isStatic: true,
      }),
      Bodies.rectangle(999, 199, 999, 1, {
        isStatic: true,
        isStatic: true,
      }),
      Bodies.rectangle(0, 199, 1000, 1, {
        isStatic: true,
      }),
      Bodies.rectangle(600, 500, 1, 599, {
        isStatic: true,
      }),
    ];
    World.add(world, walls);
    //random shapes

    for (let i = 0; i < 100; i++) {
      if (Math.random() > 0.5) {
        World.add(
          world,
          //randomise starting position
          //multiply starting position by width and height of canvas overall

          Bodies.rectangle(
            //randomise starting position of rectangles around the canvas
            Math.random() * width,
            Math.random() * height,
            50,
            10,
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
            20,
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
      <div
        ref={boxRef}
        style={{
          width: 0,
          height: 0,
        }}>
        <canvas ref={canvasRef} />
      </div>
    </>
  );
}

export default Scene;
