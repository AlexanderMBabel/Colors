import chroma from 'chroma-js';

/** choose the font color based on the background color */
export function fontColorHelper(color) {
  let lumi = chroma(color).luminance();
  return lumi >= 0.1 ? '#333333' : 'white';
}
