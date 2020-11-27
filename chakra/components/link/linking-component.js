import React from 'react';
import NextLink from 'next/link';

export const external = (href) => href.startsWith('http');
export const LinkingComponent = ({ as, href, children }) => {
  if (!as && external(href)) {
    return <>{children}</>;
  }

  return (
    <NextLink href={href} passHref as={as}>
      {children}
    </NextLink>
  );
};
