'use client'

import {
  Button,
  IconButton,
  Typography as T,
  Divider
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { styled } from '@mui/material/styles'
import getClassPrefixer from '~/app/UI/classPrefixer'
import Loading from '~/app/UI/Shared/Loading'

import { useQueryClient } from '@tanstack/react-query'
import { useApiDelete } from '~/app/Lib/apiFetch'

import { useState } from 'react'

const displayName = 'DeleteProductModal'
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
    gap: '1ch',
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
    marginTop: '1.5rem',
    gap: '1rem',
  },
  [`& .${classes.btn}`]: {
    color: theme.palette.background.main,
  },
}))

const ModalDeletePokemon = ({ onClose, handleDelete, selectedPokemon }) => {
  return (
    <Container>
      <div className={classes.modalContainer}>
        <div className={classes.header}>
          <T color="primary" variant="h5">
            Delete Pokémon
          </T>
          <IconButton onClick={onClose}>
            <CloseIcon color="primary" />
          </IconButton>
        </div>
        <Divider sx={{ mb: 3 }} />
        <T color='primary' variant='h6' textAlign='center'>
          Confirm Pokémon Deletion
        </T>
        <T color='primary' variant='body1' textAlign='center'>
          Are you sure you want to delete <strong>{selectedPokemon?.name || 'this Pokémon'}</strong> from your Pokédex?
        </T>
        <T color='darkRed' variant='body2' textAlign='center'>
          This action will permanently remove the Pokémon and all its associated data. This cannot be undone.
        </T>
        <div className={classes.buttonContainer}>
          <Button
            onClick={onClose}
            color='primary'
            variant='outlined'
            className={classes.cancelBtn}
          >
            Cancel
          </Button>
          <Button
            onClick={handleDelete}
            color='darkRed'
            variant='contained'
            className={classes.btn}
          >
            Delete Permanently
          </Button>
        </div>
      </div>
    </Container>
  )
}

const Wrapper = ({ setSnackbarMessage, onClose, selectedPokemon }) => {
  const [isLoading, setIsLoading] = useState(false)
  const queryClient = useQueryClient()
  const deletePokemon = useApiDelete({ path: `pokemon/${selectedPokemon?.id}` })

  const handleDelete = async () => {
    setIsLoading(true)
    await deletePokemon.mutate(null,{
      onSuccess: () => {
        queryClient.invalidateQueries(['pokemons'])
        setSnackbarMessage({
          message: 'Pokemon deleted successfully',
          severity: 'success'
        })
        setIsLoading(false)
        onClose()
      },
      onError: () => {
        setSnackbarMessage({
          message: 'Error deleting Pokémon',
          severity: 'error'
        })
        setIsLoading(false)
        onClose()
      }
    })
  }

  if (isLoading) return <Loading />


  return (
    <ModalDeletePokemon
      selectedPokemon={selectedPokemon}
      onClose={onClose}
      handleDelete={handleDelete}
    />
  )
}

export default Wrapper