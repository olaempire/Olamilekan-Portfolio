import React from 'react';

const shapes = [
  { type: 'star4',    x: 60,   y: 80,   size: 40, rotate: 0 },
  { type: 'star6',    x: 200,  y: 40,   size: 28, rotate: 15 },
  { type: 'cross',    x: 350,  y: 120,  size: 32, rotate: 45 },
  { type: 'circle',   x: 520,  y: 60,   size: 36, rotate: 0 },
  { type: 'diamond',  x: 700,  y: 90,   size: 30, rotate: 0 },
  { type: 'star8',    x: 870,  y: 50,   size: 34, rotate: 22 },
  { type: 'triangle', x: 1050, y: 70,   size: 38, rotate: 0 },
  { type: 'flower',   x: 1230, y: 55,   size: 32, rotate: 10 },
  { type: 'square',   x: 1400, y: 110,  size: 26, rotate: 20 },
  { type: 'circle',   x: 30,   y: 280,  size: 24, rotate: 0 },
  { type: 'star4',    x: 160,  y: 360,  size: 44, rotate: 30 },
  { type: 'chevron',  x: 310,  y: 250,  size: 36, rotate: 0 },
  { type: 'diamond',  x: 480,  y: 320,  size: 28, rotate: 45 },
  { type: 'cross',    x: 660,  y: 240,  size: 30, rotate: 0 },
  { type: 'star6',    x: 840,  y: 300,  size: 40, rotate: 20 },
  { type: 'square',   x: 1010, y: 260,  size: 34, rotate: 15 },
  { type: 'triangle', x: 1180, y: 340,  size: 30, rotate: 180 },
  { type: 'flower',   x: 1360, y: 280,  size: 36, rotate: 45 },
  { type: 'star8',    x: 90,   y: 520,  size: 38, rotate: 10 },
  { type: 'circle',   x: 250,  y: 580,  size: 30, rotate: 0 },
  { type: 'star4',    x: 420,  y: 500,  size: 26, rotate: 45 },
  { type: 'chevron',  x: 600,  y: 560,  size: 32, rotate: 180 },
  { type: 'diamond',  x: 780,  y: 510,  size: 38, rotate: 0 },
  { type: 'flower',   x: 950,  y: 575,  size: 28, rotate: 30 },
  { type: 'cross',    x: 1120, y: 530,  size: 36, rotate: 20 },
  { type: 'star6',    x: 1310, y: 555,  size: 32, rotate: 0 },
  { type: 'triangle', x: 50,   y: 750,  size: 34, rotate: 60 },
  { type: 'square',   x: 200,  y: 820,  size: 28, rotate: 10 },
  { type: 'star8',    x: 370,  y: 730,  size: 40, rotate: 5 },
  { type: 'circle',   x: 560,  y: 800,  size: 26, rotate: 0 },
  { type: 'cross',    x: 730,  y: 760,  size: 34, rotate: 45 },
  { type: 'star4',    x: 900,  y: 830,  size: 30, rotate: 15 },
  { type: 'chevron',  x: 1080, y: 745,  size: 36, rotate: 0 },
  { type: 'diamond',  x: 1260, y: 805,  size: 28, rotate: 30 },
  { type: 'flower',   x: 1430, y: 760,  size: 32, rotate: 20 },
  { type: 'star6',    x: 130,  y: 960,  size: 36, rotate: 0 },
  { type: 'circle',   x: 300,  y: 1020, size: 30, rotate: 0 },
  { type: 'diamond',  x: 470,  y: 970,  size: 34, rotate: 20 },
  { type: 'cross',    x: 650,  y: 1040, size: 28, rotate: 0 },
  { type: 'star4',    x: 820,  y: 980,  size: 40, rotate: 35 },
  { type: 'triangle', x: 1000, y: 1030, size: 30, rotate: 90 },
  { type: 'flower',   x: 1180, y: 965,  size: 36, rotate: 15 },
  { type: 'square',   x: 1380, y: 1010, size: 26, rotate: 30 },
];
const type = [
  { type: 'OLAMILEKAN',   x: 520,  y: 60,   size: 36, rotate: 0 },
]

