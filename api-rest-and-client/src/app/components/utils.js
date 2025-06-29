import * as Yup from 'yup'

export const getPokemonValidationSchema = () => Yup.object({
  pokedexNumber: Yup.number()
    .typeError('Must be a number')
    .required('Pokedex number is required')
    .integer('Must be an integer')
    .min(1, 'Must be greater than 0'),
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
  type: Yup.string()
    .required('Type is required'),
  height: Yup.number()
    .typeError('Must be a number')
    .required('Height is required')
    .positive('Must be a positive number'),
  weight: Yup.number()
    .typeError('Must be a number')
    .required('Weight is required')
    .positive('Must be a positive number')
})

export const getPokemonInitialValues = pokemon => ({
  pokedexNumber: pokemon?.pokedexNumber || '',
  name: pokemon?.name || '',
  type: pokemon?.type || '',
  height: pokemon?.height || '',
  weight: pokemon?.weight || ''
})