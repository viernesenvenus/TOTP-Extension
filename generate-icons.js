const fs = require('fs');
const path = require('path');

// Script para generar iconos PNG desde SVG
async function generateIcons() {
  try {
    // Intentar usar sharp si está disponible
    const sharp = require('sharp');

    const svgPath = path.join(__dirname, 'icons', 'icon.svg');
    const sizes = [16, 48, 128];

    console.log('Generando iconos PNG desde icon.svg...\n');

    for (const size of sizes) {
      const outputPath = path.join(__dirname, 'icons', `icon${size}.png`);

      await sharp(svgPath)
        .resize(size, size)
        .png()
        .toFile(outputPath);

      console.log(`✓ Generado: icon${size}.png (${size}x${size})`);
    }

    console.log('\n¡Iconos generados exitosamente!');
    console.log('Ahora puedes cargar la extensión en Chrome.');

  } catch (error) {
    if (error.code === 'MODULE_NOT_FOUND') {
      console.error('\n❌ Error: La librería "sharp" no está instalada.');
      console.error('\nPor favor, ejecuta primero:');
      console.error('  npm install sharp\n');
      console.error('Luego ejecuta de nuevo:');
      console.error('  node generate-icons.js\n');
    } else {
      console.error('❌ Error al generar iconos:', error.message);
    }
    process.exit(1);
  }
}

generateIcons();
