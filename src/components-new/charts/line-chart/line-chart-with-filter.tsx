import type { FC } from "react";
import PropTypes from "prop-types";
import type { ApexOptions } from "apexcharts";
import {
  Autocomplete,
  Avatar,
  Card,
  CardHeader,
  Chip,
  Stack,
  TextField,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Chart } from "src/components/chart";
import { LocationOn as LocationOnIcon } from "@mui/icons-material";
import { useChartOptions } from "./chart-options";

// type ChartSeries = {
//   name: string;
//    data: number[];
//   // data: { x: string; y: number; fillColor: any }[];
// }[];

interface ColorizeChartValue {
  property: string;
  value: string;
  color: any;
}

type ChartSeries = {
  data: number[];
}[];

export interface LineChartProps {
  chartSeries: ChartSeries;
  title: string;
  subheader: string;
  value: string;
  chartHeight?: number;
  colorizeChartValues?: ColorizeChartValue[];
}

export const LineChartCard: FC<LineChartProps> = (props) => {
  const { chartSeries, title, value, subheader, chartHeight = 300 } = props;

  const theme = useTheme();
  const chartOptions = useChartOptions(theme);

  return (
    <Card>
      <LineChart
        chartSeries={chartSeries}
        title={title}
        value={value}
        subheader={subheader}
        chartHeight={chartHeight}
      />
    </Card>
  );
};

export const LineChart: FC<LineChartProps> = (props) => {
  const { chartSeries, title, value, subheader, chartHeight = 300 } = props;

  const theme = useTheme();
  const chartOptions = useChartOptions(theme);

  return (
    <>
      <Stack
        direction={"column"}
        sx={{ width: "100%" }}
      >
        <CardHeader
          title={title}
          subheader={subheader}
          action={
            <Chip
              size="small"
              sx={{ minWidth: "110px" }}
              // icon={<LocationOnIcon />}
              label={value}
              variant="outlined"
              // color="primary"
            />
          }
        />
        <Stack
          direction={{ lg: "column" }}
          // spacing={{ lg: 0.1 }}
          sx={{
            width: "100%",
            paddingLeft: 1,
            paddingRight: 1 
          }}
        >
          <Chart
            sx={{ width: "100%", spacing: 0 }}
            height={chartHeight}
            options={chartOptions}
            series={chartSeries}
            type="area"
          />
        </Stack>
      </Stack>
    </>
  );
};

LineChartCard.propTypes = {
  chartSeries: PropTypes.array.isRequired,
};
