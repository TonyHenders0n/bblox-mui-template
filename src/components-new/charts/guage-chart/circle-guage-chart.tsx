import type { FC } from "react";
import type { ApexOptions } from "apexcharts";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Color,
  Divider,
  Stack,
  SvgIcon,
  Tooltip,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Chart } from "src/components/chart";
import Lightning01Icon from "@untitled-ui/icons-react/build/esm/Lightning01";
import { LocationOn as LocationOnIcon } from "@mui/icons-material";
import { useChartOptions } from "./chart-options";

interface ColorizeChartValue {
  property: string;
  value: string;
  color: any;
}

type ChartSeries = number[];

export interface CircleGuageChartProps {
  // chartSeries: ChartSeries;
  title: string;
  subheader: string;
  innerTitle?: string;
  color?: Color;
  colorFunction?: Function;
  value?: string;
  chartHeight?: number;
  currentPercentage: number;
}

/**
 *
 * @param props
 * @returns
 */
export const CircleGuageChartCard: FC<CircleGuageChartProps> = (props) => {
  return (
    <Card>
      <CircleGuageChart {...props} />
    </Card>
  );
};

/**
 *
 * @param props
 * @returns
 */
export const CircleGuageChart: FC<CircleGuageChartProps> = (props) => {
  const {
    title,
    subheader,
    value,
    innerTitle,
    currentPercentage = 0,
    chartHeight = 230,
    color,
    colorFunction,
  } = props;

  const theme = useTheme();
  const currentUsage = `${currentPercentage}%`;
  const chartOptions = useChartOptions(
    currentUsage,
    theme,
    innerTitle,
    color,
    colorFunction
  );
 
  const chartSeries: ChartSeries = [currentPercentage];

  return (
    <> 
      <CardHeader
        title={title}
        subheader={subheader}
        action={
          <>
            <Tooltip
              title={value}
              arrow
            >
              <Chip
                sx={{ minWidth: "110px", maxWidth: "110px" }}
                size="small"
                // icon={<LocationOnIcon />}
                label={value}
                variant="outlined"
                color="info"
              />
            </Tooltip>
          </>
        }
      />
      <CardContent>
        <Stack alignItems="center">
          <Box
            sx={{
              height: chartHeight,
              mt: "-48px",
              mb: "-90px",
            }}
          >
            <Chart
              width={chartHeight}
              height={chartHeight}
              options={chartOptions}
              series={chartSeries}
              
              type="radialBar"
            />
          </Box>
          {/* <Typography
            variant="h6"
            sx={{ mb: 1 }}
          >
            You’ve almost reached your limit
          </Typography> */}
          <Chip
            sx={{ minWidth: "110px", maxWidth: "110px", fontWeight: 700 }}
            size="small"
            // icon={<LocationOnIcon />}
            label="TDap"
            variant="outlined" 
             color="primary"
          />
        </Stack>
      </CardContent>
    </>
  );
};

export default CircleGuageChart;
