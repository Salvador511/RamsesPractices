'use client'
import { useState } from 'react'
import Link from 'next/link'

import classNames from 'clsx'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import Image from 'next/image'

import { IconButton, Stack, Typography as T } from '@mui/material'
import { styled } from '@mui/material/styles'
import { SIDEBAR_OPTS } from './utils'
import getClassPrefixer from '~/app/UI/classPrefixer'

const displayName = 'Nav'
const classes = getClassPrefixer(displayName)

const NavbarContainer = styled('div')(({ theme }) => ({
  [`& .${classes.navbar}`]: {
    height: '60px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1ch'
  },
  [`& .${classes.barsIcon}`]: {
    margin: '1ch',
    fontSize: '1rem',
    color: theme.palette.primary.main
  },
  [`& .${classes.menu}`]: {
    background: theme.palette.primary.main,
    width: '250px',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    position: 'fixed',
    zIndex: 2,
    top: 0,
    right: '-100%',
    transition: '850ms',
    boxShadow: '-4px -1px 11px 0px rgba(0,0,0,0.5)',
  },
  [`& .${classes.menuActive}`]: {
    right: 0,
    transition: '350ms'
  },
  [`& .${classes.menuItems}`]: {
    padding: '1rem',
    width: '100%'
  },
  [`& .${classes.navIcon}`]: {
    fontSize: '1rem',
    color: theme.palette.contrast.main
  },
  [`& .${classes.link}`]: {
    margin: '1ch',
    padding: '1ch',
    display: 'flex',
    justifyContent: 'flex-start',
    textDecoration: 'none',
    '&:hover': {
      background: theme.palette.contrast.enabled
    }
  }
}))

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const showSidebar = () => setSidebarOpen(!sidebarOpen)

  return (
    <NavbarContainer className={classes.navbar}>
      <div className={classes.navbar}>
        <Link href="/">
          <Image
            src="https://i.ebayimg.com/images/g/544AAOSwpSlgT~YX/s-l400.jpg"
            alt="logo"
            width={40}
            height={40}
          />
        </Link>
        <IconButton onClick={() => setSidebarOpen(true)}>
          <FaBars className={classes.barsIcon} />
        </IconButton>
      </div>
      <nav className={classNames({
        [classes.menu]: true,
        [classes.menuActive]: sidebarOpen
      })}>
        <div className={classes.menuItems} onClick={showSidebar}>
          <Stack direction="row" justifyContent="flex-end">
            <IconButton onClick={() => setSidebarOpen(false)}>
              <AiOutlineClose className={classes.navIcon}/>
            </IconButton>
          </Stack>
          <Stack spacing={2}>
            {SIDEBAR_OPTS.map(({ Icon, status, title, path }, index) => {
              if (status === 'available') {
                return (
                  <Link href={path} key={`${title}-${index}`} className={classes.link}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Icon className={classes.navIcon}/>
                      <T color="contrast.main">{title}</T>
                    </Stack>
                  </Link>
                )
              }
              return null
            })}
          </Stack>
        </div>
      </nav>
    </NavbarContainer>
  )
}

export default Navbar
