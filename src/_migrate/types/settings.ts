import { Direction, PaletteMode } from "@mui/material";
import { ReactElement } from "react";

export type Layout = "horizontal" | "vertical";

export type NavColor = "blend-in" | "discreet" | "evident";

export type Contrast = "normal" | "high";

export type SettingsOptionsType =
  | "colorPreset"
  | "contrast"
  | "direction"
  | "layout"
  | "navColor"
  | "paletteMode"
  | "responsiveFontSizes"
  | "stretch";

/**
 *
 */
export interface SettingsOptionValue<T> {
  label: string;
  value: T;
  icon?: ReactElement;
  color?: string;
}

export interface SettingsConfiguration<T> {
  type: SettingsOptionsType;
  value: T;
  optionValuesList: SettingsOptionValue<T>[];
}

/**
 *
 */
export interface Settings {
  settingsConfiguration?: SettingsConfiguration<any>[];
  colorPreset?: any;
  contrast?: Contrast;
  direction?: Direction;
  layout?: Layout;
  navColor?: NavColor;
  paletteMode?: PaletteMode;
  responsiveFontSizes?: boolean;
  stretch?: boolean;
}

// Only use if generic type is needed
//   export interface Settings<TColorPreset> {
//     colorPreset?: TColorPreset;
//     contrast?: Contrast;
//     direction?: Direction;
//     layout?: Layout;
//     navColor?: NavColor;
//     paletteMode?: PaletteMode;
//     responsiveFontSizes?: boolean;
//     stretch?: boolean;
//   }
