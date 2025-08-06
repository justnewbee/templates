import {
  type PropItem,
  withCustomConfig
} from 'react-docgen-typescript';

import generateMarkdownTable from './generate-markdown-table.ts';

const parser = withCustomConfig('./tsconfig.json', {
  propFilter: (prop: PropItem) => prop.parent ? !prop.parent.fileName.includes('node_modules') : true
});

export default function parseAndGenerateMarkdownTable(filePath: string): string {
  const component = parser.parse(filePath)[0];
  
  if (!component) {
    throw new Error(`No component found at ${filePath}`);
  }
  
  return generateMarkdownTable(component);
}
