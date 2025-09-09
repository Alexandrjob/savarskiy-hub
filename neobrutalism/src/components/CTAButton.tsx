import React from 'react';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';

const StyledMotionLink = styled(motion.a)({});

interface CTAButtonProps {
  label: string;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary';
}

const CTAButton: React.FC<CTAButtonProps> = ({ label, onClick, href, variant = 'primary' }) => {
  const isPrimary = variant === 'primary';

  const styles = {
    sx: {
      padding: '12px 24px',
      fontSize: '20px',
      fontWeight: 'bold',
      color: isPrimary ? 'white' : 'black',
      border: '4px solid black',
      boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
      cursor: 'pointer',
      background: isPrimary ? 'black' : 'white',
      '&:hover': {
        backgroundColor: isPrimary ? '#333' : '#f0f0f0',
        boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)',
      },
    },
    initial: false,
    whileHover: { y: -2, boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)', backgroundColor: isPrimary ? '#333' : '#f0f0f0' },
    whileTap: { scale: 0.95 },
    transition: { type: 'spring' as const, stiffness: 300, damping: 20 },
  };

  if (href) {
    return (
      <StyledMotionLink
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...styles}
      >
        {label}
      </StyledMotionLink>
    );
  } else {
    return (
      <motion.button
        onClick={onClick}
        {...styles}
      >
        {label}
      </motion.button>
    );
  }
};

export default CTAButton;
