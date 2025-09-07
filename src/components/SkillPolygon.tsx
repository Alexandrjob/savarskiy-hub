'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Box } from '@mui/material';

interface Skill {
  name: string;
  level: number;
}

const skills: Skill[] = [
  { name: 'Go', level: 90 },
  { name: 'C# & .NET', level: 85 },
  { name: 'Databases', level: 80 },
  { name: 'Messaging', level: 75 },
  { name: 'DevOps', level: 70 },
  { name: 'Sys Design', level: 65 },
];

const SkillPolygon: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(320);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      if (entries[0]) {
        const { width } = entries[0].contentRect;
        setSize(width);
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, []);

  const center = size / 2;
  const padding = size * 0.08;
  const baseRadius = center - padding * 1.2;
  const labelRadius = center - padding * 0.5;
  const labelFontSize = Math.max(10, size * 0.055);

  const animatedRadius = useMotionValue(baseRadius);

  useEffect(() => {
    const controls = animate(animatedRadius, [baseRadius, baseRadius * 1.03, baseRadius], {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 1,
    });
    return () => controls.stop();
  }, [baseRadius, animatedRadius]);

  const getCoordinates = (currentRadius: number, percent: number, i: number, total: number) => {
    const angle = ((Math.PI * 2) / total) * i - Math.PI / 2;
    const x = center + currentRadius * Math.cos(angle) * (percent / 100);
    const y = center + currentRadius * Math.sin(angle) * (percent / 100);
    return { x, y };
  };

  const polygonPoints = useTransform(animatedRadius, (currentAnimatedRadius) => {
    return skills
      .map((skill, i) => {
        const { x, y } = getCoordinates(currentAnimatedRadius, skill.level, i, skills.length);
        return `${x},${y}`;
      })
      .join(' ');
  });

  const outerPolygonPoints = useTransform(animatedRadius, (currentAnimatedRadius) => {
    return skills
      .map((_, i) => {
        const { x, y } = getCoordinates(currentAnimatedRadius, 100, i, skills.length);
        return `${x},${y}`;
      })
      .join(' ');
  });

  const lineX2MotionValues = useRef(skills.map(() => useMotionValue(0)));
  const lineY2MotionValues = useRef(skills.map(() => useMotionValue(0)));

  useTransform(animatedRadius, (currentAnimatedRadius) => {
    skills.forEach((_, i) => {
      const { x, y } = getCoordinates(currentAnimatedRadius, 100, i, skills.length);
      lineX2MotionValues.current[i].set(x);
      lineY2MotionValues.current[i].set(y);
    });
  });

  return (
    <Box
      ref={containerRef}
      sx={{
        width: '100%',
        maxWidth: '100%',
        aspectRatio: '1 / 1',
        position: 'relative',
        border: '4px solid black',
        boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
        backgroundColor: '#E9E1FF',
        p: 3,
      }}
    >
      <svg
        width="100%"
        viewBox={`0 0 ${size} ${size}`}
        preserveAspectRatio="xMidYMid meet"
        style={{ display: 'block' }}
      >
        {/* Внешний полигон */}
        <motion.polygon
          points={outerPolygonPoints}
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeDasharray="5 5"
          style={{ transformOrigin: `${center}px ${center}px` }}
        />

        {/* Линии от центра */}
        {skills.map((_, i) => {
          return (
            <motion.line
              key={i}
              x1={center}
              y1={center}
              x2={lineX2MotionValues.current[i]}
              y2={lineY2MotionValues.current[i]}
              stroke="black"
              strokeWidth="1"
              strokeDasharray="2 2"
              style={{ transformOrigin: `${center}px ${center}px` }}
            />
          );
        })}

        {/* Полигон навыков */}
        <motion.polygon
          points={polygonPoints}
          fill="rgba(139, 92, 246, 0.6)"
          stroke="#8B5CF6"
          strokeWidth="3"
          style={{ transformOrigin: `${center}px ${center}px` }}
        />

        {/* Подписи */}
        {skills.map((skill, i) => {
          const angle = ((360) / skills.length) * i - 90;
          const x = center + labelRadius * Math.cos(angle * Math.PI / 180);
          const y = center + labelRadius * Math.sin(angle * Math.PI / 180);

          let textAngle = angle + 90;
          if (textAngle > 90 && textAngle < 270) {
            textAngle += 180;
          }

          return (
            <g key={i}>
              <text
                x={x}
                y={y}
                fontSize={labelFontSize}
                fontWeight="bold"
                fill="black"
                textAnchor="middle"
                dominantBaseline="middle"
                style={{
                  pointerEvents: 'none',
                  userSelect: 'none',
                  transform: `rotate(${textAngle}deg)`,
                  transformBox: 'fill-box',
                  transformOrigin: 'center',
                }}
              >
                {skill.name}
              </text>
            </g>
          );
        })}
      </svg>
    </Box>
  );
};

export default SkillPolygon;