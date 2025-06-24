'use client'

import { Stack, Typography as T } from '@mui/material'
import { styled } from '@mui/material/styles'
import getClassPrefixer from '~/app/UI/classPrefixer'
import Link from 'next/link'

const displayName = 'Footer'
const classes = getClassPrefixer(displayName)

const FooterContainer = styled('div')(({ theme }) => ({
  height: '120px',
  display: 'flex',
  width: '100vw',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.contrast.main,
  padding: '1ch',
  [`& .${classes.link}`]: {
    margin: '0.5ch',
    textDecoration: 'none',
    color: theme.palette.contrast.main,
    '&:hover': {
      textDecoration: 'underline',
    },
    '&:visited': {
      color: theme.palette.contrast.main,
    },
  },
}))

const Footer = () => {
  return (
    <FooterContainer>
      <T variant="body2">© 2025 Your Company. All rights reserved.</T>
      <Stack direction="row" spacing={2} alignItems="center">
        <Link href="/privacy-policy" className={classes.link}>
          Privacy Policy
        </Link>
        <Link href="/terms-of-service" className={classes.link}>
          Terms of Service
        </Link>
        <Link href="/contact-us" className={classes.link}>
          Contact Us
        </Link>
      </Stack>
    </FooterContainer>
  )
}

export default Footer