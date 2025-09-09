import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        padding: { xs: 4, md: 6 },
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        borderTop: '4px solid black',
        boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
        mt: { xs: 4, md: 6 }, // Add top margin for spacing from previous section
      }}
    >
      <Typography variant="body1">&copy; {new Date().getFullYear()} Александр Саварский. Все права защищены.</Typography>
      <Typography variant="body2" sx={{ marginTop: 1 }}>
        Разработано с ❤️ и 💻
      </Typography>
    </Box>
  );
};

export default Footer;