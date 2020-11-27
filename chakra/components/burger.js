import React from 'react';
import { Icon } from '@chakra-ui/core';
export const Burger = ({ ...rest }) => {
  return (
    <Icon
      as="svg"
      fill={`currentColor`}
      width="20px"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      cursor="pointer"
      display={['inline-block', null, null, 'none']}
      _hover={{
        transform: `scale(1.2)`
      }}
      {...rest}
    >
      <title>Menu</title>
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </Icon>
  );
};
