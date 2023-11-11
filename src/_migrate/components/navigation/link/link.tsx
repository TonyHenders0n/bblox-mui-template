import React from "react";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import { forwardRef } from "react";
import { LinkProps, Link as MuiLink } from "@mui/material";

/* eslint-disable react/display-name, @typescript-eslint/no-explicit-any */
export const LinkBehaviour = forwardRef<
  any,
  Omit<RouterLinkProps, "to"> & { href: RouterLinkProps["to"] }
>((props, ref) => {
  const { href, ...other } = props;
  return (
    <RouterLink
      ref={ref}
      to={href}
      {...other}
    />
  );
});

// export const LinkBehavior = forwardRef<
// HTMLAnchorElement, 
//   Omit<Omit<RouterLinkProps, "to">, "href"> & { href: string }

// >((props, ref) => {
//   const { href, ...other } = props;
//   return (
//     <RouterLink
//       ref={ref}
//       to={href}
//       {...other}
//     />
//   );
// });

export const Link = forwardRef<any, LinkProps>((props, ref) => {
  return (
    <MuiLink
      component={LinkBehaviour}
      ref={ref}
      {...props}
      
    />
  );
});
