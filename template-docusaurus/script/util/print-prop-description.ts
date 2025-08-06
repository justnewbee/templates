import {
  type PropItem
} from 'react-docgen-typescript';

import printSafeCellContent from './print-safe-cell-content.ts';

export default function printPropDescription(prop: PropItem): string {
  return printSafeCellContent(prop.description);
}
