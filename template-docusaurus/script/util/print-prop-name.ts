import {
  type PropItem
} from 'react-docgen-typescript';

import codify from './codify.ts';

export default function printPropName(prop: PropItem): string {
  const parts: string[] = [codify(prop.name)];
  
  if (prop.required) {
    parts.push('<TagRequired />');
  } else {
    if (prop.defaultValue && prop.defaultValue.value !== false) { // JSDoc 中添加 `@default`，默认对类型为 `boolean` 的使用 `false` 做默认值
      parts.push(`<TagDefault>${prop.defaultValue.value}</TagDefault>`);
    }
  }
  
  return parts.join(' ');
}
