'use client';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function NavBar() {
  const { data: session } = useSession();
  return (
    <AppBar position="sticky" color="transparent" elevation={0} sx={{ backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
      <Toolbar sx={{ maxWidth: 1200, mx: 'auto', width: '100%' }}>
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign:'center', fontSize:'x-large' }}>Alpheya</Typography>
        <Button component={Link} href="/" sx={{ mr: 1 }}>Home</Button>
        {session ? (
          <>
            <Button component={Link} href="/dashboard" sx={{ mr: 1 }}>Dashboard</Button>
            <Button onClick={() => signOut({ callbackUrl: '/' })} variant="outlined">Sign out</Button>
          </>
        ) : (
          <Button onClick={() => signIn()} variant="contained">Sign in</Button>
        )}
      </Toolbar>
    </AppBar>
  );
}