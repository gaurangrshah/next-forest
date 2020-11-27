import React from 'react'
import { Box, useDisclosure } from '@chakra-ui/core'
import { DrawerMenu } from './drawer-menu'

import { Link } from '../../components/next/link' // ⚠️
import { useNavState } from '../contexts/nav-context'

const NavLink = ({ href = '#', title = '', idx = 0, children }) => {
  return (
    <Link {...{ href }} className="nav-link" children={children || title} />
  )
}

const PAGES = ['home', 'about', 'offers', 'contact']

export const Nav = ({ title, Logo }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { nav } = useNavState()
  const { pages, controls } = nav

  const links = pages?.length ? pages : PAGES

  return (
    <>
      <Box as="nav" layerStyle={'header.desktop'}>
        {links?.map((page, i) => {
          return (
            <NavLink
              key={i}
              idx={i}
              href={page.toLowerCase() === 'home' ? '/' : `/${page}`}
              title={page}
            />
          )
        })}
        {controls?.length &&
          controls.map((Component, i) => <Component key={i} />)}
      </Box>
      <DrawerMenu
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        title={title}
        {...{ Logo }}
      >
        <Box as="nav" layerStyle="header.mobile">
          {links?.map((page, i) => {
            return (
              <NavLink
                key={i}
                idx={i}
                to={page.toLowerCase() === 'home' ? '/' : `/${page}`}
                title={page}
              />
            )
          })}
        </Box>
      </DrawerMenu>
    </>
  )
}
