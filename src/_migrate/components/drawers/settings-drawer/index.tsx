import type { FC } from "react";
import { useCallback } from "react";
import PropTypes from "prop-types";
import RefreshCcw01Icon from "@untitled-ui/icons-react/build/esm/RefreshCcw01";
import XIcon from "@untitled-ui/icons-react/build/esm/X";
import {
  Badge,
  badgeClasses,
  Drawer,
  IconButton,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";

import { OptionsColorPreset } from "./options-color-preset";
import { OptionsContrast } from "./options-contrast";
import { OptionsDirection } from "./options-direction";
import { OptionsLayout } from "./options-layout";
import { OptionsNavColor } from "./options-nav-color";
import { OptionsColorScheme } from "./options-color-scheme";
import { OptionsStretch } from "./options-stretch";
import { Scrollbar } from "src/components/scrollbar";
import { SettingsDrawerProps } from "./settings-drawer.types";
import {
  colorPresetOptions,
  colorSchemeOptions,
  contrastOptions,
  directionOptions,
  layoutOptions,
  navColorOptions,
  stretchOptions,
} from "./settings-drawer.mocks";
import { Settings } from "src/_migrate/types/settings";

/**
 *
 * @param props
 * @returns
 */

// Option if a generic type is used
// export function SettingsDrawer<T>(
//   props: React.PropsWithChildren<SettingsDrawerProps<T>>
// ) {

export const SettingsDrawer: FC<SettingsDrawerProps> = (props) => {
  const {
    canReset,
    onClose,
    onUpdate,
    onReset,
    open,
    values = {},
    ...other
  } = props;

  const handleFieldUpdate = useCallback(
    (field: keyof Settings, value: unknown): void => {
      onUpdate?.({
        [field]: value,
      });
    },
    [onUpdate]
  );

  return (
    <Drawer
      disableScrollLock
      anchor="right"
      onClose={onClose}
      open={open}
      ModalProps={{
        BackdropProps: {
          invisible: true,
        },
        sx: { zIndex: 1400 },
      }}
      PaperProps={{
        elevation: 24,
        sx: {
          maxWidth: "100%",
          width: 350,
        },
      }}
      {...other}
    >
      <Scrollbar
        sx={{
          height: "100%",
          "& .simplebar-content": {
            height: "100%",
          },
          "& .simplebar-scrollbar:before": {
            background: "var(--nav-scrollbar-color)",
          },
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={3}
          sx={{
            px: 3,
            pt: 2,
          }}
        >
          <Typography variant="h6">App Settings</Typography>
          <Stack
            alignItems="center"
            direction="row"
            spacing={0.5}
          >
            <Badge
              anchorOrigin={{
                horizontal: "right",
                vertical: "top",
              }}
              color="error"
              sx={{
                [`& .${badgeClasses.badge}`]: {
                  top: 6,
                  right: 6,
                  ...(!canReset && {
                    display: "none",
                  }),
                },
              }}
              variant="dot"
            >
              <IconButton
                color="inherit"
                onClick={onReset}
              >
                <SvgIcon fontSize="small">
                  <RefreshCcw01Icon />
                </SvgIcon>
              </IconButton>
            </Badge>
            <IconButton
              color="inherit"
              onClick={onClose}
            >
              <SvgIcon>
                <XIcon />
              </SvgIcon>
            </IconButton>
          </Stack>
        </Stack>
        <Stack
          spacing={5}
          sx={{ p: 3 }}
        >
          {values.colorPreset && (
            <OptionsColorPreset
              onChange={(value) => handleFieldUpdate("colorPreset", value)}
              options={colorPresetOptions}
              value={values.colorPreset}
            />
          )}

          {values.paletteMode && (
            <OptionsColorScheme
              onChange={(value) => handleFieldUpdate("paletteMode", value)}
              options={colorSchemeOptions}
              value={values.paletteMode}
            />
          )}

          {values.navColor && (
            <OptionsNavColor
              onChange={(value) => handleFieldUpdate("navColor", value)}
              value={values.navColor}
              options={navColorOptions}
            />
          )}

          {values.layout && (
            <OptionsLayout
              onChange={(value) => handleFieldUpdate("layout", value)}
              value={values.layout}
              options={layoutOptions}
            />
          )}

          {values.stretch && (
            <OptionsStretch
              onChange={(value) => handleFieldUpdate("stretch", value)}
              value={values.stretch}
              options={stretchOptions}
            />
          )}

          {values.contrast && (
            <OptionsContrast
              onChange={(value) => handleFieldUpdate("contrast", value)}
              value={values.contrast}
              options={contrastOptions}
            />
          )}

          {values.direction && (
            <OptionsDirection
              onChange={(value) => handleFieldUpdate("direction", value)}
              value={values.direction}
              options={directionOptions}
            />
          )}
        </Stack>
      </Scrollbar>
    </Drawer>
  );
};

SettingsDrawer.propTypes = {
  canReset: PropTypes.bool,
  onClose: PropTypes.func,
  onReset: PropTypes.func,
  onUpdate: PropTypes.func,
  open: PropTypes.bool,
  // @ts-ignore
  values: PropTypes.object,
};
