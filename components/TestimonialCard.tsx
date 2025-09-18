'use client';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function TestimonialCard() {
  return (
    <Box
      sx={{
        maxWidth: 520,
        mx: 'auto',
        textAlign: 'center',
      }}
    >
      <Box display="flex" justifyContent="center" mb={1.5}>
        <Avatar
          src="/testimonials/1.jpg"
          alt="Julie Ruberta"
          sx={{ width: 56, height: 56 }}
        />
      </Box>
      <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
        Julie Ruberta
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ px: { xs: 1, md: 4 }, mb: 2 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo eget velit non luctus. Duis at enim eu elit facilisis fermentum.
      </Typography>
      <Box display="flex" justifyContent="center" gap={1}>
        <IconButton size="small" aria-label="previous">
          <ArrowBackIosNewIcon fontSize="inherit" />
        </IconButton>
        <IconButton size="small" aria-label="next">
          <ArrowForwardIosIcon fontSize="inherit" />
        </IconButton>
      </Box>
    </Box>
  );
}
