import colorUtil from 'color'

const states = {
  strong: 0.85,
  muted: 0.64,
  inactive: 0.5,
  disable: 0.32,
  active: 0.16,
  enabled: 0.08,
  modal: 0.25,
}

const getThemeColor = color => {
  const main = colorUtil(color)
  const variants = Object.entries(states).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [key]: main.alpha(value).toString(),
    }
  }, {})
  return {
    main: main.toString(),
    ...variants,
  }
}

const contrast = getThemeColor('#FFFFFF')
const primary = getThemeColor('#3d6065')
const text = getThemeColor('#1F1F1F')
const background = getThemeColor('#FCFCFC')
const gray = getThemeColor('#5A5A5A')
const red = getThemeColor('#FA6A63')
const darkRed = getThemeColor('#9E443F')

const colors = {
  contrast,
  primary,
  text,
  background,
  gray,
  red,
  darkRed
}

export default colors