import type { FC } from "react";
import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import Menu01Icon from "@untitled-ui/icons-react/build/esm/Menu01";
import React from "react";
import type { Theme } from "@mui/material";
// import {
//   Box,
//   Button,
//   Chip,
//   Container,
//   IconButton,
//   Stack,
//   SvgIcon,
//   useMediaQuery,
// } from "@mui/material";

// import { alpha, useTheme } from "@mui/material/styles";
// import { TopNavItem } from "./top-nav-item";
 

// /****************************/
// // Migrate
// /****************************/
 
// import {  bxHook } from "binaryblox-client-core"; 
// import { TopNavProps } from "..";


// const TOP_NAV_HEIGHT: number = 64;

//  const LandingPageTopNav: FC<TopNavProps> = (props) => {
//   const {
//     logo,
//     indexRoute,
//     onMobileNavOpen,
//     title,
//     titleSuffixHighlight,
//     appVersion,
//     sections,
//     routerLink,
//     usePathname,
//     children
//   } = props;

//   const defaultSections = sections ? sections : [];
//   const theme = useTheme();
//   const pathname = usePathname;
//   const mdUp = useMediaQuery(theme.breakpoints.up("md"));
//   const [elevate, setElevate] = useState<boolean>(false);
//   const offset = 64;
//   const delay = 100;

//   const handleWindowScroll = useCallback((): void => {
//     if (window.scrollY > offset) {
//       setElevate(true);
//     } else {
//       setElevate(false);
//     }
//   }, []);

//   bxHook.useWindowScroll({
//     handler: handleWindowScroll,
//     delay,
//   });

//   return (
//     <Box
//       component="header"
//       sx={{
//         left: 0,
//         position: "fixed",
//         right: 0,
//         top: 0,
//         pt: 2,
//         zIndex: (theme) => theme.zIndex.appBar,
//       }}
//     >
//       <Container
//         maxWidth="lg"
//         sx={{
//           backdropFilter: "blur(6px)",
//           backgroundColor: "transparent",
//           borderRadius: 2.5,
//           boxShadow: "none",
//           transition: (theme) =>
//             theme.transitions.create("box-shadow, background-color", {
//               easing: theme.transitions.easing.easeInOut,
//               duration: 200,
//             }),
//           ...(elevate && {
//             backgroundColor: (theme) =>
//               alpha(theme.palette.background.paper, 0.9),
//             boxShadow: 8,
//           }),
//         }}
//       >
//         <Stack direction="row" spacing={2} sx={{ height: TOP_NAV_HEIGHT }}>
//           <Stack
//             alignItems="center"
//             direction="row"
//             spacing={1}
//             sx={{ flexGrow: 1 }}
//           >
//             <Stack
//               alignItems="center"
//               component={routerLink}
//               direction="row"
//               display="inline-flex"
//               href={indexRoute ? indexRoute : "/"}
//               spacing={1}
//               sx={{ textDecoration: "none" }}
//             >
//               <Box
//                 sx={{
//                   display: "inline-flex",
//                   height: 24,
//                   width: 24,
//                 }}
//               >
//                 {logo ? logo : null}
//               </Box>
//               {mdUp && (
//                 <Box
//                   sx={{
//                     color: "text.primary",
//                     fontFamily: "'Plus Jakarta Sans', sans-serif",
//                     fontSize: 14,
//                     fontWeight: 800,
//                     letterSpacing: "0.3px",
//                     lineHeight: 2.5,
//                     "& span": {
//                       color: "primary.main",
//                     },
//                   }}
//                 >
//                   {title} <span>{titleSuffixHighlight}</span>
//                 </Box>
//               )}
//             </Stack>
//             <Chip label={`v${appVersion}`} size="small" />
//           </Stack>
//           {mdUp && (
//             <Stack alignItems="center" direction="row" spacing={2}>
//               <Box component="nav" sx={{ height: "100%" }}>
//                 <Stack
//                   component="ul"
//                   alignItems="center"
//                   justifyContent="center"
//                   direction="row"
//                   spacing={1}
//                   sx={{
//                     height: "100%",
//                     listStyle: "none",
//                     m: 0,
//                     p: 0,
//                   }}
//                 >
//                   <>
//                     {defaultSections.map((item) => {
//                       const checkPath = !!(item.path && pathname);
//                       const partialMatch = checkPath
//                         ? pathname.includes(item.path!)
//                         : false;
//                       const exactMatch = checkPath
//                         ? pathname === item.path
//                         : false;
//                       const active = item.popover ? partialMatch : exactMatch;

//                       return (
//                         <TopNavItem
//                           active={active}
//                           external={item.external}
//                           key={item.title}
//                           path={item.path}
//                           popover={item.popover}
//                           title={item.title}
//                           routerLink={routerLink}
//                         />
//                       );
//                     })}
//                   </>
//                 </Stack>
//               </Box>
//             </Stack>
//           )}
//           <Stack
//             alignItems="center"
//             direction="row"
//             justifyContent="flex-end"
//             spacing={2}
//             sx={{ flexGrow: 1 }}
//           > 
//             {children}
//             {!mdUp && (
//               <IconButton onClick={onMobileNavOpen}>
//                 <SvgIcon fontSize="small">
//                   <Menu01Icon />
//                 </SvgIcon>
//               </IconButton>
//             )}
//           </Stack>
//         </Stack>
//       </Container>
//     </Box>
//   );
// };

// export default LandingPageTopNav;

// LandingPageTopNav.propTypes = {
//   onMobileNavOpen: PropTypes.func,
// };
