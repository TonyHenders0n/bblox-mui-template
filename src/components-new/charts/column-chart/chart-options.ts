import { useTheme } from '@emotion/react';
import { Theme } from '@mui/material';
import { ApexOptions } from 'apexcharts';

export const useChartOptions = (theme:Theme, dataPointSelectionHandler: Function): ApexOptions => {
    
  
    return {
      chart: {
        // redrawOnWindowResize: false,
        background: "transparent",
        toolbar: {
          show: false,
        },
        width: "100%",
        animations: {
          enabled: true,
          // easing: 'easeinout',
          // speed: 800,
          // animateGradually: {
          //     enabled: true,
          //     delay: 150
          // },
          // dynamicAnimation: {
          //     enabled: true,
          //     speed: 350
          // }
        },
  
        events: {
          dataPointSelection: function(event, chartContext, config) {
            dataPointSelectionHandler(event, chartContext, config);
            // const dataPointSelection = config.w.config.series[config.seriesIndex].data[config.dataPointIndex];
            // console.log(`dataPointSelection: ${JSON.stringify(dataPointSelection, null, '\t')}`);
            // console.log(`dataPointSelection: ${JSON.stringify(config.w.config.series[config.seriesIndex].data[config.dataPointIndex], null, '/t')} ${config.seriesIndex} ${config.dataPointIndex} ${config.w.config.series[config.seriesIndex].data[config.dataPointIndex]}`);
          }
          // animationEnd: function (chartContext, options) {
          //   console.log("animationEnd");
          //   chartContext.toggleDataPointSelection(0)
          // },
          // mounted: function(chartContext, config) {
          //   chartContext.toggleDataPointSelection(0,5)
          // },
        },
      },
      colors: [
        theme.palette.primary.main,
        theme.palette.mode === "dark"
          ? theme.palette.primary.darkest
          : theme.palette.primary.light,
      ],
      dataLabels: {
        enabled: false,
      },
      legend: {
        labels: {
          colors: theme.palette.text.secondary,
        },
        onItemClick: {
          toggleDataSeries: false,
        },
        onItemHover: {
          highlightDataSeries: true,
        },
      },
      grid: {
        show: false,
        borderColor: theme.palette.divider,
        strokeDashArray: 2,
        padding: {
          top: 0,
          right: 15,
          bottom: 0,
          left: 0,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 6,
          columnWidth: "80%",
  
          // colors: {
          //   ranges: [{ from: 1, to: 58, color: theme.palette.primary.main }],
          // },
        },
      },
      theme: {
        mode: theme.palette.mode,
      },
      tooltip: {
        y: {
          formatter: (value: number): string => `${value} Percent of reported`,
        },
      },
      xaxis: {
        axisBorder: {
          show: true,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          rotate: -90,
          style: {
            colors: theme.palette.text.secondary,
            fontWeight: 800,
            fontSize: "11px",
          },
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.85,
          opacityTo: 0.85,
          stops: [40, 0, 100],
        },
      },
    };
  };