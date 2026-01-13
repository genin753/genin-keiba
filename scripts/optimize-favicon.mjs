import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');
const originalFavicon = path.join(publicDir, 'favicon.png');

async function optimizeFavicons() {
  console.log('ファビコンの最適化を開始...');

  // 元の画像を読み込み
  const inputBuffer = fs.readFileSync(originalFavicon);

  // favicon.png を 192x192 に最適化（Google推奨サイズ）
  await sharp(inputBuffer)
    .resize(192, 192)
    .png({ quality: 80, compressionLevel: 9 })
    .toFile(path.join(publicDir, 'favicon-optimized.png'));
  console.log('✓ favicon-optimized.png (192x192) を作成しました');

  // apple-touch-icon.png を 180x180 に最適化
  await sharp(inputBuffer)
    .resize(180, 180)
    .png({ quality: 80, compressionLevel: 9 })
    .toFile(path.join(publicDir, 'apple-touch-icon-optimized.png'));
  console.log('✓ apple-touch-icon-optimized.png (180x180) を作成しました');

  // favicon-32.png（通常のファビコン用）
  await sharp(inputBuffer)
    .resize(32, 32)
    .png({ quality: 80, compressionLevel: 9 })
    .toFile(path.join(publicDir, 'favicon-32.png'));
  console.log('✓ favicon-32.png (32x32) を作成しました');

  // favicon-16.png（小さいファビコン用）
  await sharp(inputBuffer)
    .resize(16, 16)
    .png({ quality: 80, compressionLevel: 9 })
    .toFile(path.join(publicDir, 'favicon-16.png'));
  console.log('✓ favicon-16.png (16x16) を作成しました');

  // ファイルサイズを確認
  const files = [
    'favicon-optimized.png',
    'apple-touch-icon-optimized.png',
    'favicon-32.png',
    'favicon-16.png'
  ];

  console.log('\n最適化後のファイルサイズ:');
  for (const file of files) {
    const filePath = path.join(publicDir, file);
    const stats = fs.statSync(filePath);
    console.log(`  ${file}: ${(stats.size / 1024).toFixed(2)} KB`);
  }

  console.log('\n最適化完了！');
  console.log('次のステップ: 古いファイルを新しいファイルで置き換えてください。');
}

optimizeFavicons().catch(console.error);
