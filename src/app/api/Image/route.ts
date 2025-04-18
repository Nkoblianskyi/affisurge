// app/api/image/route.ts
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

export async function GET(req: NextRequest) {
    const image = req.nextUrl.searchParams.get('image');
    if (!image) {
        return new NextResponse('No image specified', { status: 400 });
    }

    const filePath = path.join(process.cwd(), 'src/assets/new_spain/img', image);

    try {
        const fileBuffer = await fs.readFile(filePath);
        const ext = path.extname(image).toLowerCase();

        const contentType = {
            '.jpg': 'image/jpeg',
            '.jpeg': 'image/jpeg',
            '.png': 'image/png',
            '.svg': 'image/svg+xml',
            '.webp': 'image/webp',
        }[ext] || 'application/octet-stream';

        return new NextResponse(fileBuffer, {
            headers: {
                'Content-Type': contentType,
                'Cache-Control': 'public, max-age=86400',
            },
        });
    } catch {
        console.error('❌ Image not found:', image);
        return new NextResponse('Image not found', { status: 404 });
    }
}
