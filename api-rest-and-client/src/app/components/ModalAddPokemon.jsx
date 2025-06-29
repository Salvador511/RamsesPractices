'use client'
import {
  Button,
  IconButton,
  Typography as T,
  Divider,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import CloseIcon from '@mui/icons-material/Close'
import getClassPrefixer from '~/app/UI/classPrefixer'

import TextField from '~/app/UI/Shared/FormikTextField'
import { Formik, Form, Field, useFormikContext } from 'formik'

import { useApiMutation } from '~/app/Lib/apiFetch'
import { useQueryClient } from '@tanstack/react-query'
import { getPokemonInitialValues, getPokemonValidationSchema } from '~/app/components/utils'

import Loading from '~/app/UI/Shared/Loading'

import { useState } from 'react'

const displayName = 'AddProductModal'
const classes = getClassPrefixer(displayName)

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100vw',
  overflow: 'auto',
  [`& .${classes.modalContainer}`]: {
    width: '40vw',
    '@media (max-width: 768px)': {
      width: '90vw',
    },
    overflowY: 'auto',
    maxHeight: '90vh',
    border: `solid 3px ${theme.palette.primary.main}`,
    background: theme.palette.background.main,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '1rem',
    padding: '2rem',
    flexDirection: 'column',
  },

  [`& .${classes.header}`]: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem'
  },
  [`& .${classes.inputs}`]: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    width: '100%',
  },
  [`& .${classes.buttonContainer}`]: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '1.5rem'
  },
}))

const ModalAddPokemon = ({ onClose }) => {
  const { isValid, dirty } = useFormikContext()
  return (
    <Container>
      <div className={classes.modalContainer}>
        <div className={classes.header}>
          <T color="primary" variant="h5">
            New Pokemon
          </T>
          <IconButton onClick={onClose}>
            <CloseIcon color="primary" />
          </IconButton>
        </div>
        <Divider sx={{ mb: 3 }} />
        <Form>
          <div className={classes.inputs}>
            <Field
              name="pokedexNumber"
              label="Pokedex Number"
              variant="outlined"
              type="Number"
              component={TextField}
            />
            <Field
              name="name"
              label="Name"
              variant="outlined"
              type="text"
              component={TextField}
            />
            <Field
              name="type"
              label="Type"
              variant="outlined"
              type="text"
              component={TextField}
            />
            <Field
              name="height"
              label="Height"
              variant="outlined"
              type="text"
              component={TextField}
            />
            <Field
              name="weight"
              label="Weight"
              variant="outlined"
              type="text"
              component={TextField}
            />
          </div>
          <div className={classes.buttonContainer}>
            <Button
              variant="contained"
              type="submit"
              disabled={!isValid || !dirty}
            >
              Save
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  )
}

const Wrapper = ({ onClose, setSnackbarMessage }) => {
  const queryClient = useQueryClient()
  const [isLoading, setIsLoading] = useState(false)
  const createPokemon = useApiMutation({ path: 'pokemon', opts: { method: 'POST' } })
  const handleSubmit = async payload => {
    setIsLoading(true)
    await createPokemon.mutate(payload,
      {
        onSuccess: () => {
          queryClient.invalidateQueries(['pokemons'])
          setSnackbarMessage({
            message: 'Pokemon added successfully',
            severity: 'success'
          })
          setIsLoading(false)
        },
        onError: () => {
          setSnackbarMessage({
            message: 'Error adding the Pokemon',
            severity: 'error'
          })
          setIsLoading(false)
        }
      })
  }

  const validationSchema = getPokemonValidationSchema()
  const initialValues = getPokemonInitialValues()

  if (isLoading) return <Loading />

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <ModalAddPokemon
        onClose={onClose}
      />
    </Formik>
  )
}

export default Wrapper