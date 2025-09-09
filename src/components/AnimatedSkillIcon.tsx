'use client';

import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useMousePosition } from './MousePositionContext';

interface AnimatedSkillIconProps {
  text: string;
  color: string;
  size: number;
  initialX: number;
  initialY: number;
  windowWidth: number;
  windowHeight: number;
}

const AnimatedSkillIcon: React.FC<AnimatedSkillIconProps> = ({
  text,
  color,
  size,
  initialX,
  initialY,
  windowWidth,
  windowHeight,
}) => {
  const { x: clientX, y: clientY } = useMousePosition();

  const x = useMotionValue(initialX);
  const y = useMotionValue(initialY);

  const springX = useSpring(x, { stiffness: 50, damping: 10 });
  const springY = useSpring(y, { stiffness: 50, damping: 10 });

  useEffect(() => {
    const centerX = windowWidth / 2;
    const centerY = windowHeight / 2;

    const parallaxFactor = 0.1; // Adjust for desired parallax effect

    const newX = initialX + (clientX - centerX) * parallaxFactor;
    const newY = initialY + (clientY - centerY) * parallaxFactor;

    // Wrap around logic
    const iconSizePx = size * 16; // Assuming 1rem = 16px
    const wrapThreshold = iconSizePx * 2;

    let finalX = newX;
    let finalY = newY;

    if (newX > windowWidth + wrapThreshold) finalX = -wrapThreshold;
    if (newX < -wrapThreshold) finalX = windowWidth + wrapThreshold;
    if (newY > windowHeight + wrapThreshold) finalY = -wrapThreshold;
    if (newY < -wrapThreshold) finalY = windowHeight + wrapThreshold;

    x.set(finalX);
    y.set(finalY);
  }, [clientX, clientY, initialX, initialY, windowWidth, windowHeight, size, x, y]);

  return (
    <motion.div
      style={{
        position: 'absolute',
        fontWeight: 'bold',
        color: color,
        fontSize: `${size}rem`,
        textShadow: '2px 2px 0px #000',
        x: springX,
        y: springY,
      }}
    >
      {text}
    </motion.div>
  );
};

export default AnimatedSkillIcon;