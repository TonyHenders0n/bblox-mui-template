import type { FC } from "react";
import PropTypes from "prop-types";
import type { ApexOptions } from "apexcharts";
import { Box, Card, CardHeader, Tab, Tabs } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Chart } from "src/components/chart";

type ChartSeries = {
  name: string;
  data: number[];
}[];

const useChartOptions = (): ApexOptions => {
  const theme = useTheme();

  return {
    chart: {
      background: "transparent",
      stacked: true,
      toolbar: {
        show: false,
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
      borderColor: theme.palette.divider,
      strokeDashArray: 2,
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        columnWidth: "80%", 
        colors: {
          ranges: [ 
            { from: 1, to: 58, color: theme.palette.primary.main },
          ],
        },
      },
    },
    theme: {
      mode: theme.palette.mode,
    },
    tooltip: {
      y: {
        formatter: (value: number): string => `${value}k events`,
      },
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      categories: [
        "California",
        "Alameda",
        "Alpine",
        "Amador",
        "Butte",
        "Calaveras",
        "Colusa",
        "Contra Costa",
        "Del Norte",
        "El Dorado",
        "Fresno",
        "Glenn",
        "Humboldt",
        "Imperial",
        "Inyo",
        "Kern",
        "Kings",
        "Lake",
        "Lassen",
        "Los Angeles",
        "Madera",
        "Marin",
        "Mariposa",
        "Mendocino",
        "Merced",
        "Modoc",
        "Mono",
        "Monterey",
        "Napa",
        "Nevada",
        "Orange",
        "Placer",
        "Plumas",
        "Riverside",
        "Sacramento",
        "San Benito",
        "San Bernardino",
        "San Diego",
        "San Francisco",
        "San Joaquin",
        "San Luis Obispo",
        "San Mateo",
        "Santa Barbara",
        "Santa Clara",
        "Santa Cruz",
        "Shasta",
        "Sierra",
        "Siskiyou",
        "Solano",
        "Sonoma",
        "Stanislaus",
        "Sutter",
        "Tehama",
        "Trinity",
        "Tulare",
        "Tuolumne",
        "Ventura",
        "Yolo",
        "Yuba",
      ],
      labels: {
        rotate: -90,
        style: {
          colors: theme.palette.text.secondary,
          fontWeight: 800,
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

interface OverviewSubscriptionUsageProps {
  chartSeries: ChartSeries;
}

export const OverviewSubscriptionUsage: FC<OverviewSubscriptionUsageProps> = (
  props
) => {
  const { chartSeries } = props;
  const chartOptions = useChartOptions();

  return (
    <Card>
      <CardHeader
        subheader="Percentage Reported by County and Local Health Jurisdiction"
        title="Shots for School Reporting Summary 7th & 8th Grade"
        action={
          <Tabs value="year">
            <Tab
              label="Year"
              value="year"
            />
            <Tab
              label="Month"
              value="month"
            />
            <Tab
              label="Week"
              value="week"
            />
          </Tabs>
        }
      />
      <Box sx={{ height: 336 }}>
      {/* <Chart
          height={300}
          options={chartOptions}
          series={ [{ name: 'test', data:[50]}]}
          type="bar"
        /> */}
        <Chart
          height={300}
          options={chartOptions}
          series={chartSeries}
          type="bar"
        />
      </Box>
    </Card>
  );
};

OverviewSubscriptionUsage.propTypes = {
  chartSeries: PropTypes.array.isRequired,
};
