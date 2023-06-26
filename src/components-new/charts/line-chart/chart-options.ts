import { Theme } from "@mui/material";
import { ApexOptions } from "apexcharts";

export const useChartOptions = (theme: Theme): ApexOptions => {
  return { 
      chart: {
        background: "transparent",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      markers: {
        size: 4,
        strokeWidth: 0,
      },
      colors: [theme.palette.primary.main],
      dataLabels: {
        enabled: false,
      },
      fill: {
        gradient: {
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 100],
        },
        type: "gradient",
      },
      grid: {
        show: true,
        strokeDashArray: 4,
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          bottom: 0,
          left: 20,
          right: 20,
          top: 0,
        },
      },
      stroke: {
        curve: "smooth",
        width: 3,
      },
      theme: {
        mode: theme.palette.mode,
      },
      tooltip: {
        enabled: true,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: true,
        },
      },
      yaxis: {
        show: false,
      },
    };
  };