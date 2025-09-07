'use client';

import React from 'react';
import { Modal, Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import WorkIcon from '@mui/icons-material/Work';
import { motion } from 'framer-motion';

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

interface ExperienceDetailModalProps {
  open: boolean;
  onClose: () => void;
  experience: Experience | null;
}

const ExperienceDetailModal: React.FC<ExperienceDetailModalProps> = ({
  open,
  onClose,
  experience,
}) => {
  if (!experience) return null;

  const stackSection = experience.stack ? {
    title: 'Стек:',
    content: experience.stack,
  } : null;

  const sectionsToRender = stackSection ? [stackSection, ...experience.details] : experience.details;

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: "-50%",
      x: "-50%",
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: "-50%",
      x: "-50%",
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: "-50%",
      x: "-50%",
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="experience-modal-title"
      aria-describedby="experience-modal-description"
    >
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '50%',
          padding: 40,
          border: '4px solid black',
          boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: '#FDF6E3',
        }}
      >
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'black',
            fontSize: '2rem',
            border: '2px solid black',
            backgroundColor: 'white',
            boxShadow: '2px 2px 0px 0px rgba(0,0,0,1)',
            borderRadius: 0,
            width: '48px',
            height: '48px',
            '&:hover': {
              backgroundColor: '#FFD7BE',
              boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
            },
          }}
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
        <Typography id="experience-modal-title" variant="h4" component="h2" sx={{ fontSize: '36px', fontWeight: 'bold', marginBottom: 1.5, borderBottom: '4px solid black', textTransform: 'uppercase' }}>
          {experience.company}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginBottom: 1.5 }}>
          <Typography id="experience-modal-position" variant="h6" sx={{ fontSize: '24px', color: 'black', textTransform: 'uppercase' }}>
            {experience.position}
          </Typography>
          <WorkIcon sx={{ fontSize: '24px', color: 'black' }} />
        </Box>
        <Typography id="experience-modal-dates" variant="body2" sx={{ color: 'text.secondary', marginBottom: 2.5 }}>
          {experience.dates}
        </Typography>
        <Box sx={{ mt: 2 }}>
          {sectionsToRender.map((section, sectionIndex) => (
            <React.Fragment key={sectionIndex}>
              {section.title && (
                <Typography variant="h6" sx={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: 'black',
                  marginTop: sectionIndex === 0 ? 0 : 3,
                  marginBottom: 1.5,
                  borderBottom: '2px dashed #333',
                  paddingBottom: '8px',
                  textTransform: 'uppercase',
                }}>
                  {section.title}
                </Typography>
              )}
              {section.title === 'Стек:' ? (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, marginBottom: 3 }}>
                  {section.content.map((item, i) => (
                    <Box key={i} sx={{
                      display: 'inline-block',
                      padding: '4px 8px',
                      fontWeight: 'bold',
                      backgroundColor: '#FF9933',
                      color: 'black',
                      transform: 'skewX(-5deg)',
                      boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
                      marginRight: '10px',
                      border: '2px solid black',
                    }}>
                      {item}
                    </Box>
                  ))}
                </Box>
              ) : (
                section.content.map((line, lineIndex) => (
                  <Typography key={lineIndex} variant="body1" sx={{ marginBottom: 1.5, color: 'black', lineHeight: 1.8 }}>
                    {line}
                  </Typography>
                ))
              )}
            </React.Fragment>
          ))}
        </Box>
      </motion.div>
    </Modal>
  );
};

export default ExperienceDetailModal;