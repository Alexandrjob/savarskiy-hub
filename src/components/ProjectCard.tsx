"use client";

import React from "react";
import { Typography, Chip, Box } from "@mui/material";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  projectUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  projectUrl,
}) => {
  return (
    <Box
      component={motion.div}
      whileHover={{ y: -4, boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 2,
        border: '4px solid black',
        background: '#FFFFFF',
        boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
        minHeight: '320px',
        width: { xs: '100%', sm: 'calc(50% - 1rem)', lg: 'calc(33.333% - 1rem)' },
      }}
    >
      <Box>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            marginBottom: 1,
            color: "#0f172a",
            textDecoration: "none",
          }}
        >
          {title}
        </Typography>
        <Box sx={{ marginBottom: 1 }}>
          <Box
            component="a"
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "inline-block",
              textDecoration: "none",
              color: "black",
              backgroundColor: "white",
              border: "2px solid black",
              boxShadow: "2px 2px 0px 0px rgba(0,0,0,1)",
              padding: "4px 8px",
              fontSize: "13px",
              fontWeight: "bold",
              transition: "all 0.2s ease-in-out",
              "&:hover": {
                boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)",
                transform: "translate(-2px, -2px)",
              },
            }}
          >
            {projectUrl.replace(/^https?:\/\//, "")}
          </Box>
        </Box>
        <Typography
          variant="body1"
          sx={{
            color: "#334155",
            marginBottom: 2,
            textDecoration: "none",
          }}
        >
          {description}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "baseline",
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        {tags.map((tag, index) => (
          <Chip
            key={index}
            label={tag}
            variant="outlined"
            sx={{
              backgroundColor: "white",
              borderColor: "black",
              color: "black",
              borderWidth: "2px",
              borderRadius: "4px",
              fontSize: "12px",
              fontWeight: "bold",
              height: "auto",
              "& .MuiChip-label": {
                padding: "2px 6px",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ProjectCard;