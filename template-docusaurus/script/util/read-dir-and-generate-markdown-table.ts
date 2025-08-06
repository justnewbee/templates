import path from 'node:path';
import {
  existsSync
} from 'node:fs';

import parseAndGenerateMarkdownTable from './parse-and-generate-markdown-table.ts';

export default function readDirAndGenerateMarkdownTable(dir: string): string {
  const entryFilePathTs = path.join(dir, 'index.ts');
  const entryFilePathTsx = path.join(dir, 'index.tsx');
  
  if (existsSync(entryFilePathTs)) {
    return parseAndGenerateMarkdownTable(entryFilePathTs);
  }
  
  if (existsSync(entryFilePathTsx)) {
    return parseAndGenerateMarkdownTable(entryFilePathTsx);
  }
  
  throw new Error(`File ${entryFilePathTsx}? not found.`);
}
