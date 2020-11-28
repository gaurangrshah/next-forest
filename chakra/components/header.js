import React, { useEffect } from 'react'
import { Box, Flex, Heading } from '@chakra-ui/core'

import { Nav } from './nav'

import useColor from '../hooks/use-color'
import { useNavDispatch } from '../contexts/nav-context'

export const Header = ({
  title,
  Logo,
  pages,
  controls,
  headerShow = false,
  ...rest
}) => {
  const { color } = useColor()
  const { updatePages, updateControls } = useNavDispatch()

  useEffect(() => {
    if (!pages) return
    updatePages(pages)
  }, [])

  useEffect(() => {
    if (!controls) return
    updateControls(controls)
  }, [])

  return (
    headerShow && (
      <Box as="header" shadow="minbttm" {...rest} layerStyle="header">
        <Flex color={color('color')} layerStyle="header.body">
          {Logo ? (
            <Logo title={title} w={12} h={12} />
          ) : (
            <Heading
              as="h1"
              m={0}
              color="inherit"
              fontSize={['2xl', null, null, '3xl']}
              pl={[4, null, null, null, 0]}
              flex={0}
              minW="25%"
            >
              {title}
            </Heading>
          )}
          <Nav title={title} {...{ Logo }} />
        </Flex>
      </Box>
    )
  )
}
