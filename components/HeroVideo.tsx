'use client';

export default function HeroVideo() {
  return (
    <div style={{ position: 'relative', paddingTop: '56.25%', height: '100%' }}>
      <iframe
        title="Alpheya Demo"
        src="https://www.youtube-nocookie.com/embed/oO8w6XcXJUs"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
