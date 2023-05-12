import { PaletteMode } from "@mui/material";
import { ReactElement } from "react";
import { Direction } from "react-beautiful-dnd";
import { Layout, NavColor, Settings } from 'src/_migrate/types/settings';
import { ColorPreset, Contrast } from "src/theme";
// import { Layout, NavColor, Settings } from "src/types/settings";



export interface SettingsOptionValue<T> {
    label: string;
    value: T;
    icon?: ReactElement;
    color?: string;
  }

export interface ColorPresetOption extends SettingsOptionValue<ColorPreset> {
 
  color: string;
}

export interface ColorSchemeOption {
  label: string;
  value: PaletteMode;
  icon: ReactElement;
}

export interface ContrastOption {
  label: string;
  value: Contrast;
}

export interface DirectionOption {
  label: string;
  value: Direction;
  icon: ReactElement;
}
export interface LayoutOption {
  label: string;
  value: Layout;
  icon: ReactElement;
}

export interface NavColorOption {
  label: string;
  value: NavColor;
}

export interface StretchOption {
  label: string;
  value: boolean;
  icon: ReactElement;
}

/**
 *
 */
export interface OptionsComponent<T> {
  onChange?: (value: T) => void;
  value?: T;
  options?: SettingsOptionValue<T>[];
}

/**
 *
 */
export interface SettingsDrawerProps {
  canReset?: boolean;
  onClose?: () => void;
  onReset?: () => void;
  onUpdate?: (settings: Settings) => void;
  open?: boolean;
  values?: Settings;
}


/**
 * Only use if generic type is needed
 */
// export interface SettingsDrawerProps<TColorPreset> {
//     canReset?: boolean;
//     onClose?: () => void;
//     onReset?: () => void;
//     onUpdate?: (settings: Settings<TColorPreset>) => void;
//     open?: boolean;
//     values?: Settings<TColorPreset>;
//   }