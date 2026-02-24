import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { mkdir } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

const logoPath = join(rootDir, 'public/nuevo logo este si.png');
const outputDir = join(rootDir, 'public/favicon_io');

// Asegurar que el directorio existe
await mkdir(outputDir, { recursive: true });

// Tamaños de favicon a generar
const sizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' },
  { size: 180, name: 'apple-touch-icon.png' },
];

console.log('Generando favicons sin borde y sin fondo desde "nuevo logo este si.png"...');

try {
  // Procesar cada tamaño
  for (const { size, name } of sizes) {
    await sharp(logoPath)
      .resize(size, size, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 } // Fondo transparente
      })
      .png()
      .toFile(join(outputDir, name));
    
    console.log(`✓ Generado: ${name} (${size}x${size})`);
  }

  // Generar favicon.ico (usando PNG, los navegadores modernos lo aceptan)
  await sharp(logoPath)
    .resize(32, 32, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toFile(join(outputDir, 'favicon.ico'));

  console.log('✓ Generado: favicon.ico (PNG format)');

  console.log('\n✅ Todos los favicons han sido generados exitosamente!');
} catch (error) {
  console.error('❌ Error al generar favicons:', error);
  process.exit(1);
}

