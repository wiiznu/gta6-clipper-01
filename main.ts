import { copyFile, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';

async function exportVideoRecord(): Promise<void> {
  const sourceRoot = process.env.MAKEFUN_BOT_DIR ?? '/bot';
  const destinationRoot = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  const source = resolve(sourceRoot, 'VIDEO.json');
  const destination = resolve(destinationRoot, 'VIDEO.json');

  await mkdir(destinationRoot, { recursive: true });
  await copyFile(source, destination);
}

exportVideoRecord().catch((failure: unknown) => {
  if (failure instanceof Error && 'code' in failure && failure.code === 'ENOENT'
      && 'syscall' in failure && failure.syscall === 'copyfile') {
    console.error('VIDEO.json is missing. Publish the video first, then save its real YouTube URL in VIDEO.json.');
    process.exitCode = 1;
    return;
  }
  const detail = failure instanceof Error ? failure.message : String(failure);
  console.error(`Cannot export VIDEO.json: ${detail}`);
  process.exitCode = 1;
});
