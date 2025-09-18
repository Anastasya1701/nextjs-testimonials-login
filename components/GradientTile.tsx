'use client';
import Card from '@mui/material/Card';
import { SxProps } from '@mui/material/styles';
import * as React from 'react';

export default function GradientTile({
  children,
  sx,
}: {
  children: React.ReactNode;
  sx?: SxProps;
}) {
  return (
    <Card
      elevation={2}
      sx={{
        borderRadius: 3,
        background: 'linear-gradient(135deg, #e6c3a8 0%, #b9d6df 100%)',
        // мягкая «бумажная» тень как в макете
        boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
        ...sx,
      }}
    >
      {children}
    </Card>
  );
}
