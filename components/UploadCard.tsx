'use client';
import { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';

export default function UploadCard() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const openPicker = () => inputRef.current?.click();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] ?? null;
    setResult(null);
    setError(null);

    if (
      f &&
      ![
        'application/pdf',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      ].includes(f.type)
    ) {
      setError('Only PDF or DOCX files are allowed.');
      return;
    }
    setFile(f);
  };

  const onUpload = async () => {
    if (!file) return;
    setLoading(true);
    setError(null);

    try {
      const fd = new FormData();
      fd.append('file', file);

      const res = await fetch('/api/upload', { method: 'POST', body: fd });
      const json = await res.json();

      if (!res.ok) throw new Error(json.error || 'Upload failed');

      setResult(json.message || `Uploaded ${json.filename}`);
      if (inputRef.current) inputRef.current.value = '';
      setFile(null);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      onClick={openPicker}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: 1.5,
        cursor: 'pointer',
        userSelect: 'none',
      }}
      role="group"
      aria-label="Upload portfolio tile"
    >
      <Box
        sx={{
          width: 88,
          height: 88,
          borderRadius: '50%',
          border: '2px solid',
          borderColor: 'text.primary',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <CloudUploadOutlinedIcon sx={{ fontSize: 36 }} />
      </Box>

      <input
        ref={inputRef}
        type="file"
        accept=".pdf,.docx"
        onChange={handleChange}
        aria-label="Upload file"
        style={{ display: 'none' }}
      />

      <Box
        onClick={(e) => e.stopPropagation()}
        sx={{ mt: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}
      >
        {/* Показываем имя выбранного файла коротко */}
        {file && (
          <Typography variant="caption" color="text.secondary" noWrap sx={{ maxWidth: 240 }}>
            {file.name}
          </Typography>
        )}

        <Button
          size="small"
          variant="contained"
          onClick={onUpload}
          disabled={!file || loading}
        >
          Upload
        </Button>

        {loading && <LinearProgress sx={{ mt: 0.5, width: 200 }} />}

        {result && (
          <Typography sx={{ mt: 0.5 }} color="success.main" variant="caption">
            {result}
          </Typography>
        )}
        {error && (
          <Typography sx={{ mt: 0.5 }} color="error.main" variant="caption" noWrap>
            {error}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
