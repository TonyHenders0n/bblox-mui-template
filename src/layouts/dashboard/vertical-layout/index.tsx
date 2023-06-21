import { FC, ReactNode } from "react";
import PropTypes from "prop-types";
import { Box, Button, SvgIcon, Theme, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { CSSObject, styled, useTheme } from "@mui/material/styles";
import type { NavColor } from "src/types/settings";
import type { Section } from "../config";
import File04Icon from "@untitled-ui/icons-react/build/esm/File04";
import { TopNav } from "./top-nav"; 
//  import { Drawer } from "src/_migrate/components/drawers/drawer";
 import { MenuDrawer, useMobileNav  } from "bblox-react-core";
import { TenantSwitch } from "../tenant-switch";
import { Logo } from "src/components/logo";
import { paths } from "src/paths";
import { useCssVars, useMobileCssVars } from "./drawer.styles";
import DashboardTopNav from 'src/_migrate/components/nav-bar/top-nav/dashboard';

const SIDE_NAV_WIDTH: number = 280;

const VerticalLayoutRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
  [theme.breakpoints.up("lg")]: {
    paddingLeft: SIDE_NAV_WIDTH,
  },
}));

const VerticalLayoutContainer = styled("div")({
  display: "flex",
  flex: "1 1 auto",
  flexDirection: "column",
  width: "100%",
});

interface VerticalLayoutProps {
  children?: ReactNode;
  navColor?: NavColor;
  sections?: Section[];
}
 

export const cssStyles = (
  theme: Theme,
  drawerWidth: number = 280,
  mobile: boolean = false
): CSSObject =>
  mobile
    ? {
        backgroundColor: "var(--nav-bg)",
        color: "var(--nav-color)",
        width: drawerWidth,
      }
    : {
        backgroundColor: "var(--nav-bg)",
        borderRightColor: "var(--nav-border-color)",
        borderRightStyle: "solid",
        borderRightWidth: 1,
        color: "var(--nav-color)",
        width: drawerWidth,
      };

export const VerticalLayout: FC<VerticalLayoutProps> = (props) => {
  const theme = useTheme();
  const { children, sections, navColor } = props;
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"));
  const mobileNav = useMobileNav();
  const cssVars = useCssVars(navColor ? navColor : "evident");
  const cssMobileVars = useMobileCssVars(navColor ? navColor : "evident");

  const drawerWidth = 280;
  return (
    <>
      <TopNav onMobileNavOpen={mobileNav.handleOpen} />

       {/* Drawer Library component  */}
      <MenuDrawer
        indexPath={paths.index}
        sections={sections}
        drawerWidth={drawerWidth}
        drawerContent={{
          logo: <Logo />,
          headerContent: <TenantSwitch sx={{ flexGrow: 1 }} />,
          footerContent: (
            <Box sx={{ p: 3 }}>
              <Typography variant="subtitle1">Need help?</Typography>
              <Typography
                color="neutral.400"
                sx={{ mb: 2 }}
                variant="body2"
              >
                Please check our docs.
              </Typography>
              <Button
                component="a"
                fullWidth
                href={paths.docs}
                startIcon={
                  <SvgIcon>
                    <File04Icon />
                  </SvgIcon>
                }
                target="_blank"
                variant="contained"
              >
                Documentation
              </Button>
            </Box>
          ),
        }}
        drawerStyle={{
          color: navColor,
          paper: {
            cssVars: lgUp ? cssVars : cssMobileVars,
            cssStyles: lgUp
              ? cssStyles(theme, drawerWidth, true)
              : cssStyles(theme, drawerWidth),
          },
        }}
        isMobile={!lgUp}
        open={mobileNav.open}
        onClose={mobileNav.handleClose}
      />

      <VerticalLayoutRoot>
        <VerticalLayoutContainer>{children}</VerticalLayoutContainer>
      </VerticalLayoutRoot>
    </>
  );
};

VerticalLayout.propTypes = {
  children: PropTypes.node,
  navColor: PropTypes.oneOf<NavColor>(["blend-in", "discreet", "evident"]),
  sections: PropTypes.array,
}; 