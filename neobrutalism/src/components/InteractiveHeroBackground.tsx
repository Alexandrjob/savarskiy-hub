'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useMousePosition } from './MousePositionContext';
import AnimatedSkillIcon from './AnimatedSkillIcon';

const InteractiveHeroBackground: React.FC = () => {
  const { x: clientX, y: clientY } = useMousePosition();
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });

  // Update window dimensions on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const allSkillsText = [
    'Go', 'C# & .NET', 'Databases', 'Messaging', 'DevOps', 'Sys Design',
    'PostgreSQL', 'Redis', 'Kafka', 'NATS', 'Docker', 'Kubernetes',
    'Gin', '.NET Core', 'WPF', 'Microservices', 'SQL', 'Git',
    'REST API', 'gRPC', 'CI/CD', 'Unit Testing', 'Integration Testing',
    'System Design', 'Problem Solving', 'Clean Code', 'Agile', 'Scrum',
    'Swaggo', 'pgx', 'goose', 'Postman', 'MS SQL', 'Delphi', 'ASP.NET MVC', 'HTTP', 'RabbitMQ',
  ];

  const getSkillColor = (skill: string) => {
    const lowerCaseSkill = skill.toLowerCase();
    let color = '#333';

    if (['postgresql', 'redis', 'mssql', 'clickhouse', 'sql'].some(db => lowerCaseSkill.includes(db))) {
      color = '#C53030';
    } else if (['go', 'c#', 'golang'].some(lang => lowerCaseSkill.includes(lang))) {
      color = '#2B6CB0';
    } else if (['kafka', 'nats', 'rabbitmq'].some(mq => lowerCaseSkill.includes(mq))) {
      color = '#2F855A';
    } else if (['docker', 'kubernetes'].some(devops => lowerCaseSkill.includes(devops))) {
      color = '#B7791F';
    } else if (['gin', '.net', 'sarama', 'wpf', 'swaggo'].some(fw => lowerCaseSkill.includes(fw))) {
      color = '#6B46C1';
    }
    else if (['git', 'rest api', 'grpc', 'ci/cd', 'unit testing', 'integration testing', 'system design', 'problem solving', 'clean code', 'agile', 'scrum', 'postman', 'http'].some(other => lowerCaseSkill.includes(other))) {
      color = '#333';
    }
    return color;
  };

  const initialIcons = useMemo(() => {
    if (windowDimensions.width === 0 || windowDimensions.height === 0) return [];

    const icons = [];
    const numIcons = 20;

    for (let i = 0; i < numIcons; i++) {
      const randomSkill = allSkillsText[Math.floor(Math.random() * allSkillsText.length)];
      const randomColor = getSkillColor(randomSkill);
      const randomSize = Math.floor(Math.random() * 4) + 3; // 3 to 6 rem

      const initialX = Math.random() * windowDimensions.width;
      const initialY = Math.random() * windowDimensions.height;

      icons.push({
        id: i,
        text: randomSkill,
        color: randomColor,
        size: randomSize,
        initialX: initialX,
        initialY: initialY,
      });
    }
    return icons;
  }, [windowDimensions]);

  const rotateX = useTransform(useMotionValue(clientY), [0, windowDimensions.height], [-10, 10]);
  const rotateY = useTransform(useMotionValue(clientX), [0, windowDimensions.width], [-10, 10]);
  const z = useTransform(useMotionValue(clientX), [0, windowDimensions.width], [-50, 50]);

  if (windowDimensions.width === 0 || windowDimensions.height === 0) {
    return null;
  }

  return (
    <div
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: 0, perspective: '1000px' }}
    >
      {initialIcons.map((icon) => (
        <AnimatedSkillIcon
          key={icon.id}
          text={icon.text}
          color={icon.color}
          size={icon.size}
          initialX={icon.initialX}
          initialY={icon.initialY}
          windowWidth={windowDimensions.width}
          windowHeight={windowDimensions.height}
        />
      ))}
    </div>
  );
};

export default InteractiveHeroBackground;