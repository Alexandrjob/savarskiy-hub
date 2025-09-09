import type { Metadata } from "next";
import { Lora, Source_Sans_3 } from "next/font/google";
import { ThemeProvider } from '@/context/ThemeContext';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

const lora = Lora({ 
  subsets: ["latin"], 
  variable: '--font-lora'
});
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: '--font-source-sans'
});

export const metadata: Metadata = {
  title: "Портфолио | Александр Саварский",
  description: "Портфолио бэкенд-разработчика Александра Саварского",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <CssBaseline />
          {children}
          <div style={{ position: 'fixed', top: '1rem', right: '1rem', zIndex: 50 }}>
              <ThemeSwitcher />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
