'use client';

import { useRef } from 'react';
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { HeaderSection } from "@/components/HeaderSection";
import { ScrollingDotIndicator } from "@/components/ScrollingDotIndicator";
import { personalInfo, aboutMe, experience, skills, projects } from "@/data/resume-data";
import { Container, Box, Grid } from '@mui/material';

const SectionWrapper = ({ children }: { children: React.ReactNode }) => (
    <Box sx={{ pb: { xs: 4, sm: 8 }, pt: { xs: 2, sm: 4 }, '&:first-of-type': { pt: 0 }, '&:last-of-type': { pb: 0 } }}>
        {children}
    </Box>
);

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);

  return (
        <Container maxWidth="lg" sx={{ py: 16 }}> {/* Увеличиваем py с 8 до 16 */}
      <Grid container>
        <Grid item sx={{ width: '4rem' }}>
          <Box sx={{ position: 'fixed', height: 'calc(100vh - 200px)', width: '4rem', display: { xs: 'none', sm: 'block' } }}> {/* Удаляем top: 0 */}
            <ScrollingDotIndicator />
          </Box>
        </Grid>
        <Grid item xs>
          <Box sx={{ pl: '2rem' }}>
            <SectionWrapper><HeaderSection {...personalInfo} /></SectionWrapper>
            <SectionWrapper><AboutSection {...aboutMe} /></SectionWrapper>
            <SectionWrapper><ExperienceSection {...experience} /></SectionWrapper>
            <SectionWrapper><SkillsSection {...skills} /></SectionWrapper>
            <SectionWrapper><ProjectsSection {...projects} /></SectionWrapper>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}