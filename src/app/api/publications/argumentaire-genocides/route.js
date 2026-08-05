import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  const fileName = 'Argumentaire des génocides commis en RDC.pdf';
  const downloadName = 'argumentaire-genocides-rdc.pdf';
  const filePath = path.join(process.cwd(), 'public', fileName);

  const fileBuffer = await fs.readFile(filePath);

  return new Response(fileBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `inline; filename="${downloadName}"`,
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
