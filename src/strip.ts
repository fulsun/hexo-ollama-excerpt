import { convert } from 'html-to-text';

export default function strip(content: string, ignoreEl: string[]) {
  let selectors = [];
  for (const el of ignoreEl) {
    selectors.push({
      selector: el,
      format: 'skip'
    });
  }

  return convert(content, {
    wordwrap: false,
    selectors
  });
}
