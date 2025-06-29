'use client'

import {
  OutlinedInput,
  InputAdornment,
  Button,
  Snackbar,
  Alert,
  Modal
} from '@mui/material'
import { styled } from '@mui/material/styles'
import getClassPrefixer from '~/app/UI/classPrefixer'
import SearchIcon from '@mui/icons-material/Search'

import Loading from '~/app/UI/Shared/Loading'
import PokemonTable from '~/app/components/PokemonTable'
import ModalAddPokemon from '~/app/components/ModalAddPokemon'
import ModalDeletePokemon from '~/app/components/ModalDeletePokemon'
import ModalEditPokemon from '~/app/components/ModalEditPokemon'

import { useState } from 'react'

import { useApiQuery } from '~/app/Lib/apiFetch'

const displayName = 'PokemonPage'
const classes = getClassPrefixer(displayName)

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '2rem 8rem',
  gap: '1rem',
  justifyContent: 'center',
  alignItems: 'center',
  '@media (max-width: 768px)': {
    padding: '1rem 2rem',
  },
  [`& .${classes.toolbar}`]: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    flexWrap: 'wrap',
    gap: '1rem'
  },
  [`& .${classes.searchGroup}`]: {
    display: 'flex',
    alignItems: 'center'
  },
  [`& .${classes.searchInput}`]: {
    minWidth: '350px',
    backgroundColor: theme.palette.background.main,
    borderRadius: '2rem',
    marginRight: '0.5rem',
    '& input::placeholder': {
      color: theme.palette.primary.main,
      opacity: 0.7
    },
    '& .MuiInputBase-input': {
      color: theme.palette.primary.main,
    }
  },
  [`& .${classes.button}`]: {
    color: theme.palette.background.main,
  },
  [`& .${classes.tableContainer}`]: {
    width: '100%',
    marginTop: '-0.5rem',
  },
}))

const HomePage = ({
  pokemon,
  selectedPokemon,
  setSelectedPokemon,
  search,
  handleSearch,
  isLoading,
  snackbarMessage,
  setSnackbarMessage,
  setOpenModalAddPokemon,
  setOpenModalEditPokemon,
  setOpenModalDeletePokemon,
  openModalAddPokemon,
  openModalEditPokemon,
  openModalDeletePokemon
}) => {
  return (
    <Container>
      <div className={classes.toolbar}>
        <div className={classes.searchGroup}>
          <OutlinedInput
            className={classes.searchInput}
            placeholder="Search by name or Pokedex Number"
            size="small"
            value={search}
            onChange={handleSearch}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon color="primary" />
              </InputAdornment>
            }
          />
          <Button
            variant='contained'
            color='primary'
            className={classes.button}
            disabled={isLoading}
            onClick={() => setOpenModalAddPokemon(true)}
          >
            Add Pokemon
          </Button>
        </div>
      </div>

      <div className={classes.tableContainer}>
        <PokemonTable
          pokemon={pokemon}
          search={search}
          setSelectedPokemon={setSelectedPokemon}
          setOpenModalEditPokemon={setOpenModalEditPokemon}
          setOpenModalDeletePokemon={setOpenModalDeletePokemon}
          selectedPokemon={selectedPokemon}
        />
      </div>
      <Snackbar
        open={Boolean(snackbarMessage)}
        autoHideDuration={5000}
        onClose={() => setSnackbarMessage(null)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          severity={snackbarMessage?.severity}
        >
          {snackbarMessage?.message}
        </Alert>
      </Snackbar>
      <Modal
        open={openModalAddPokemon}
        onClose={() => setOpenModalAddPokemon(false)}
      >
        <ModalAddPokemon
          onClose={() => setOpenModalAddPokemon(false)}
          setSnackbarMessage={setSnackbarMessage}
        />
      </Modal>
      <Modal
        open={openModalDeletePokemon}
        onClose={() => setOpenModalDeletePokemon(false)}
      >
        <ModalDeletePokemon
          selectedPokemon={selectedPokemon}
          onClose={() => setOpenModalDeletePokemon(false)}
          setSnackbarMessage={setSnackbarMessage}
        />
      </Modal>
      <Modal
        open={openModalEditPokemon}
        onClose={() => setOpenModalEditPokemon(false)}
      >
        <ModalEditPokemon
          selectedPokemon={selectedPokemon}
          onClose={() => setOpenModalEditPokemon(false)}
          setSnackbarMessage={setSnackbarMessage}
        />
      </Modal>
    </Container>
  )
}

const Wrapper = () => {
  const [search, setSearch] = useState('')
  const [openModalAddPokemon, setModalOpenAddPokemon] = useState(false)
  const [openModalEditPokemon, setModalOpenEditPokemon] = useState(false)
  const [openModalDeletePokemon, setModalOpenDeletePokemon] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState(null)
  const [selectedPokemon, setSelectedPokemon] = useState(null)

  const { data, isLoading } = useApiQuery({ path: 'pokemon' })
  const pokemon = Object.values(data ?? [])

  const handleSearch = event => setSearch(event.target.value)

  if (isLoading) return <Loading />
  return (
    <HomePage
      pokemon={pokemon}
      selectedPokemon={selectedPokemon}
      setSelectedPokemon={setSelectedPokemon}
      search={search}
      handleSearch={handleSearch}
      isLoading={isLoading}
      snackbarMessage={snackbarMessage}
      setSnackbarMessage={setSnackbarMessage}
      setOpenModalAddPokemon={setModalOpenAddPokemon}
      setOpenModalEditPokemon={setModalOpenEditPokemon}
      setOpenModalDeletePokemon={setModalOpenDeletePokemon}
      openModalAddPokemon={openModalAddPokemon}
      openModalEditPokemon={openModalEditPokemon}
      openModalDeletePokemon={openModalDeletePokemon}
    />
  )
}

export default Wrapper