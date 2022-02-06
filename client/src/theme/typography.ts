
type FontObject = {
  'font-size': string,
  'font-weight': number,
  'spacing': number,
}

type FontStyles = {
  [nameProperty: string] : FontObject;
}

const fontStyles: FontStyles = {
  stockholm: {'font-size': '10px', 'font-weight': 700, 'spacing': 32}
}

export const typograph = {
  getFontStyle: (fontStyle: keyof typeof fontStyles) => {
    const fontObject = Object.entries(fontStyles[fontStyle]);
    return fontObject.reduce((prev, [key, value]) => `${prev}${key}: ${value}; `, '')
  }
}