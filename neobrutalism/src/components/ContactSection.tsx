import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const ContactSection: React.FC = () => {
  return (
    <Box
      sx={{
        padding: { xs: 4, md: 6 },
        backgroundColor: 'background.default',
        borderBottom: '4px solid black',
        boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
        margin: { xs: '32px 16px', md: '32px 32px', lg: '32px 64px' },
      }}
    >
      <Typography variant="h4" sx={{ fontSize: '32px', fontWeight: 'bold', textAlign: 'center', marginBottom: 6 }}>Связаться со мной</Typography>
      <Box sx={{ maxWidth: '768px', margin: 'auto', textAlign: 'center' }}>
        <Typography variant="body1" sx={{ color: 'text.primary', marginBottom: 2 }}>
          Готов к новым вызовам и интересным проектам. Если у вас есть вопросы или предложения, не стесняйтесь связаться со мной.
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <Link
            href="mailto:sshkajob@gmail.com"
            sx={{
              color: '#3B82F6',
              fontSize: '20px',
              fontWeight: 'semibold',
              textDecoration: 'none',
              '&:hover': { textDecoration: 'underline' },
              '&:active': { color: '#2563EB' },
            }}
          >
            sshkajob@gmail.com
          </Link>
          <Link
            href="https://t.me/AlexandrHi"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: '#3B82F6',
              fontSize: '20px',
              fontWeight: 'semibold',
              textDecoration: 'none',
              '&:hover': { textDecoration: 'underline' },
              '&:active': { color: '#2563EB' },
            }}
          >
            Telegram: @AlexandrHi
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactSection;
