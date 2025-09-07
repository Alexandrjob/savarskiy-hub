import React from 'react';
import { Box, Typography } from '@mui/material';

interface LegendItemProps {
  color: string;
  borderColor: string;
  label: string;
}

const LegendItem: React.FC<LegendItemProps> = ({ color, borderColor, label }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginRight: 2, marginBottom: 0.5 }}>
    <Box sx={{ width: 16, height: 16, backgroundColor: color, border: `2px solid ${borderColor}` }} />
    <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'black' }}>{label}</Typography>
  </Box>
);

const ColorKeyLegend: React.FC = () => {
  const legendData = [
    { label: 'Базы данных', color: '#FFF5F5', borderColor: '#E53E3E' },
    { label: 'Языки', color: '#EBF8FF', borderColor: '#3182CE' },
    { label: 'Сообщения', color: '#F0FFF4', borderColor: '#38A169' },
    { label: 'DevOps', color: '#FFFBEB', borderColor: '#D69E2E' },
    { label: 'Фреймворки', color: '#FAF5FF', borderColor: '#805AD5' },
    { label: 'Другое', color: '#f0f0f0', borderColor: '#555' },
  ];

  return (
    <Box>
      {legendData.map((item) => (
        <LegendItem key={item.label} {...item} />
      ))}
    </Box>
  );
};

export default ColorKeyLegend;
