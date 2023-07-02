import { Color, Theme } from "@mui/material";
import { ApexOptions } from "apexcharts";

export const useChartOptions = (
  
  percentage: string,
  theme: Theme,
  percentageTitle?: string,
  color?: Color,
  colorFunction?: Function
): ApexOptions => {
  // Example Color function
  // const colorFunction = (target: any): any  => {

  //   const value = target.value
  //   console.log(`Color Value: ${ value }`)
  //   if (value < 55) {
  //     return '#7E36AF';
  //   } else if (value >= 55 && value < 80) {
  //     return '#FF0000';
  //   } else {
  //     return theme.palette.primary.main;
  //   }
  // }

  const defaultColor = color ? color : theme.palette.primary.main;

  return {
    chart: {
      type: 'radialBar',
      background: "transparent",
      redrawOnParentResize: false,
      redrawOnWindowResize: false,
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
    },
    // colors: [(value: number): any  => {
    //   if (value < 55) {
    //     return '#7E36AF';
    //   } else if (value >= 55 && value < 80) {
    //     return '#164666';
    //   } else {
    //     return theme.palette.primary.main;
    //   }
    // }],
    // colors: {
    //   ranges: [{ from: 1, to: 58, color: theme.palette.primary.main }],
    // },
    fill: {
      opacity: 1,
      type: "solid",
      gradient: {
        type: "vertical",
        // shade: "dark",
        stops: [75, 100],
        shadeIntensity: 0.2,
      },
      colors: [colorFunction ? colorFunction : defaultColor],
    },
    grid: {
      padding: {
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
      },
    },
    labels: [percentageTitle ? percentageTitle : ''],
    plotOptions: {
 
      radialBar: {
        // track: {
        //   background: '#fff',
        //   strokeWidth: '67%',
        //   margin: 0, // margin is in pixels
        //   dropShadow: {
        //     enabled: true,
        //     top: -3,
        //     left: 0,
        //     blur: 4,
        //     opacity: 0.35
        //   }
        // },
        
        dataLabels: {
          show: true,
          name: {
            offsetY: -24,
            show: true,
            color: '#888',
            fontSize: '16px'
          },
          // name: {
          //   color: theme.palette.text.primary,
          //   fontSize: "22px",
          //   fontWeight: 600,
          //   show: true,
          //   offsetY: -15,
          // },
          value: {
            // formatter: function(value) {
            //   return parseInt(value);
            // },
            offsetY: -10, 
            color: '#111',
            fontSize: '24px',
            fontWeight: 600,
            show: true,
          }
          // value: {
          //   show: false,
          // },
        },
        endAngle: 90,
        hollow: { 
          size: '60%',
          background: 'transparent',
        },
        startAngle: -90,
        track: {
          show: true,
          // background: '#40475D',
          //  strokeWidth: '110%',
          opacity: 1,
          margin: 3, // margin is in pixels,
          background:
            theme.palette.mode === "dark"
              ? theme.palette.grey[300]
              : theme.palette.grey[300],
          strokeWidth: "100%",
          dropShadow: {
            enabled: false,
            top: -3,
            left: 0,
            blur: 3,
            opacity: 0.05,
          },
        },
       
      },
    },
    states: {
      active: {
        filter: {
          type: "none",
        },
      },
      hover: {
        filter: {
          type: "none",
        },
      },
    },
    stroke: {
      lineCap: "round",
    },
    theme: {
      mode: theme.palette.mode,
    },
  };
};
