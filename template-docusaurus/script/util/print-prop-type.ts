import {
  type PropItem
} from 'react-docgen-typescript';

import codify from './codify.ts';
import printSafeCellContent from './print-safe-cell-content.ts';

export default function printPropType(prop: PropItem): string {
  return codify(printSafeCellContent(prop.type.name.replaceAll('ReactElement<any, string | JSXElementConstructor<any>>', 'ReactElement')));
}
