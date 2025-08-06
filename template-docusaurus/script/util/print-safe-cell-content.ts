export default function printSafeCellContent(content?: string): string {
  return content ? content.replaceAll('|', '\\|').replaceAll('\n', '<br />') : '';
}
