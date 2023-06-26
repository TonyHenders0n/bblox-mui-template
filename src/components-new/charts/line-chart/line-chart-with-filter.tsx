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

export interface LineChartWithFilterProps {
  chartSeries: ChartSeries;
  title: string;
  subheader: string;
  value: string;
  chartHeight?: number;
  colorizeChartValues?: ColorizeChartValue[];
}

export const LineChartWithFilter: FC<LineChartWithFilterProps> = (props) => {
  const { chartSeries, title, value, subheader, chartHeight = 300 } = props;

  const theme = useTheme();
  const chartOptions = useChartOptions(theme);

  return (
    <Card>
      <CardHeader
        title={title}
        subheader={subheader}
        action={
          <Chip
            size="small"
            sx={{ minWidth: "110px"}}
            // icon={<LocationOnIcon />}
            label={value}
            variant="outlined"
            // color="primary"
          />
        }
      />

      <Stack
        direction={{ lg: "column" }}
        padding={1}
        // spacing={{ lg: 0.1 }}
        sx={{ width: "100%" }}
      >
        <Chart
          sx={{ width: "100%" }}
          height={chartHeight}
          options={chartOptions}
          series={chartSeries}
          type="area"
        />
      </Stack>
    </Card>
  );
};

LineChartWithFilter.propTypes = {
  chartSeries: PropTypes.array.isRequired,
};
