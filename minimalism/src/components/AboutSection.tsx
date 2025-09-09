import { Section } from "./Section";
import { aboutMe } from "@/data/resume-data";
import { Typography, Box } from "@mui/material";

export const AboutSection = ({ title, description }: typeof aboutMe) => {
    return (
        <Section title={title}>
            <Box sx={{ maxWidth: '800px' }}>
                {description.map((paragraph, index) => (
                    <Typography key={index} variant="body2" component="p" sx={{ mb: 2 }}> {/* Изменяем variant на body2 */}
                        {paragraph.text}
                    </Typography>
                ))}
            </Box>
        </Section>
    );
};