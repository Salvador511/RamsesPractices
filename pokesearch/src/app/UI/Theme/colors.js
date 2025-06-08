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

const contrast = getThemeColor('#EF4036')  // Amarillo Pikachu para elementos de contraste
const primary = getThemeColor('#FFCC00')   // Rojo Pokeball para color principal
const text = getThemeColor('#1F1F1F')      // Negro para texto (mantiene legibilidad)
const background = getThemeColor('#F1F1F1') // Blanco Pokeball para el fondo
const gray = getThemeColor('#5A5A5A')      // Gris neutral para elementos UI
const red = getThemeColor('#FF0000')       // Rojo Pokémon clásico para alertas/énfasis
const darkRed = getThemeColor('#CC0000')   // Rojo oscuro para elementos secundarios

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