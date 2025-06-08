'use client'
import {
  Typography as T,
  OutlinedInput,
  InputAdornment,
  Stack,
  Button
} from '@mui/material'
import { styled } from '@mui/material/styles'
import getClassPrefixer from '~/app/UI/classPrefixer'
import SearchIcon from '@mui/icons-material/Search'
import Loading from '~/app/UI/Shared/Loading'

import apiFetch from '~/app/Libs/apiFetch'

import { useEffect, useState, useMemo } from 'react'

const displayName = 'Home'
const classes = getClassPrefixer(displayName)
const HomeContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
  width: '100vw',
  [`& .${classes.itemsContainer}`]: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '1rem',
    padding: '2rem',
  },
  [`& .${classes.searchingContainer}`]: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  [`& .${classes.searchInput}`]: {
    width: '100%',
    maxWidth: '500px',
  },
  [`& .${classes.searchIcon}`]: {
    color: theme.palette.text.primary,
  },
  [`& .${classes.grid}`]: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    gridTemplateColumns: 'repeat(5, 1fr)',
    border: `solid 3px ${theme.palette.gray.main}`,
    borderRadius: '1rem',
    gap: '1rem',
    width: '90vw',
    maxHeight: '70vh',
    overflowY: 'auto',
    padding: '1rem',
  },
  [`& .${classes.elementGrid}`]: {
    color: theme.palette.gray.primary,
    padding: '2rem 1rem',
  },
}))

const Home = ({
  search,
  onSearchChange,
  isLoading,
  pkmnsBasicData
}) => {
  return (
    <HomeContainer>
      <div className={classes.itemsContainer}>
        <T variant='h3'>PokeSearch</T>
        <T variant='body'>
          {isLoading
            ? 'Conectando con el Profesor Oak... Espera mientras carga la Pokédex'
            : 'Ingresa el nombre del Pokémon que quieras buscar'}
        </T>
        { !isLoading ? (
          <Stack direction="column" spacing={2} className={classes.searchingContainer}>
            <OutlinedInput
              className={classes.searchInput}
              placeholder="Busca por nombre de Pokémon"
              size="small"
              value={search}
              onChange={onSearchChange}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
            />
            <div className={classes.grid}>
              {pkmnsBasicData.map((pokemon, index) => {
                return (
                  <Button key={index} variant='contained' className={classes.elementGrid}>
                    {pokemon.name.toUpperCase()}
                  </Button>
                )
              })}
            </div>
          </Stack>
        ) : (
          <Loading />
        )}
      </div>
    </HomeContainer>
  )
}


const Wrapper = () => {
  const [searchValue, setSearchValue] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [pkmnsBasicData, setPkmnsBasicData] = useState([])

  const handleSearchValueChange = event => setSearchValue(event.target.value)
  const filteredPokemon = useMemo(() => {
    if (!searchValue.trim()) return pkmnsBasicData
    return pkmnsBasicData.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
    )
  }, [pkmnsBasicData, searchValue])

  useEffect(() => {
    const fetchPokemonData = async () => {
      setIsLoading(true)
      const response = await apiFetch({
        url: 'https://pokeapi.co/api/v2/pokemon?limit=1302'
      })
      setPkmnsBasicData(response.results || [])
      setIsLoading(false)
    }
    fetchPokemonData()
  }, [])

  return (
    <Home
      search={searchValue}
      onSearchChange={handleSearchValueChange}
      isLoading={isLoading}
      pkmnsBasicData={filteredPokemon}
    />
  )
}

export default Wrapper