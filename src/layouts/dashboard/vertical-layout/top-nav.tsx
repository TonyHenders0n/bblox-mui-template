import type { FC } from "react";
import PropTypes from "prop-types";
import Menu01Icon from "@untitled-ui/icons-react/build/esm/Menu01";
import type { Theme } from "@mui/material";
import { Box, IconButton, Stack, SvgIcon, useMediaQuery } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { AccountButton } from "../../../layouts-new/dashboard/account-button";
import { ContactsButton } from "../contacts-button";
import { LanguageSwitch } from "../language-switch";
import { NotificationsButton } from "../notifications-button";
import { SearchButton } from "src/_migrate/_migrate_complete/search-button";
import { width } from "@mui/system";
import { useMockedUser } from "src/hooks/use-mocked-user";
import { TenantSwitch } from '../tenant-switch';
import { Logo } from 'src/components/logo';

const DEF_TOP_NAV_HEIGHT: number = 64;
const DEF_SIDE_NAV_WIDTH: number = 280;

interface TopNavProps {
  onMobileNavOpen?: () => void;
  height?: number;
  offset?: number;
  offsetType?: "zero" | "side-nav";
}

export const TopNav: FC<TopNavProps> = (props) => {
  const {
    onMobileNavOpen,
    height = DEF_TOP_NAV_HEIGHT,
    offset = DEF_SIDE_NAV_WIDTH,
    offsetType = "side-nav",
    ...other
  } = props;
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"));

  const navOffset = offsetType === "zero" ? 0 : offset;
  const user = useMockedUser();
  return (
    <Box
      component="header"
      sx={{
        backdropFilter: "blur(6px)",
        backgroundColor: (theme) =>
          alpha(theme.palette.background.default, 0.8),
        position: "sticky",
        left: {
          lg: `${navOffset}px`,
        },
        top: 0,
        width: {
          lg: `calc(100% - ${navOffset}px)`,
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
          minHeight: height,
          px: 2,
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          spacing={2}
        >
          {!lgUp && (
            <IconButton onClick={onMobileNavOpen}>
              <SvgIcon>
                <Menu01Icon />
              </SvgIcon>
            </IconButton>
          )}
           <TenantSwitch />
          {/* <SearchButton /> */}
          {/* <Box
            component={RouterLink}
            href={paths.index}
            sx={{
              borderColor: "var(--nav-logo-border)",
              borderRadius: 1,
              borderStyle: "solid",
              borderWidth: 1,
              display: "inline-flex",
              height: 40,
              p: "4px",
              width: 40,
            }}
          >
            <Logo />
          </Box> */}
          {/* <TenantSwitch /> */}
        </Stack>
        <Stack
          alignItems="center"
          direction="row"
          spacing={2}
        >
          {/* <LanguageSwitch />
          <NotificationsButton />
          <ContactsButton /> */}
          <AccountButton
            avatar={{ width: 40, height: 40, borderWidth: 2, borderOffset: 6 }}
            user={{ name: user.name }}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

TopNav.propTypes = {
  onMobileNavOpen: PropTypes.func,
};
