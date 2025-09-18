'use client';
import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import theme from '@/styles/theme';
import { SessionProvider } from 'next-auth/react';
import NavBar from '@/components/NavBar';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <Container maxWidth="lg" sx={{ py: 4 }}>
          {children}
        </Container>
      </ThemeProvider>
    </SessionProvider>
  );
}
