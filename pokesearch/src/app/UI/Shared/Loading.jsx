'use client'
import { CircularProgress } from '@mui/material'
import { styled } from '@mui/material/styles'

const Overlay = styled('div')({
  padding: '1rem',
})

const Loading = ({ size = 60 }) => {
  return (
    <Overlay>
      <CircularProgress size={size} />
    </Overlay>
  )
}

export default Loading
