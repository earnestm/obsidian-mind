import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Real or AI? The Literary Challenge',
  description: 'Can you tell authentic literature from AI-generated text?',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
