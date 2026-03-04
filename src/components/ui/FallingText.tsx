import React, { useRef, useState, useEffect } from 'react';
import Matter from 'matter-js';

interface FallingTextProps {
  text?: string;
  highlightWords?: string[];
  trigger?: 'auto' | 'scroll' | 'click' | 'hover';
  backgroundColor?: string;
  wireframes?: boolean;
  gravity?: number;
  mouseConstraintStiffness?: number;
  fontSize?: string;
}

const COLORS = [
  '#FFD600',
  '#FF006E',
  '#00F5FF',
  '#FF8C00',
  '#a78bfa',
  '#4ade80',
];

const FallingText: React.FC<FallingTextProps> = ({
  text = '',
  highlightWords = [],
  trigger = 'auto',
  gravity = 1,
  mouseConstraintStiffness = 0.2,
  fontSize = '1rem'
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const [effectStarted, setEffectStarted] = useState(false);

  useEffect(() => {
    if (!textRef.current) return;
    const words = text.split(' ');
    const newHTML = words
      .map((word, i) => {
        const isHighlighted = highlightWords.some(hw => word.startsWith(hw));
        const color = COLORS[i % COLORS.length];
        const textColor =
          color === '#FFD600' || color === '#00F5FF' || color === '#4ade80'
            ? '#000000'
            : '#ffffff';
        return `<span
          class="inline-block select-none font-black"
          style="
            background-color: ${isHighlighted ? '#FF006E' : color};
            color: ${isHighlighted ? '#ffffff' : textColor};
            padding: 6px 14px;
            margin: 4px;
            border-radius: 10px;
            border: none;
            outline: none;
            box-shadow: none;
          "
        >${word}</span>`;
      })
      .join(' ');
    textRef.current.innerHTML = newHTML;
  }, [text, highlightWords]);

  useEffect(() => {
    if (trigger === 'auto') {
      setEffectStarted(true);
      return;
    }
    if (trigger === 'scroll' && containerRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setEffectStarted(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(containerRef.current);
      return () => observer.disconnect();
    }
  }, [trigger]);

  useEffect(() => {
    if (!effectStarted) return;
    if (!containerRef.current || !textRef.current) return;

    const { Engine, World, Bodies, Runner, Mouse, MouseConstraint, Events } = Matter;

    const containerRect = containerRef.current.getBoundingClientRect();
    const width = containerRect.width;
    const height = containerRect.height;
    if (width <= 0 || height <= 0) return;

    // Create engine only — NO Render.create, so NO canvas, NO ash background
    const engine = Engine.create();
    engine.world.gravity.y = gravity;

    const boundaryOptions = { isStatic: true };
    const floor = Bodies.rectangle(width / 2, height + 25, width, 50, boundaryOptions);
    const leftWall = Bodies.rectangle(-25, height / 2, 50, height, boundaryOptions);
    const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height, boundaryOptions);
    const ceiling = Bodies.rectangle(width / 2, -25, width, 50, boundaryOptions);

    const wordSpans = textRef.current.querySelectorAll('span');
    const wordBodies = [...wordSpans].map(elem => {
      const rect = elem.getBoundingClientRect();
      const x = rect.left - containerRect.left + rect.width / 2;
      const y = rect.top - containerRect.top + rect.height / 2;

      const body = Bodies.rectangle(x, y, rect.width, rect.height, {
        restitution: 0.8,
        frictionAir: 0.01,
        friction: 0.2,
      });
      Matter.Body.setVelocity(body, { x: (Math.random() - 0.5) * 5, y: 0 });
      Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.05);

      return { elem, body };
    });

    // Position spans absolutely
    wordBodies.forEach(({ elem, body }) => {
      (elem as HTMLElement).style.position = 'absolute';
      (elem as HTMLElement).style.left = `${body.position.x}px`;
      (elem as HTMLElement).style.top = `${body.position.y}px`;
      (elem as HTMLElement).style.transform = 'translate(-50%, -50%)';
    });

    // Mouse interaction on the container div
    const mouse = Mouse.create(containerRef.current);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: mouseConstraintStiffness,
        render: { visible: false },
      },
    });

    World.add(engine.world, [
      floor, leftWall, rightWall, ceiling,
      mouseConstraint,
      ...wordBodies.map(wb => wb.body),
    ]);

    const runner = Runner.create();
    Runner.run(runner, engine);

    // Update HTML positions on every engine tick
    Events.on(engine, 'afterUpdate', () => {
      wordBodies.forEach(({ body, elem }) => {
        (elem as HTMLElement).style.left = `${body.position.x}px`;
        (elem as HTMLElement).style.top = `${body.position.y}px`;
        (elem as HTMLElement).style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;
      });
    });

    return () => {
      Runner.stop(runner);
      World.clear(engine.world, false);
      Engine.clear(engine);
    };
  }, [effectStarted, gravity, mouseConstraintStiffness]);

  const handleTrigger = () => {
    if (!effectStarted && (trigger === 'click' || trigger === 'hover')) {
      setEffectStarted(true);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full cursor-pointer text-center pt-8 overflow-hidden"
      style={{ zIndex: 1, background: 'hsl(var(--background))' }}
      onClick={trigger === 'click' ? handleTrigger : undefined}
      onMouseEnter={trigger === 'hover' ? handleTrigger : undefined}
    >
      <div
        ref={textRef}
        className="inline-block"
        style={{ fontSize, lineHeight: 1.4 }}
      />
    </div>
  );
};

export default FallingText;