import { Direction, PaletteMode } from '@mui/material';
 
export type Layout = 'horizontal' | 'vertical';

export type NavColor = 'blend-in' | 'discreet' | 'evident';

export type Contrast = 'normal' | 'high';

export type SettingsOptionsType = 'colorPreset' | 'contrast' | 'direction' | 'layout' | 'navColor' | 'paletteMode' | 'responsiveFontSizes' | 'stretch';


// export interface SettingsOptionValue{

//     optionType: SettingsOptionsType;
//     optionValues:  SettingsOptionValue<T>[];

// }
 


/**
 * 
 */
export interface Settings  {
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
  

 