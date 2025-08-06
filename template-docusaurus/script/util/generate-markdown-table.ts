import {
  type ComponentDoc
} from 'react-docgen-typescript';

import printPropName from './print-prop-name.ts';
import printPropType from './print-prop-type.ts';
import printPropDescription from './print-prop-description.ts';

export default function generateMarkdownTable(component: ComponentDoc): string {
  const markdownPropsLines = [
    '| 属性 | 类型 | 说明 |',
    '| --- | --- | --- |'
  ];
  
  for (const [, prop] of Object.entries(component.props)) {
    markdownPropsLines.push(`| ${[
      printPropName(prop),
      printPropType(prop),
      printPropDescription(prop)
    ].join(' | ')} |`);
  }
  
  return markdownPropsLines.join('\n');
}
