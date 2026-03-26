import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  const fileName = 'fevrierNLlow.pdf';
  const filePath = path.join(process.cwd(), 'public', fileName);

  const fileBuffer = await fs.readFile(filePath);

  return new Response(fileBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${fileName}"`,
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
