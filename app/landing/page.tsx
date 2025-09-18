import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import HeroVideo from '@/components/HeroVideo';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import UploadCard from '@/components/UploadCard';
import GradientTile from '@/components/GradientTile';

export default function LandingPage() {
  const tileSx = { height: { xs: 260, md: 300 }, borderRadius: 3 };

  const itemMinWidth = (minPx: number, maxPx: number) => ({
    minWidth: { xs: '100%', sm: `${minPx}px` },
    '& > *': {
      width: `clamp(${minPx}px, 50vw, ${maxPx}px)`,
      maxWidth: '100%',
      marginInline: 'auto'
    }
  });


  return (
    <Box>
      <Grid container spacing={4} sx={{ alignItems: 'stretch' }}>

        <Grid sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 4, mb: 2 }}>
          <Grid xs={12} md={6} sx={itemMinWidth(520, 680)}>
            <Card elevation={2} sx={{ ...tileSx, overflow: 'hidden' }}>
              <CardContent sx={{ p: 0, height: '100%' }}>
                <HeroVideo />
              </CardContent>
            </Card>
          </Grid>

          <Grid xs={12} md={6} sx={itemMinWidth(520, 680)}>
            <GradientTile sx={tileSx}>
              <Box
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: 1
                }}
              >
                <Typography variant="h5">Upload Portfolio</Typography>
                <Typography variant="caption">( PDF or DOCX )</Typography>

                <Box sx={{ width: '100%', maxWidth: 360, mt: 1 }}>
                  <UploadCard />
                </Box>
              </Box>
            </GradientTile>
          </Grid>
        </Grid>
        <Grid sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 4, mb: 2 }}>

          <Grid xs={12} md={6} sx={itemMinWidth(520, 680)}>
            <Card elevation={2} sx={{ ...tileSx, display: 'flex', alignItems: 'center' }}>
              <CardContent
                sx={{
                  width: '100%'
                }}
              >
                <Box sx={{ maxWidth: 520, mx: 'auto' }}>
                  <TestimonialCarousel />
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid xs={12} md={6} sx={itemMinWidth(520, 680)}>
            <GradientTile sx={tileSx}>
              <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5">Enhance with AI</Typography>
              </Box>
            </GradientTile>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
