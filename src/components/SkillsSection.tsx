import React from 'react';
import SkillPolygon from './SkillPolygon';
import { Box } from '@mui/material';

const SkillsSection: React.FC = () => {
  return (
    <Box sx={{  justifyContent: 'left', display: 'flex', flexDirection: 'row', alignItems: 'left' }}>
      <SkillPolygon />
    </Box>
  );
};

export default SkillsSection;
