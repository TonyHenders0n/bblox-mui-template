import { ReactElement } from "react";
import { Settings, SettingsConfiguration, SettingsOptionValue } from "src/_migrate/types/settings";
 
import { colorSchemeOptions, navColorOptions } from './settings-drawer.mocks';
// import { Layout, NavColor, Settings } from "src/types/settings";





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
export const settingsConfiguration: SettingsConfiguration<any>[] =  [];

settingsConfiguration.push({optionValuesList: colorSchemeOptions, type: "colorPreset", value: "blue"});
settingsConfiguration.push({optionValuesList: navColorOptions, type: "navColor", value: "blend-in"});