function renderShape(type: string, size: number, strokeColor: string) {
  const s = size;
  const h = s / 2;
  const sw = Math.max(1.5, s * 0.05);
  const props = {
    fill: 'none',
    stroke: strokeColor,
    strokeWidth: sw,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  switch (type) {
    case 'circle':
      return <circle cx={h} cy={h} r={h * 0.85} {...props} />;
    case 'square':
      return <rect x={sw} y={sw} width={s - sw * 2} height={s - sw * 2} {...props} />;
    case 'triangle':
      return <polygon points={`${h},${sw} ${s - sw},${s - sw} ${sw},${s - sw}`} {...props} />;
    case 'diamond':
      return <polygon points={`${h},${sw} ${s - sw},${h} ${h},${s - sw} ${sw},${h}`} {...props} />;
    case 'star4': {
      const r1 = h * 0.9, r2 = h * 0.38;
      const pts = Array.from({ length: 8 }, (_, i) => {
        const angle = (i * Math.PI) / 4 - Math.PI / 2;
        const r = i % 2 === 0 ? r1 : r2;
        return `${h + r * Math.cos(angle)},${h + r * Math.sin(angle)}`;
      }).join(' ');
      return <polygon points={pts} {...props} />;
    }
    case 'star6': {
      const r1 = h * 0.9, r2 = h * 0.45;
      const pts = Array.from({ length: 12 }, (_, i) => {
        const angle = (i * Math.PI) / 6 - Math.PI / 2;
        const r = i % 2 === 0 ? r1 : r2;
        return `${h + r * Math.cos(angle)},${h + r * Math.sin(angle)}`;
      }).join(' ');
      return <polygon points={pts} {...props} />;
    }
    case 'star8': {
      const r1 = h * 0.9, r2 = h * 0.38;
      const pts = Array.from({ length: 16 }, (_, i) => {
        const angle = (i * Math.PI) / 8 - Math.PI / 2;
        const r = i % 2 === 0 ? r1 : r2;
        return `${h + r * Math.cos(angle)},${h + r * Math.sin(angle)}`;
      }).join(' ');
      return <polygon points={pts} {...props} />;
    }
    case 'cross': {
      const t = s * 0.28;
      return (
        <polygon points={`
          ${h - t},${sw} ${h + t},${sw}
          ${h + t},${h - t} ${s - sw},${h - t}
          ${s - sw},${h + t} ${h + t},${h + t}
          ${h + t},${s - sw} ${h - t},${s - sw}
          ${h - t},${h + t} ${sw},${h + t}
          ${sw},${h - t} ${h - t},${h - t}
        `} {...props} />
      );
    }
    case 'flower': {
      const r = h * 0.38;
      const offsets: [number, number][] = [
        [0, -h * 0.52], [h * 0.52, 0], [0, h * 0.52], [-h * 0.52, 0],
      ];
      return (
        <g>
          {offsets.map(([ox, oy], i) => (
            <ellipse key={i} cx={h + ox} cy={h + oy} rx={r} ry={r * 0.6}
              transform={`rotate(${i * 90} ${h} ${h})`} {...props} />
          ))}
          <circle cx={h} cy={h} r={h * 0.2} {...props} />
        </g>
      );
    }
    case 'chevron': {
      const pad = s * 0.12;
      return (
        <g>
          <polyline points={`${pad},${h * 0.4} ${h},${h * 0.9} ${s - pad},${h * 0.4}`} {...props} />
          <polyline points={`${pad},${h * 0.9} ${h},${h * 1.4} ${s - pad},${h * 0.9}`} {...props} />
        </g>
      );
    }
    default:
      return <circle cx={h} cy={h} r={h * 0.85} {...props} />;
  }
}

interface WireframeBackgroundProps {
  darkMode?: boolean;
}

export function WireframeBackground({ darkMode = false }: WireframeBackgroundProps) {
  const strokeColor = darkMode
    ? 'rgba(255,255,255,0.18)'
    : 'rgba(0,0,0,0.12)';

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0, width: '100vw', height: '100vh' }}
      aria-hidden="true"
    >
      <svg
        xmlns=""
        viewBox="0 0 1500 1100"
        preserveAspectRatio="xMidYMid slice"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      >
        {shapes.map((shape, i) => (
          <g
            key={i}
            transform={`translate(${shape.x}, ${shape.y}) rotate(${shape.rotate}, ${shape.size / 2}, ${shape.size / 2})`}
          >
            {renderShape(shape.type, shape.size, strokeColor)}
          </g>
        ))}
      </svg>
    </div>
  );
}