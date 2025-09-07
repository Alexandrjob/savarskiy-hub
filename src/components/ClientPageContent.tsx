'use client';

import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import ProfileHeader from './ProfileHeader';
import ExperienceSection from './ExperienceSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import Footer from './Footer';

const ClientPageContent: React.FC = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 4, lg: 8 } }}>
      <Grid container spacing={4} direction={{ xs: 'column', md: 'row' }} sx={{ marginBottom: 4 }}>
        <Grid item xs={12} md={8} sx={{ height: '100%' }}>
          <Typography variant="h1" sx={{ fontSize: '40px', fontWeight: '800', textAlign: 'left', marginBottom: 2 }}>Go & C# Developer</Typography>
          <ProfileHeader />
        </Grid>
        <Grid item xs={12} md={4} sx={{ height: '100%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginBottom: 2 }}>
            <Typography variant="h4" sx={{ fontSize: '40px', fontWeight: '800', textAlign: 'left' }}>Опыт работы</Typography>
          </Box>
          <ExperienceSection />
        </Grid>
      </Grid>

      <Grid container spacing={2} direction={{ xs: 'column', md: 'row' }} sx={{ marginBottom: 4 }}>
        <Grid item xs={12} md={2} sx={{ height: '100%' }}>
          <Typography variant="h4" sx={{ fontSize: '40px', fontWeight: '800', textAlign: 'left', marginBottom: 2 }}>Навыки</Typography>
          <SkillsSection />
        </Grid>
        <Grid item xs={12} md={9.6} sx={{ height: '100%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginBottom: 2 }}>
            <Typography variant="h4" sx={{ fontSize: '40px', fontWeight: '800', textAlign: 'left' }}>
              Проекты
            </Typography>
          </Box>
          <ProjectsSection />
        </Grid>
      </Grid>


      <Footer />
    </Box>
  );
};

export default ClientPageContent;