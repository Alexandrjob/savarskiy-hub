import React from 'react';
import ProjectCard from './ProjectCard';
import { Box } from '@mui/material';
import { projects } from '../data/projects';

const ProjectsSection: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, width: '100%' }}>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </Box>
  );
};

export default ProjectsSection;