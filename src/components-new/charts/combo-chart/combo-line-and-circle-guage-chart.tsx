import type { FC } from "react";
import PropTypes from "prop-types";
import type { ApexOptions } from "apexcharts";
import {
  Autocomplete,
  Avatar,
  Card,
  CardHeader,
  Chip,
  Divider,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Chart } from "src/components/chart";
import { LocationOn as LocationOnIcon } from "@mui/icons-material";

import {
  LineChart,
  LineChartProps,
} from "../line-chart/line-chart-with-filter";
import CircleGuageChart, {
  CircleGuageChartProps,
} from "../guage-chart/circle-guage-chart";

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

export interface ComboLineAndCircleGuageChartProps {
  title: string;
  subheader: string;
  value: string;
  properties: {
    lineChart: LineChartProps;
    circleGuageChart: CircleGuageChartProps;
  };
}

export const ComboLineAndCircleGuageChart: FC<
  ComboLineAndCircleGuageChartProps
> = (props) => {
  // const { chartSeries, title, value, subheader, chartHeight = 300 } = props.lineChartProperties;
  const {
    title,
    subheader,
    value,
    properties: { circleGuageChart, lineChart },
  } = props;

  const theme = useTheme();

  return (
    <Card>
      <CardHeader
        title={title}
        // subheader={subheader}
        action={
          <Chip
            size="small"
            sx={{ minWidth: "110px" }}
            // icon={<LocationOnIcon />}
            label={value}
            variant="outlined"
             color="primary"
          />
        }
      />
      <Divider/>
      <Grid
        container
        sx={{ width: "100%" }}
      >
        <Grid
          item
          xs={12}
          md={7}
        >
          <LineChart {...lineChart} />
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
        >
          <CircleGuageChart {...circleGuageChart} />
        </Grid>
      </Grid>
    </Card>
  );
};

ComboLineAndCircleGuageChart.propTypes = {
  // title: PropTypes.string.isRequired,
  // subheader: PropTypes.string,
  // lineChartProperties: PropTypes.object,
  // circleGuageProperties: PropTypes.object,
};
// chartSeries: PropTypes.array.isRequired,
