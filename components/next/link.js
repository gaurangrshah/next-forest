import React from 'react';
import NextLink from 'next/link';
// https://nextjs.org/docs/api-reference/next/link

export const Link = ({
  href = '#',
  as = href,
  passHref = false,
  replace = false,
  scroll = true,
  shallow = false,
  children
}) => {
  return (
    <NextLink {...{ href, as, passHref,  replace, scroll, shallow }}>
      <a>{children}</a>
    </NextLink>
  );
};
