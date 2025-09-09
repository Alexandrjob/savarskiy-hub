import { AnimatedBlock } from "./AnimatedBlock";
import { Box, Typography } from "@mui/material";

interface SectionProps {
  title: React.ReactNode;
  children: React.ReactNode;
  leftContent?: React.ReactNode;
}

export const Section = ({ title, children, leftContent }: SectionProps) => {
  return (
    <AnimatedBlock>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 2, sm: 8 } }}>
                <Box sx={{ width: { xs: '100%', sm: '25%' }, flexShrink: 0 }}>
          <Typography
            variant="h6"
            component="h2"
            align="right"
            sx={{
              fontWeight: 'bold',
              textAlign: { xs: 'left', sm: 'right' }, // Перемещаем адаптивное выравнивание сюда
              // whiteSpace: 'nowrap',
              // overflow: 'hidden',
              // textOverflow: 'ellipsis'
            }}
          >
            {title}
          </Typography>
          {leftContent}
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          {children}
        </Box>
      </Box>
    </AnimatedBlock>
  );
};