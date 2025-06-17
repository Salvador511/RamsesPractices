'use client'
import { styled } from '@mui/material/styles'
import { Typography as T } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import getClassPrefixer from '~/app/UI/classPrefixer'

const displayName = 'Home'
const classes = getClassPrefixer(displayName)
const HomeContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  padding: '8rem',
  '@media (max-width: 768px)': {
    padding: '2rem 4rem',
  },
  [`& .${classes.itemsContainer}`]: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: '1rem',
  },
  [`& .${classes.textContainer}`]: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '1rem',
    width: '50%',
    '@media (max-width: 768px)': {
      width: '100%',
    },
  },
  [`& .${classes.imageContainer}`]: {
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },
  [`& .${classes.buttonContainer}`]: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  [`& .${classes.button}`]: {
    padding: '1ch',
    background: theme.palette.primary.main,
    borderRadius: 4,
    textDecoration: 'none',
    '&:hover': {
      background: theme.palette.primary.muted,
    }
  }
}))

const Home = () => {
  return (
    <HomeContainer>
      <div className={classes.itemsContainer}>
        <div className={classes.textContainer}>
          <T variant='h3' color="primary.main">
            Welcome to our platform.
          </T>
          <T color="primary.main">
            Here you will find resources, tools, and opportunities to develop your skills and achieve your goals.
          </T>
          <div className={classes.buttonContainer}>
            <Link href="/registro" className={classes.button}>
              <T variant="h6" color="contrast.main">Sign Up</T>
            </Link>
          </div>
        </div>
        <div className={classes.imageContainer}>
          <Image
            src={'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/9/99/latest/20200307021608/Cyndaquil.png/800px-Cyndaquil.png'}
            alt="Generic image"
            height={400}
            width={550}
            layout='intrinsic'
          />
        </div>
      </div>
    </HomeContainer>
  )
}

export default Home