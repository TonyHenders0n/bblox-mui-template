import { FC, ReactNode } from "react";
// import {
//   INavCommon,
//   INavTitle,
//   TopNavSectionItem,
// } from "../../../layouts/layouts.model";
import { Theme } from "@emotion/react";
import { Box, useMediaQuery } from "@mui/material";
import DashboardTopNav from "./dashboard";
import React from "react";
// import LandingPageTopNav from "./landing-page";

// export enum TopNavType {
//   DASHBOARD = "DASHBOARD",
//   LANDING_PAGE = "LANDING_PAGE",
// }

// /**
//  *
//  */
// export interface TopNavProps extends INavTitle, INavCommon {
//   children?: ReactNode;
//   onMobileNavOpen?: () => void;
//   appVersion?: string;
//   sections?: TopNavSectionItem[] | undefined;
//   type?: TopNavType;
// }

// /**
//  * 
//  * @param props 
//  * @returns 
//  */
// const TopNav: FC<TopNavProps> = (props) => {
//   const { type, ...other } = props;
//   return (
//     <> 
//     {/* {type === TopNavType.DASHBOARD && <DashboardTopNav {...props} />}
//     {type === TopNavType.LANDING_PAGE && <LandingPageTopNav {...props} />}  */}
//     </> 
//   );
// };

// export default TopNav;
