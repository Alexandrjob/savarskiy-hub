'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { Box, Typography, Paper, Grid, IconButton, Snackbar } from '@mui/material';
import { LinkedIn, GitHub } from '@mui/icons-material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CTAButton from './CTAButton';

interface StatItemProps {
  value: string;
  label: string;
  animation?: 'counter';
}

const AnimatedCounter: React.FC<{ from: number; to: number; duration: number }> = ({ from, to, duration }) => {
  const count = useMotionValue(from);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration: duration });
      return controls.stop;
    }
  }, [from, to, duration, isInView, count]);

  const displayedValue = useTransform(count, (latest) => Math.round(latest).toString());

  return <motion.span ref={nodeRef}>{displayedValue}</motion.span>;
};

const StatItem: React.FC<StatItemProps> = ({ value, label, animation }) => {
  const displayValue = animation === 'counter' ? <AnimatedCounter from={0} to={parseInt(value.replace('+', ''))} duration={value.includes('+') ? 1.2 : 1.5} /> : value;

  return (
    <Paper
      sx={{
        padding: 1.5,
        textAlign: 'left',
        height: '100%',
        border: '2px solid black',
        boxShadow: '2px 2px 0px 0px rgba(0,0,0,1)',
        backgroundColor: '#FFD7BE',
      }}
    >
      <Typography variant="h4" sx={{ fontSize: '28px', fontWeight: 'bold', marginBottom: 0.5, color: 'text.primary' }}>{displayValue}{value.includes('+') ? '+' : ''}</Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{label}</Typography>
    </Paper>
  );
};

const ProfileHeader: React.FC = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('sshkajob@gmail.com');
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const stats = [
    { value: '1.4+', label: 'года опыта', animation: 'counter' as const },
    { value: '10+', label: 'личных проекта', animation: 'counter' as const },
    { value: '20+', label: 'технологий в стеке', animation: 'counter' as const },
  ];

  const iconButtonStyle = {
    border: '2px solid black',
    borderRadius: '0px',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: '#FFD7BE',
      boxShadow: '2px 2px 0px 0px rgba(0,0,0,1)',
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        padding: { xs: 4, md: 4 },
        backgroundColor: '#FF9933',
        border: '4px solid black',
        boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
        height: '100%',
      }}
    >
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Email скопирован в буфер обмена"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
      <Box
        sx={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'center', md: 'flex-start' },
          gap: 4,
        }}
      >
        <Grid container spacing={0} direction={{ xs: 'column', md: 'row' }}>
          <Grid item xs={12} md={4} sx={{ height: '100%' }}>
            <Box
              sx={{
                width: '100%',
                height: '100%',
                border: '4px solid black',
                boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#fff',
              }}
            >
              <img src="/photo_2025-06-12_13-56-55.jpg" alt="Фотография Александра Саварского" style={{ width: '100%', height: '450px', objectFit: 'cover' }} />
            </Box>
          </Grid>
          <Grid item xs={12} md={8} sx={{ height: 'auto' }}>
            <Box
              sx={{
                flexGrow: 1,
                textAlign: { xs: 'center', md: 'left' },
                marginLeft: { xs: 0, md: 4 },
                marginTop: { xs: 4, md: 0 },
                position: 'relative',
                minHeight: { xs: 400, md: 420 },
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between', height: '100%' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                  <Typography variant="h3" sx={{ fontSize: '40px', fontWeight: 'bold' }}>Александр Саварский</Typography>
                  <Box
                    onClick={handleCopyEmail}
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 0.5,
                      cursor: 'pointer',
                      textDecoration: 'underline',
                      textDecorationColor: 'transparent',
                      transition: 'text-decoration-color 0.3s',
                      '&:hover': {
                        textDecorationColor: 'text.primary',
                      },
                    }}
                  >
                    <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 'bold' }}>sshkajob@gmail.com</Typography>
                    <ContentCopyIcon fontSize="small" sx={{ opacity: 0.7 }}/>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <IconButton href="https://www.linkedin.com/in/alexandr-savarskiy" target="_blank" rel="noopener noreferrer" sx={iconButtonStyle}>
                    <LinkedIn sx={{ color: 'black' }} />
                  </IconButton>
                  <IconButton href="https://github.com/Alexandrjob" target="_blank" rel="noopener noreferrer" sx={iconButtonStyle}>
                    <GitHub sx={{ color: 'black' }} />
                  </IconButton>
                </Box>
              </Box>
              <Grid container spacing={1} columns={{ xs: 2, md: 4 }} sx={{ marginTop: 4 }}>
                {stats.map((stat, index) => (
                  <Grid item xs={1} md={1} key={index}>
                    <StatItem {...stat} />
                  </Grid>
                ))}
              </Grid>
              <Typography variant="body1" sx={{lineHeight: '1.20', marginTop: 4 }}>
                Имею опыт работы в команде, быстро обучаюсь и умею работать в сжатые сроки. Обладаю опытом в разработке корпоративных ERP-систем и интеграции с внешними сервисами. Увлечен решением сложных задач и постоянным обучением новым технологиям.
              </Typography>
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  gap: 2,
                  marginTop: 4,
                }}
              >
                <CTAButton label="Написать в Телеграм" href={profileData.cta.telegram} variant="primary" />
                <CTAButton label="Скачать резюме" href={profileData.cta.resumeUrl} variant="secondary" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ProfileHeader;

export default ProfileHeader;