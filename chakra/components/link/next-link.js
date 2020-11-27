import * as React from 'react';
import { useRouter } from 'next/router';
import { Link as ChakraLink, Button, IconButton } from '@chakra-ui/core';

import { LinkingComponent, external } from './linking-component';

const useIsActive = (href) => {
  const router = useRouter();
  return router && router.pathname === href;
};

export const Link = (props) => {
  const { link, nextAs, children, replace, scroll, shallow, ...rest } = props;
  const href = `${link?.prefix}${link?.path === 'home' ? null : link.path}`;
  const isActive = useIsActive(href);
  console.log(link);
  return (
    <LinkingComponent
      passHref={!nextAs && isExternal(link?.prefix)}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      href={href}
      as={nextAs}
    >
      <ChakraLink
        {...rest}
        isExternal={!nextAs && external(link?.prefix)}
        aria-current={isActive ? 'page' : undefined}
      >
        {link?.label}
      </ChakraLink>
    </LinkingComponent>
  );
};

export const LinkButton = (props) => {
  const { nextAs, href, children, ...rest } = props;
  const isActive = useIsActive(href);

  return (
    <LinkingComponent href={href} as={nextAs} {...rest}>
      <Button as="a" {...props} aria-current={isActive ? 'page' : undefined}>
        {children}
      </Button>
    </LinkingComponent>
  );
};

export const LinkIconButton = (props) => {
  const { nextAs, href, children, ...rest } = props;
  const isActive = useIsActive(href);

  return (
    <LinkingComponent href={href} as={nextAs} {...rest}>
      <IconButton as="a" {...rest} aria-current={isActive ? 'page' : undefined}>
        {children}
      </IconButton>
    </LinkingComponent>
  );
};
