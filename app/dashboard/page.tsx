import { redirect } from 'next/navigation';
import Grid from '@mui/material/Grid2';
import UploadCard from '@/components/UploadCard';

import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/auth/sign-in');

  return (
    <Grid container spacing={2}>
      <Grid xs={12}><UploadCard /></Grid>
    </Grid>
  );
}
