import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  const fileName = 'Rapport_FONAREV_2024-2025_corrige_2_compressed.pdf';
  const filePath = path.join(process.cwd(), 'public', fileName);

  const fileBuffer = await fs.readFile(filePath);

  return new Response(fileBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `inline; filename="${fileName}"`,
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
