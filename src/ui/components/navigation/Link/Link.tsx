import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { Link as MuiLink, LinkProps as MuiLinkProps, ButtonProps } from '@mui/material';
import Router from 'next/router';
import { PropsWithChildren } from 'react';

interface LinkProps {
    href: string;
    mui?: MuiLinkProps | ButtonProps;
    Component?: React.ElementType;
    next?: NextLinkProps;
}

const Link: React.FC<PropsWithChildren<LinkProps>> = ({
    children,
    href,
    next,
    mui,
    Component = MuiLink,
    ...props

}) => {
    const IsNextEnv = Boolean(Router.router);

    return IsNextEnv ? (

        <NextLink href={href} passHref {...next}>
            <Component {...mui} {...props}>{children}</Component>
        </NextLink>


    ) : (
        <Component href={href} {...mui} {...props}>{children}</Component>
    );
};

export default Link;