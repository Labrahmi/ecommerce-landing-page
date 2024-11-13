import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CloudFlow - Modern SaaS Platform',
  description: 'Streamline your workflow with CloudFlow - The next generation cloud management platform',
  openGraph: {
    title: 'CloudFlow - Modern SaaS Platform',
    description: 'Streamline your workflow with CloudFlow - The next generation cloud management platform',
    url: 'https://cloudflow.dev',
    siteName: 'CloudFlow',
    images: [
      {
        url: 'https://cloudflow.dev/og.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CloudFlow - Modern SaaS Platform',
    description: 'Streamline your workflow with CloudFlow - The next generation cloud management platform',
    images: ['https://cloudflow.dev/og.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}