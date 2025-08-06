import path from 'node:path';
import process from 'node:process';

import {
  program
} from 'commander';

import readDirAndGenerateMarkdownTable from './util/read-dir-and-generate-markdown-table.ts';

interface ICommandArgs {
  dir: string;
}

/**
 * How to use:
 *
 * > ts-node-dev ./script/generate-md-api-pref.ts -d <dir>
 */
program.requiredOption('-d, --dir <dir>').parse();

const options = program.opts<ICommandArgs>();

try {
  console.info('\n'); // eslint-disable-line no-console
  console.info(readDirAndGenerateMarkdownTable(path.join(process.cwd(), '..', options.dir))); // eslint-disable-line no-console
  console.info('\n'); // eslint-disable-line no-console
} catch (err) {
  console.error(err); // eslint-disable-line no-console
}
