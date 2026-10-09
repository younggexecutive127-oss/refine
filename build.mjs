import { cp, mkdir, readdir, rm } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const output = path.join(root, 'dist');
const publishableExtensions = new Set(['.html', '.css', '.js', '.png', '.ico']);

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const entry of await readdir(root, { withFileTypes: true })) {
  const source = path.join(root, entry.name);
  if (entry.isDirectory() && entry.name === 'assets') {
    await cp(source, path.join(output, 'assets'), { recursive: true });
  } else if (entry.isFile() && publishableExtensions.has(path.extname(entry.name).toLowerCase())) {
    await cp(source, path.join(output, entry.name));
  }
}

console.log('Built static Refined Detailing site into dist/.');
