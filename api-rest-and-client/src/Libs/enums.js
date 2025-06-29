/**
 * Provides translations and adapters for Prisma enumerations,
 * converting them into options usable in the user interface.
 */

import { 
  Gender, 
  EducationLevel, 
  EducationYear,
  Category 
} from '@prisma/client'

/**
 * Translations for enumeration keys.
 */
const translations = {
  MALE: 'Masculino',
  FEMALE: 'Femenino',
  OTHER: 'Otro',
  ELEMENTARY_SCHOOL: 'Primaria',
  MIDDLE_SCHOOL: 'Secundaria',
  HIGH_SCHOOL: 'Preparatoria',
  OMI: 'OMI',
  OMIPS: 'OMIPS',
  FIRST_YEAR: '1er Año',
  SECOND_YEAR: '2do Año',
  THIRD_YEAR: '3er Año',
  FOURTH_YEAR: '4to Año',
  FIFTH_YEAR: '5to Año',
  SIXTH_YEAR: '6to Año',
}

/**
 * Converts an enumeration into an array of options with text and value.
 * @param {Object} enums - Enumeration to convert, where the keys are the enumeration values.
 * @returns {Array<{text: string, value: string}>} Array of objects with `text` (translation) and `value` (original key).
 * @example
 * // Example usage:
 * // Input: { MALE: 'MALE', FEMALE: 'FEMALE' }
 * // Output: [{ text: 'Masculino', value: 'MALE' }, { text: 'Femenino', value: 'FEMALE' }]
 */
const enumAdapter = enums => (
  Object.keys(enums).map(key => ({
    label: translations[key] ?? '',
    value: key
  }))
)

export const GenderOptions = enumAdapter(Gender)
export const EducationLevelOptions = enumAdapter(EducationLevel)
export const EducationYearOptions = enumAdapter(EducationYear)
export const CategoryOptions = enumAdapter(Category)