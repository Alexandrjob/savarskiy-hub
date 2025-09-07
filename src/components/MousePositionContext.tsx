'use client';

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

const MousePositionContext = createContext({ x: 0, y: 0 });

export const useMousePosition = () => {
  return useContext(MousePositionContext);
};

interface MousePositionProviderProps {
  children: ReactNode;
}

export const MousePositionProvider: React.FC<MousePositionProviderProps> = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <MousePositionContext.Provider value={mousePosition}>
      {children}
    </MousePositionContext.Provider>
  );
};