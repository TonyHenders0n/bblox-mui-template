import React, { FC, ReactNode } from "react";
import PropTypes from "prop-types";
import Menu01Icon from "@untitled-ui/icons-react/build/esm/Menu01";
import type { Theme } from "@mui/material";
import { Box, IconButton, Stack, SvgIcon, useMediaQuery } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
// import { SearchButton } from "../../content/search-button";
// import AccountButton from "../../content/account-button";
// import { SearchButton } from '../search-button';
// import { AccountButton } from '../account-button';
// import { ContactsButton } from '../contacts-button';
// import { LanguageSwitch } from '../language-switch';
// import { NotificationsButton } from '../notifications-button';

const TOP_NAV_HEIGHT: number = 64;
const SIDE_NAV_WIDTH: number = 280;

interface TopNavProps {
  onMobileNavOpen?: () => void;
  children?: ReactNode;
}

const DashboardTopNav: FC<TopNavProps> = (props) => {
  const { children, onMobileNavOpen, ...other } = props;
  const theme = useTheme();
  const lgUp = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box
      component="header"
      sx={{
        backdropFilter: "blur(6px)",
        backgroundColor: (theme) =>
          alpha(theme.palette.background.default, 0.8),
        position: "sticky",
        left: {
          lg: `${SIDE_NAV_WIDTH}px`,
        },
        top: 0,
        width: {
          lg: `calc(100% - ${SIDE_NAV_WIDTH}px)`,
        },
        zIndex: (theme) => theme.zIndex.appBar,
      }}
      {...other}
    >
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{
          minHeight: TOP_NAV_HEIGHT,
          px: 2,
        }}
      >
        <Stack alignItems="center" direction="row" spacing={2}>
          {!lgUp && (
            <IconButton onClick={onMobileNavOpen} title="Menu">
              <SvgIcon>
                <Menu01Icon />
              </SvgIcon>
            </IconButton>
          )}
          {/* <SearchButton /> */}
        </Stack>
        <Stack alignItems="center" direction="row" spacing={2}>
          {children}
        </Stack>
      </Stack>
    </Box>
  );
};

export default DashboardTopNav;

DashboardTopNav.propTypes = {
  onMobileNavOpen: PropTypes.func,
};