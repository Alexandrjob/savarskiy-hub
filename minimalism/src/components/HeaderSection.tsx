import { personalInfo } from "@/data/resume-data";
import { Typography, Link, Button, Box } from "@mui/material";
import { Section } from "./Section";

export const HeaderSection = ({ name, title, email, links }: Omit<typeof personalInfo, 'dateOfBirth' | 'phone'>) => {
  return (
    <Section
      title={name}
      leftContent={
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'flex-start', sm: 'flex-end' } }}>
          <Typography variant="body1" component="p" sx={{ color: 'text.secondary', mt: 1 }}> {/* Изменяем variant на body1 */}
            {title}
          </Typography>
          <Button
            href="/resume.pdf"
            download="Alexandr_Savarskiy_Resume.pdf"
            variant="text" // Незаметнее
            size="small"   // Меньше
            color="inherit" // Серой (будет использовать цвет текста родителя)
            sx={{ mt: 2, px: 0 }}
          >
            Скачать резюме
          </Button>
        </Box>
      }
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-start' }}>
            <Link href={`mailto:${email}`} sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' }, color: 'inherit' }}> {/* Добавляем color: 'inherit' */}
              {email}
            </Link>
            {links.map((link) => (
                <Link key={link.name} href={link.url} target="_blank" rel="noreferrer" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' }, color: 'inherit' }}> {/* Добавляем color: 'inherit' */}
                    {link.name}
                </Link>
            ))}
      </Box>
    </Section>
  );
};