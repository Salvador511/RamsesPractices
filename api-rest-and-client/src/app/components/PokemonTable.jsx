import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Typography as T,
  TablePagination,
  TableContainer,
  IconButton,
  Menu,
  MenuItem,
  Dialog,
  DialogContent,
  TableSortLabel,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import getClassPrefixer from '~/app/UI/classPrefixer'
import Image from 'next/image'
import { useState, useMemo, useCallback } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import CloseIcon from '@mui/icons-material/Close'

const displayName = 'PokemonTable'
const classes = getClassPrefixer(displayName)

const Container = styled(TableContainer)(({ theme }) => ({
  [`& .${classes.TableContainer}`]: {
    width: '100%',
    border: `solid 3px ${theme.palette.primary.main}`,
    borderRadius: '1rem',
  },
  [`& .${classes.descriptionText}`]: {
    maxWidth: '200px',
    textAlign: 'center',
    margin: '0 auto',
  },
  [`& .${classes.buttonContainer}`]: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    marginTop: '1rem',
    color: theme.palette.background.main,
  },
  [`& .${classes.imageContainer}`]: {
    cursor: 'pointer',
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  [`& .${classes.dialogImage}`]: {
    width: '100%',
    height: 'auto',
    maxHeight: '80vh',
    objectFit: 'contain',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  [`& .${classes.closeButton}`]: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    zIndex: 1,
    background: theme.palette.background.main,
    '&:hover': {
      background: theme.palette.background.main,
    },
  },
  [`& .${classes.dialogContent}`]: {
    position: 'relative',
    padding: 0,
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  [`& .${classes.imageWrapper}`]: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
  },
  [`& .${classes.productImage}`]: {
    borderRadius: '4px',
  },
  [`& .${classes.sortLabel}`]: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  },
}))

const InventoryTable = ({
  pokemon = [],
  search = '',
  setSelectedPokemon,
  setOpenModalEditPokemon,
  setOpenModalDeletePokemon
}) => {
  const [menuAnchorEl, setAnchorEl] = useState(null)
  const [imageDialog, setImageDialog] = useState({
    open: false,
    src: '',
    alt: ''
  })

  const [order, setOrder] = useState('asc')
  const [orderBy, setOrderBy] = useState('pokedexNumber')
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const handleMenuOpen = (event, row) => {
    setAnchorEl(event.currentTarget)
    setSelectedPokemon(row)
  }

  const handleMenuClose = () => setAnchorEl(null)

  const handleImageClick = (pokedexNumber, alt) => {
    setImageDialog({
      open: true,
      src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokedexNumber ?? '1'}.png`,
      alt: alt || ''
    })
  }

  const handleCloseDialog = () => {
    setImageDialog({
      ...imageDialog,
      open: false
    })
  }

  const handleRequestSort = property => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
    setPage(0)
  }

  const compareValues = useCallback((a, b, orderBy) => {
    // Numeric fields
    if (['pokedexNumber', 'height', 'weight'].includes(orderBy)) {
      const aValue = Number(a[orderBy])
      const bValue = Number(b[orderBy])
      if (isNaN(aValue)) return 1
      if (isNaN(bValue)) return -1
      return (aValue - bValue) * (order === 'asc' ? 1 : -1)
    }
    // String fields
    if (['name', 'type'].includes(orderBy)) {
      if (!a[orderBy]) return 1
      if (!b[orderBy]) return -1
      return ('' + a[orderBy]).localeCompare(b[orderBy], undefined, {
        numeric: true,
        sensitivity: 'base'
      }) * (order === 'asc' ? 1 : -1)
    }
    return 0
  }, [order])

  const filteredData = useMemo(() => {
    return pokemon?.filter(item => {
      const searchLower = search?.toLowerCase() || ''
      return (
        item?.name?.toLowerCase().includes(searchLower)
        ||item?.pokedexNumber?.toString().includes(searchLower)
      )
    }) || []
  }, [pokemon, search])



  const sortedData = useMemo(() => {
    return [...filteredData].sort((a, b) => compareValues(a, b, orderBy))
  }, [filteredData, compareValues, orderBy])

  const paginatedRows = sortedData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  )

  const handleChangePage = (_, newPage) => setPage(newPage)

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const SortableColumnHeader = ({ id, label }) => (
    <TableCell align="center">
      <TableSortLabel
        active={orderBy === id}
        direction={orderBy === id ? order : 'asc'}
        onClick={() => handleRequestSort(id)}
        className={classes.sortLabel}
      >
        <T color="primary.main" fontWeight="bold">{label}</T>
      </TableSortLabel>
    </TableCell>
  )

  return (
    <Container>
      <TableContainer className={classes.TableContainer} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <SortableColumnHeader id="pokedexNumber" label="Pokedex Number" />
              <SortableColumnHeader id="name" label="Name" />
              <TableCell align="center"><T color="primary.main" fontWeight="bold">Image</T></TableCell>
              <SortableColumnHeader id="type" label="Type" />
              <SortableColumnHeader id="height" label="Height" />
              <SortableColumnHeader id="weight" label="Weight" />
              <TableCell align="center"><T color="primary.main" fontWeight="bold"></T></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedRows.map((row, index) => (
              <TableRow key={index}>
                <TableCell align="center">{row?.pokedexNumber}</TableCell>
                <TableCell align="center">{row?.name}</TableCell>
                <TableCell align="center">
                  <div
                    className={classes.imageContainer}
                    onClick={() => handleImageClick(row?.pokedexNumber, row?.name)}
                  >
                    <Image
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${row?.pokedexNumber}.png`}
                      alt={row?.name || ''}
                      width={70}
                      height={70}
                      className={classes.productImage}
                    />
                  </div>
                </TableCell>
                <TableCell align="center">{row?.type}</TableCell>
                <TableCell align="center">{row?.height}</TableCell>
                <TableCell align="center">{row?.weight}</TableCell>
                <TableCell align="center">
                  <IconButton onClick={event => handleMenuOpen(event, row)}>
                    <MoreVertIcon color="primary" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={sortedData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Pokemon per page"
        />
        <Menu
          anchorEl={menuAnchorEl}
          open={Boolean(menuAnchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => {
            setOpenModalEditPokemon(true)
            handleMenuClose()
          }}>
            Edit
          </MenuItem>
          <MenuItem onClick={() => {
            setOpenModalDeletePokemon(true)
            handleMenuClose()
          }}>
            Delete
          </MenuItem>
        </Menu>
      </TableContainer>
      <Dialog
        open={imageDialog.open}
        onClose={handleCloseDialog}
      >
        <DialogContent className={classes.dialogContent}>
          <IconButton
            className={classes.closeButton}
            onClick={handleCloseDialog}
            size="large"
          >
            <CloseIcon />
          </IconButton>
          <div className={classes.imageWrapper}>
            <Image
              src={imageDialog.src}
              alt={imageDialog.alt}
              width={500}
              height={500}
              className={classes.dialogImage}
            />
          </div>
        </DialogContent>
      </Dialog>
    </Container>
  )
}

export default InventoryTable