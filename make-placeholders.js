// Генерирует цветные PNG-заглушки вместо картинок (без внешних зависимостей)
const z = require('zlib'), fs = require('fs');
function crc(b) { let c, t = []; for (let n = 0; n < 256; n++) { c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } let r = ~0; for (const x of b) r = t[(r ^ x) & 255] ^ (r >>> 8); return (~r) >>> 0; }
function ch(t, d) { const l = Buffer.alloc(4); l.writeUInt32BE(d.length); const td = Buffer.concat([Buffer.from(t), d]); const c = Buffer.alloc(4); c.writeUInt32BE(crc(td)); return Buffer.concat([l, td, c]); }
function png(w, h, bg, fg) {
  const raw = Buffer.alloc((w * 3 + 1) * h);
  for (let y = 0; y < h; y++) {
    raw[y * (w * 3 + 1)] = 0;
    for (let x = 0; x < w; x++) {
      const o = y * (w * 3 + 1) + 1 + x * 3;
      const c = (x < 6 || y < 6 || x > w - 7 || y > h - 7 || ((x + y) % 48) < 4) ? fg : bg;
      raw[o] = c[0]; raw[o + 1] = c[1]; raw[o + 2] = c[2];
    }
  }
  const ih = Buffer.alloc(13); ih.writeUInt32BE(w, 0); ih.writeUInt32BE(h, 4); ih[8] = 8; ih[9] = 2;
  return Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), ch('IHDR', ih), ch('IDAT', z.deflateSync(raw)), ch('IEND', Buffer.alloc(0))]);
}
fs.mkdirSync('public/placeholders', { recursive: true });
fs.mkdirSync('public/brand', { recursive: true });
for (const f of ['sound-r', 'velcro-farm', 'math-5', 'pecs-basic', 'product-1024'])
  fs.writeFileSync('public/placeholders/' + f + '.jpg', png(800, 800, [235, 240, 233], [158, 177, 150]));
fs.writeFileSync('public/brand/fox-mascot.png', png(600, 600, [250, 240, 225], [225, 170, 110]));
