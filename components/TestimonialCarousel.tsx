'use client';
import * as React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const testimonials = [
  {
    name: 'Julie Ruberta',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
           Sed commodo eget velit non luctus. Duis at enim eu elit facilisis fermentum.`,
    img: '/testimonials/1.jpg'
  },
  {
    name: 'Andrea',
    text: `Helped me understand the dynamics of the stock market. 
           It gave me confidence to try my first investments.`,
    img: '/testimonials/2.jpg'
  },
  {
    name: 'James',
    text: `I really liked how simple and easy to use it is. 
           The clean UI made me feel comfortable from day one.`,
    img: '/testimonials/3.jpg'
  }
];

export default function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const interval = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    if (!emblaApi) return;
    const advance = () => emblaApi.scrollNext();
    interval.current = setInterval(advance, 5000);

    const node = emblaApi.rootNode();
    const pause = () => interval.current && clearInterval(interval.current);
    const resume = () => (interval.current = setInterval(advance, 5000));

    node.addEventListener('mouseenter', pause);
    node.addEventListener('mouseleave', resume);
    node.addEventListener('focusin', pause);
    node.addEventListener('focusout', resume);

    return () => {
      pause();
      node.removeEventListener('mouseenter', pause);
      node.removeEventListener('mouseleave', resume);
      node.removeEventListener('focusin', pause);
      node.removeEventListener('focusout', resume);
    };
  }, [emblaApi]);

  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <Box>
      <div ref={emblaRef} aria-roledescription="carousel" aria-label="Testimonials" style={{ overflow: 'hidden' }}>
        <div style={{ display: 'flex' }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{ flex: '0 0 100%', padding: '0 8px' }}>
              <Box
                sx={{
                  textAlign: 'center',
                  maxWidth: 600,
                  mx: 'auto',
                  wordBreak: 'break-word',
                  whiteSpace: 'normal'
                }}
              >
                <Avatar src={t.img} alt={t.name} sx={{ width: 64, height: 64, mb: 2, mx: 'auto' }} />
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  {t.name}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ lineHeight: 1.6, textAlign: 'justify' }}
                >
                  {t.text}
                </Typography>
              </Box>
            </div>

          ))}
        </div>
      </div>

      {/* стрелки */}
      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: 2 }}>
        <IconButton
          onClick={scrollPrev}
          aria-label="Previous"
          sx={{
            border: '1px solid',
            borderColor: 'grey.400',
            bgcolor: 'transparent'
          }}
        >
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>
        <IconButton
          onClick={scrollNext}
          aria-label="Next"
          sx={{
            bgcolor: 'grey.900',
            color: 'white',
            '&:hover': { bgcolor: 'grey.800' }
          }}
        >
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
}
