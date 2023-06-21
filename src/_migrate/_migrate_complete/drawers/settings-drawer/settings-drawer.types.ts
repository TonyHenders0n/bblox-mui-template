import { ReactElement } from "react";
import { Settings, SettingValuesOverride, SettingsOptionValue } from 'bblox-react-core';
 
import { colorSchemeOptions, navColorOptions } from '../../../../mocks/settings-drawer.mocks';
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
  valuesOverride?: SettingValuesOverride[];
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
