import React from 'react';
import ProjectCard from './ProjectCard';
import { Box } from '@mui/material';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'Good API',
      description: 'RESTful API на Go для управления товарами с CRUD-операциями, кешированием на Redis и асинхронной обработкой событий через NATS с логированием в ClickHouse.',
      tags: ['Go', 'Gin', 'PostgreSQL', 'Redis', 'NATS', 'ClickHouse', 'Docker'],
      projectUrl: 'https://github.com/Alexandrjob/good_api_test',
    },
    {
      title: 'Bank API',
      description: 'Практический опыт в разработке систем на Go (Gin), работа с PostgreSQL и автоматизация документации с использованием Swaggo. Контейнеризация через Docker.',
      tags: ['Go', 'Gin', 'Swaggo', 'Docker', 'PostgreSQL', 'pgx', 'goose'],
      projectUrl: 'https://github.com/Alexandrjob/bank_api_go',
    },
    {
      title: 'Kafka service',
      description: 'Отказоустойчивое приложение на Go для асинхронной обработки сообщений через Apache Kafka, обеспечивающее стабильную работу при высоких нагрузках.',
      tags: ['Go', 'Kafka', 'Sarama', 'Docker'],
      projectUrl: 'https://github.com/Alexandrjob/kafka_go',
    },
  ];

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, width: '100%' }}>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </Box>
  );
};

export default ProjectsSection;