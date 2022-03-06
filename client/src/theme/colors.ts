
type Colors = {
    [key: string]: string
  } 

const colors : Colors = {
  light: '#ffffff'
}


export const getColor = (colorName: keyof typeof colors, alphaValue?: number) => {
  return `${alphaValue ? alphaValue.toString(16) : ''}${colorName};`
}