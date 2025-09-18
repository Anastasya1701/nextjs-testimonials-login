import { NextRequest } from 'next/server';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const fd = await req.formData();
    const file = fd.get('file');
    if (!file || !(file instanceof File)) {
      return Response.json({ error: 'No file provided' }, { status: 400 });
    }
    const allowed = [
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    if (!allowed.includes(file.type)) {
      return Response.json({ error: 'Only PDF or DOCX allowed' }, { status: 400 });
    }
    // Demo: read bytes (store to tmp to simulate processing)
    const buf = Buffer.from(await file.arrayBuffer());
    const filename = `${Date.now()}-${file.name}`;
    // In Vercel FS is ephemeral but fine for demo
    await import('node:fs/promises').then(fs => fs.writeFile(`/tmp/${filename}`, buf));

    return Response.json({ ok: true, filename, size: buf.length, message: 'File received successfully' });
  } catch (e: any) {
    return Response.json({ error: e.message || 'Upload failed' }, { status: 500 });
  }
}