import { useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import type { NavColor } from 'src/types/settings';
  
/**
 * 
 * @param color 
 * @returns 
 */
export const useCssVars = (color: NavColor): Record<string, string> => {
  const theme = useTheme();

  
  return useMemo(
    (): Record<string, string> => {
      switch (color) {
        case 'blend-in':
          if (theme.palette.mode === 'dark') {
            return {
              '--nav-bg': theme.palette.background.default,
              '--nav-color': theme.palette.neutral[100],
              '--nav-border-color': theme.palette.neutral[700],
              '--nav-logo-border': theme.palette.neutral[700],
              '--nav-section-title-color': theme.palette.neutral[400],
              '--nav-item-color': theme.palette.neutral[400],
              '--nav-item-hover-bg': 'rgba(255, 255, 255, 0.04)',
              '--nav-item-active-bg': 'rgba(255, 255, 255, 0.04)',
              '--nav-item-active-color': theme.palette.text.primary,
              '--nav-item-disabled-color': theme.palette.neutral[600],
              '--nav-item-icon-color': theme.palette.neutral[500],
              '--nav-item-icon-active-color': theme.palette.primary.main,
              '--nav-item-icon-disabled-color': theme.palette.neutral[700],
              '--nav-item-chevron-color': theme.palette.neutral[700],
              '--nav-scrollbar-color': theme.palette.neutral[400]
            };
          } else {
            return {
              '--nav-bg': theme.palette.background.default,
              '--nav-color': theme.palette.text.primary,
              '--nav-border-color': theme.palette.neutral[100],
              '--nav-logo-border': theme.palette.neutral[100],
              '--nav-section-title-color': theme.palette.neutral[400],
              '--nav-item-color': theme.palette.text.secondary,
              '--nav-item-hover-bg': theme.palette.action.hover,
              '--nav-item-active-bg': theme.palette.action.selected,
              '--nav-item-active-color': theme.palette.text.primary,
              '--nav-item-disabled-color': theme.palette.neutral[400],
              '--nav-item-icon-color': theme.palette.neutral[400],
              '--nav-item-icon-active-color': theme.palette.primary.main,
              '--nav-item-icon-disabled-color': theme.palette.neutral[400],
              '--nav-item-chevron-color': theme.palette.neutral[400],
              '--nav-scrollbar-color': theme.palette.neutral[900]
            };
          }

        case 'discreet':
          if (theme.palette.mode === 'dark') {
            return {
              '--nav-bg': theme.palette.neutral[900],
              '--nav-color': theme.palette.neutral[100],
              '--nav-border-color': theme.palette.neutral[700],
              '--nav-logo-border': theme.palette.neutral[700],
              '--nav-section-title-color': theme.palette.neutral[400],
              '--nav-item-color': theme.palette.neutral[400],
              '--nav-item-hover-bg': 'rgba(255, 255, 255, 0.04)',
              '--nav-item-active-bg': 'rgba(255, 255, 255, 0.04)',
              '--nav-item-active-color': theme.palette.text.primary,
              '--nav-item-disabled-color': theme.palette.neutral[600],
              '--nav-item-icon-color': theme.palette.neutral[500],
              '--nav-item-icon-active-color': theme.palette.primary.main,
              '--nav-item-icon-disabled-color': theme.palette.neutral[700],
              '--nav-item-chevron-color': theme.palette.neutral[700],
              '--nav-scrollbar-color': theme.palette.neutral[400]
            };
          } else {
            return {
              '--nav-bg': theme.palette.neutral[50],
              '--nav-color': theme.palette.text.primary,
              '--nav-border-color': theme.palette.divider,
              '--nav-logo-border': theme.palette.neutral[200],
              '--nav-section-title-color': theme.palette.neutral[500],
              '--nav-item-color': theme.palette.neutral[500],
              '--nav-item-hover-bg': theme.palette.action.hover,
              '--nav-item-active-bg': theme.palette.action.selected,
              '--nav-item-active-color': theme.palette.text.primary,
              '--nav-item-disabled-color': theme.palette.neutral[400],
              '--nav-item-icon-color': theme.palette.neutral[400],
              '--nav-item-icon-active-color': theme.palette.primary.main,
              '--nav-item-icon-disabled-color': theme.palette.neutral[400],
              '--nav-item-chevron-color': theme.palette.neutral[400],
              '--nav-scrollbar-color': theme.palette.neutral[900]
            };
          }

        case 'evident':
          if (theme.palette.mode === 'dark') {
            return {
              '--nav-bg': theme.palette.neutral[800],
              '--nav-color': theme.palette.common.white,
              '--nav-border-color': 'transparent',
              '--nav-logo-border': theme.palette.neutral[700],
              '--nav-section-title-color': theme.palette.neutral[400],
              '--nav-item-color': theme.palette.neutral[400],
              '--nav-item-hover-bg': 'rgba(255, 255, 255, 0.04)',
              '--nav-item-active-bg': 'rgba(255, 255, 255, 0.04)',
              '--nav-item-active-color': theme.palette.common.white,
              '--nav-item-disabled-color': theme.palette.neutral[500],
              '--nav-item-icon-color': theme.palette.neutral[400],
              '--nav-item-icon-active-color': theme.palette.primary.main,
              '--nav-item-icon-disabled-color': theme.palette.neutral[500],
              '--nav-item-chevron-color': theme.palette.neutral[600],
              '--nav-scrollbar-color': theme.palette.neutral[400]
            };
          } else {
            return {
              '--nav-bg': theme.palette.neutral[800],
              '--nav-color': theme.palette.common.white,
              '--nav-border-color': 'transparent',
              '--nav-logo-border': theme.palette.neutral[700],
              '--nav-section-title-color': theme.palette.neutral[400],
              '--nav-item-color': theme.palette.neutral[400],
              '--nav-item-hover-bg': 'rgba(255, 255, 255, 0.04)',
              '--nav-item-active-bg': 'rgba(255, 255, 255, 0.04)',
              '--nav-item-active-color': theme.palette.common.white,
              '--nav-item-disabled-color': theme.palette.neutral[500],
              '--nav-item-icon-color': theme.palette.neutral[400],
              '--nav-item-icon-active-color': theme.palette.primary.main,
              '--nav-item-icon-disabled-color': theme.palette.neutral[500],
              '--nav-item-chevron-color': theme.palette.neutral[600],
              '--nav-scrollbar-color': theme.palette.neutral[400]
            };
          }

        default:
          return {};
      }
    },
    [theme, color]
  );
};


export const useMobileCssVars = (color: NavColor): Record<string, string> => {
    const theme = useTheme();
  
    return useMemo(
      (): Record<string, string> => {
        switch (color) {
          // Blend-in and discreet have no difference on mobile because
          // there's a backdrop and differences are not visible
          case 'blend-in':
          case 'discreet':
            if (theme.palette.mode === 'dark') {
              return {
                '--nav-bg': theme.palette.background.default,
                '--nav-color': theme.palette.neutral[100],
                '--nav-logo-border': theme.palette.neutral[700],
                '--nav-section-title-color': theme.palette.neutral[400],
                '--nav-item-color': theme.palette.neutral[400],
                '--nav-item-hover-bg': 'rgba(255, 255, 255, 0.04)',
                '--nav-item-active-bg': 'rgba(255, 255, 255, 0.04)',
                '--nav-item-active-color': theme.palette.text.primary,
                '--nav-item-disabled-color': theme.palette.neutral[600],
                '--nav-item-icon-color': theme.palette.neutral[500],
                '--nav-item-icon-active-color': theme.palette.primary.main,
                '--nav-item-icon-disabled-color': theme.palette.neutral[700],
                '--nav-item-chevron-color': theme.palette.neutral[700],
                '--nav-scrollbar-color': theme.palette.neutral[400]
              };
            } else {
              return {
                '--nav-bg': theme.palette.background.default,
                '--nav-color': theme.palette.text.primary,
                '--nav-logo-border': theme.palette.neutral[100],
                '--nav-section-title-color': theme.palette.neutral[400],
                '--nav-item-color': theme.palette.text.secondary,
                '--nav-item-hover-bg': theme.palette.action.hover,
                '--nav-item-active-bg': theme.palette.action.selected,
                '--nav-item-active-color': theme.palette.text.primary,
                '--nav-item-disabled-color': theme.palette.neutral[400],
                '--nav-item-icon-color': theme.palette.neutral[400],
                '--nav-item-icon-active-color': theme.palette.primary.main,
                '--nav-item-icon-disabled-color': theme.palette.neutral[400],
                '--nav-item-chevron-color': theme.palette.neutral[400],
                '--nav-scrollbar-color': theme.palette.neutral[900]
              };
            }
  
          case 'evident':
            if (theme.palette.mode === 'dark') {
              return {
                '--nav-bg': theme.palette.neutral[800],
                '--nav-color': theme.palette.common.white,
                '--nav-logo-border': theme.palette.neutral[700],
                '--nav-section-title-color': theme.palette.neutral[400],
                '--nav-item-color': theme.palette.neutral[400],
                '--nav-item-hover-bg': 'rgba(255, 255, 255, 0.04)',
                '--nav-item-active-bg': 'rgba(255, 255, 255, 0.04)',
                '--nav-item-active-color': theme.palette.common.white,
                '--nav-item-disabled-color': theme.palette.neutral[500],
                '--nav-item-icon-color': theme.palette.neutral[400],
                '--nav-item-icon-active-color': theme.palette.primary.main,
                '--nav-item-icon-disabled-color': theme.palette.neutral[500],
                '--nav-item-chevron-color': theme.palette.neutral[600],
                '--nav-scrollbar-color': theme.palette.neutral[400]
              };
            } else {
              return {
                '--nav-bg': theme.palette.neutral[800],
                '--nav-color': theme.palette.common.white,
                '--nav-logo-border': theme.palette.neutral[700],
                '--nav-section-title-color': theme.palette.neutral[400],
                '--nav-item-color': theme.palette.neutral[400],
                '--nav-item-hover-bg': 'rgba(255, 255, 255, 0.04)',
                '--nav-item-active-bg': 'rgba(255, 255, 255, 0.04)',
                '--nav-item-active-color': theme.palette.common.white,
                '--nav-item-disabled-color': theme.palette.neutral[500],
                '--nav-item-icon-color': theme.palette.neutral[400],
                '--nav-item-icon-active-color': theme.palette.primary.main,
                '--nav-item-icon-disabled-color': theme.palette.neutral[500],
                '--nav-item-chevron-color': theme.palette.neutral[600],
                '--nav-scrollbar-color': theme.palette.neutral[400]
              };
            }
  
          default:
            return {};
        }
      },
      [theme, color]
    );
  };

// function getCssVars(isMobile: boolean, mode: string, color: NavColor) {

//     var cssVar: Record<string, string> = {};


//     if(mode === 'dark') {

//     }


//     if(!isMobile) {
//         cssVar['--nav-border-color'] = 'theme.palette.divider';
//     }

//     cssVar['--nav-bg'] = 'theme.palette.neutral[50]';
//     cssVar['--nav-color'] = 'theme.palette.text.primary';
    
//     cssVar['--nav-logo-border'] = 'theme.palette.neutral[200]';
//     cssVar['--nav-section-title-color'] = 'theme.palette.neutral[500]';
//     cssVar['--nav-item-color'] = 'theme.palette.neutral[500]';
//     cssVar['--nav-item-hover-bg'] = 'theme.palette.action.hover';
//     cssVar['--nav-item-active-bg'] = 'theme.palette.action.selected';
//     cssVar['--nav-item-active-color'] = 'theme.palette.text.primary';
//     cssVar['--nav-item-disabled-color'] = 'theme.palette.neutral[400]';
//     cssVar['--nav-item-icon-color'] = 'theme.palette.neutral[400]';
//     cssVar['--nav-item-icon-active-color'] = 'theme.palette.primary.main';
//     cssVar['--nav-item-icon-disabled-color'] = 'theme.palette.neutral[400]';
//     cssVar['--nav-item-chevron-color'] = 'theme.palette.neutral[400]';
//     cssVar['--nav-scrollbar-color'] = 'theme.palette.neutral[900]';


//   return {
   
//   };
// }