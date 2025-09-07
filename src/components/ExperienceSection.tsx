'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Paper } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code'; // Import CodeIcon
import ExperienceDetailModal from './ExperienceDetailModal';

const MotionPaper = motion(Paper);

interface ExperienceDetailSection {
  title?: string;
  content: string[];
}

interface Experience {
  company: string;
  position: string;
  dates: string;
  shortDescription: string;
  details: ExperienceDetailSection[];
  stack?: string[];
  isKatrena?: boolean;
}

interface ExperienceItemProps {
  experience: Experience;
  onClick: () => void;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  experience,
  onClick,
}) => {
  return (
    <MotionPaper
      sx={{
        padding: 3,
        position: 'relative',
        overflow: 'hidden',
        border: '4px solid black',
        boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
        backgroundColor: 'white',
        cursor: 'pointer'
      }}
      whileHover={{ y: -4, boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={onClick}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginBottom: 0.5 }}>
        <CodeIcon sx={{ fontSize: '28px', color: 'black' }} />
        <Typography variant="h4" sx={{ fontSize: '28px', fontWeight: 'bold' }}>{experience.company}</Typography>
      </Box>
      <Typography variant="h6" sx={{ fontSize: '20px', color: 'text.secondary', marginBottom: 1 }}>{experience.position}</Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: 2 }}>{experience.dates}</Typography>
      <Typography variant="body1" sx={{ color: 'text.primary', lineHeight: '1.625' }}>{experience.shortDescription}</Typography>
    </MotionPaper>
  );
};

const ExperienceSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  const experiences: Experience[] = [
    {
      company: 'АО НПК Катрен',
      position: 'Программист-разработчик',
      dates: 'Март 2023 - Март 2024',
      shortDescription:
        'Участвовал в модернизации ERP-системы. Разрабатывал десктопные модули на C# (WPF) и занимался миграцией логики на backend (.NET Core), создавая и поддерживая микросервисы. Оптимизировал сложные запросы к MS SQL Server.',
      details: [
        {
          content: [
            'В роли программиста-разработчика участвовал в комплексной модернизации корпоративной ERP-системы, работая как над десктопным приложением, так и над серверной частью (backend).',
          ],
        },
        {
          title: 'Ключевые задачи и технологии:',
          content: [],
        },
        {
          title: 'Разработка десктопных приложений:',
          content: [
            'В первые полгода занимался созданием и поддержкой внутренних модулей системы на платформе WPF (C#). Занимался разработкой, автоматизации и оптимизации бизнес-процессов компании.',
          ],
        },
        {
          title: 'Миграция и развитие Backend:',
          content: [
            'Принимал ключевое участие в проекте по переводу основной логики ERP-системы с Delphi на современный технологический стек. Разрабатывал новые и поддерживал существующие микросервисы на ASP.NET Core (C#), обеспечивая их стабильность и масштабируемость.',
          ],
        },
        {
          title: 'Интеграция с внешними системами:',
          content: [
            'Спроектировал и реализовал АРІ-интеграцию с сервисом Apteka.ru. Для тестирования и отладки запросов активно использовал Postman.',
          ],
        },
        {
          title: 'Работа с базами данных:',
          content: [
            'Занимался оптимизацией производительности системы, переписывая сложные и медленные запросы. Работал с MS SQL Server, создавал отчеты и настраивал репликацию данных для минимизации рисков их потери.',
          ],
        },
        {
          content: [
            'На протяжении всей работы тесно взаимодействовал с бизнес-аналитиками для сбора требований и писал техническую документацию для нового функционала, что улучшало командную работу и ускоряло внедрение новых решений.',
          ],
        },
      ],
      stack: ['C#', 'ASP.NET Core', 'Postman', 'MS SQL', 'Delphi'],
      isKatrena: true,
    },
  ];

  const handleOpenModal = (exp: Experience) => {
    setSelectedExperience(exp);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedExperience(null);
  };

  return (
    <Box >
      {experiences.map((exp, index) => (
        <ExperienceItem key={index} experience={exp} onClick={() => handleOpenModal(exp)} />
      ))}
      <ExperienceDetailModal
        open={modalOpen}
        onClose={handleCloseModal}
        experience={selectedExperience}
      />
    </Box>
  );
};

export default ExperienceSection;
