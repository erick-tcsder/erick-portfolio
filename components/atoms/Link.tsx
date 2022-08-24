import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import React from 'react';

export interface LinkProps extends NextLinkProps {
  className?: string;
  target?: React.HTMLAttributeAnchorTarget;
  children?: React.ReactNode
}

export const Link: React.FC<LinkProps> = (props) => {
  return (
    <NextLink {...props} passHref>
      <a
        href={props.href.toString()}
        className={props.className ?? ''}
        target={props.target}
      >
        {props.children}
      </a>
    </NextLink>
  );
};

export default Link;
