'use client';

import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles'; // Импортируем useTheme

const DOT_SIZE_PX = 4;
const ACTIVE_DOT_SCALE = 4;
const PADDING_Y_PX = 32;
const SPACE_Y_PX = 12;

export const ScrollingDotIndicator: React.FC = () => {
  const [activeIndicatorTop, setActiveIndicatorTop] = useState(0);
  const indicatorTrackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const [numDots, setNumDots] = useState(0);
  const theme = useTheme(); // Используем useTheme

  useLayoutEffect(() => {
    const calculateNumDots = () => {
      if (indicatorTrackRef.current) {
        const innerHeight = indicatorTrackRef.current.offsetHeight - PADDING_Y_PX;
        const newNumDots = Math.floor(innerHeight / (DOT_SIZE_PX + SPACE_Y_PX));
        setNumDots(newNumDots);
      }
    };

    calculateNumDots();
    window.addEventListener('resize', calculateNumDots);

    return () => {
      window.removeEventListener('resize', calculateNumDots);
    };
  }, []);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (!indicatorTrackRef.current) return;

      const trackHeight = indicatorTrackRef.current.offsetHeight;
      const movableHeight = trackHeight - (DOT_SIZE_PX * ACTIVE_DOT_SCALE) - PADDING_Y_PX;
      const newTop = latest * movableHeight;

      setActiveIndicatorTop(newTop);
    });

    return () => {
      unsubscribe();
    };
  }, [scrollYProgress]);

  return (
    <Box ref={indicatorTrackRef} sx={{ position: 'relative', height: '100%', py: `${PADDING_Y_PX / 8}px` }}>
        {Array.from({ length: numDots }).map((_, index) => (
          <Box
            key={index}
            sx={{
              width: `${DOT_SIZE_PX}px`,
              height: `${DOT_SIZE_PX}px`,
              borderRadius: '50%',
              bgcolor: 'text.disabled',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              top: `${PADDING_Y_PX / 2 + index * (DOT_SIZE_PX + SPACE_Y_PX)}px`,
            }}
          />
        ))}
        <motion.div
          style={{
            position: 'absolute',
            width: `${DOT_SIZE_PX}px`,
            height: `${DOT_SIZE_PX}px`,
            borderRadius: '50%',
                        backgroundColor: theme.palette.primary.main, // Используем значение из темы
            zIndex: 100, // Добавляем zIndex
            // boxShadow: `0 0 0 2px`,
            top: activeIndicatorTop + (PADDING_Y_PX / 2),
            left: '50%',
            translateX: '-50%',
            scale: ACTIVE_DOT_SCALE,
          }}
        />
    </Box>
  );
};
