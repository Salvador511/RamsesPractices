'use client'
import { FaRegIdBadge } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'

export const SIDEBAR_OPTS = [
  {
    title: 'Register',
    path: '/',
    Icon: props => <FaRegIdBadge {...props} />,
    status: 'available'
  },
  {
    title: 'Login',
    path: '/',
    Icon: props => <BsFillPersonLinesFill {...props} />,
    status: 'available'
  },
]
