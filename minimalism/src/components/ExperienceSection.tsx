















import { Section } from "./Section";
import { experience } from "@/data/resume-data";
import { Typography, Link, Box } from "@mui/material";

export const ExperienceSection = ({ title, icon, items }: typeof experience) => {
  return (
    <Section title={title} icon={icon}>
      <Box sx={{  }}>
        {items.map((item, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                <Link href={item.companyUrl} target="_blank" rel="noreferrer" sx={{ color: 'text.primary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
                  {item.company}
                </Link>
                <Typography component="span" sx={{ color: 'text.secondary', ml: 1 }}>
                  {item.position}
                </Typography>
              </Typography>
            </Box>
            <Typography variant="body2" component="p" sx={{ color: 'text.primary', mt: 1 }}> {/* Изменяем variant на body2 */}
              {item.description}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
              {item.period} Новосибирск
            </Typography>
          </Box>
        ))}
      </Box>
    </Section>
  );
};















