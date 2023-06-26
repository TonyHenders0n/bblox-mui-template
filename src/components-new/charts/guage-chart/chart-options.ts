import { Theme } from "@mui/material";
import { ApexOptions } from "apexcharts";

export const useChartOptions = (usage: string, theme: Theme): ApexOptions => {
  return {
    chart: {
      background: "transparent",
      redrawOnParentResize: false,
      redrawOnWindowResize: false,
      animations: {
        enabled: true,
        // easing: 'easeinout',
        speed: 500,
        animateGradually: {
            enabled: true,
            delay: 150
        },
        // dynamicAnimation: {
        //     enabled: true,
        //     speed: 350
        // }
      },
    },
    colors: [theme.palette.primary.main],
    fill: {
      opacity: 1,
      type: "solid",
    },
    grid: {
      padding: {
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
      },
    },
    labels: [usage],
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            color: theme.palette.text.primary,
            fontSize: "24px",
            fontWeight: 600,
            show: true,
            offsetY: -15,
          },
          value: {
            show: false,
          },
        },
        endAngle: 90,
        hollow: {
          size: "60%",
        },
        startAngle: -90,
        track: {
          background:
            theme.palette.mode === "dark"
              ? theme.palette.primary.dark
              : theme.palette.primary.light,
          strokeWidth: "100%",
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
