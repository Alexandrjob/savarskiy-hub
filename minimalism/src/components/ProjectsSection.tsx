import { Section } from "./Section";
import { projects } from "@/data/resume-data";
import { Typography, Link, Box, Chip } from "@mui/material";

export const ProjectsSection = ({ title, icon, items }: typeof projects) => {
  return (
    <Section title={title} icon={icon}>
      <Box >
        {items.map((item, index) => (
          <Box key={index} sx={{ mb: 2 }}> {/* Уменьшаем mb с 4 до 2 */}
            <Link href={item.repoUrl || '#'} target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none' }}>
              <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', color: 'text.primary', '&:hover': { color: 'primary.main' } }}>
                {item.name}
              </Typography>
              <Typography variant="body2" component="p" sx={{ color: 'text.primary', mt: 1 }}> {/* Изменяем variant на body2 */}
                {item.description}
              </Typography>
            </Link>
            {item.stack && (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', mt: 1.5 }}>
                {item.stack.map(tech => (
                  <Chip key={tech} label={tech} variant="text" sx={{ backgroundColor: 'transparent' }} />
                ))}
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Section>
  );
};