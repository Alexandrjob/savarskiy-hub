import { Providers } from './providers';
import '@fontsource/ibm-plex-sans/700.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/800.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}