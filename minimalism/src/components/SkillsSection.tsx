import { Section } from "./Section";
import { skills } from "@/data/resume-data";
import { Typography, Box } from "@mui/material";

export const SkillsSection = ({ title, icon, categories }: typeof skills) => {
  return (
    <Section title={title} icon={icon}>
      <Box sx={{ maxWidth: '800px' }}>
        {categories.map((category, index) => (
          <Box key={index} sx={{ mb: 2 }}> {/* Уменьшаем mb с 4 до 2 */}
            <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', color: 'text.secondary', mb: 1 }}>
              {category.name}
            </Typography>
            <Typography variant="body2" component="p" sx={{ color: 'text.primary' }}> {/* Изменяем variant на body2 */}
              {category.items.join(", ")}
            </Typography>
          </Box>
        ))}
      </Box>
    </Section>
  );
};