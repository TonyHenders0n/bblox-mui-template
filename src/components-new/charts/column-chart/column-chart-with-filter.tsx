import type { FC } from "react";
import PropTypes from "prop-types";
import type { ApexOptions } from "apexcharts";
import {
  Autocomplete,
  Card,
  CardHeader,
  Stack,
  TextField,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Chart } from "src/components/chart";
import { useChartOptions } from "./chart-options";

type ChartSeries = {
  name: string; 
  data: { x: string; y: number; fillColor: any }[];
}[];

interface ColorizeChartValue {
  property: string;
  value: string;
  color: any;
}

export interface ColumnChartWithFilterProps {
  title: string;
  chartSeries: ChartSeries;
  dataPointSelectionHandler:Function;
  subheader?: string;
  chartOptions?: ApexOptions;
  chartActions?: React.ReactNode;
  filterListSource: string[];
  chartHeight?: number;
  colorizeChartValues?: ColorizeChartValue[];
}
const countries: Option[] = [
  { text: "Jersey", value: "JE" },
  { text: "Jordan", value: "JO" },
  { text: "Kazakhstan", value: "KZ" },
  { text: "Kenya", value: "KE" },
  { text: "Kiribati", value: "KI" },
  { text: "Korea, Democratic People'S Republic of", value: "KP" },
  { text: "Korea, Republic of", value: "KR" },
  { text: "Kuwait", value: "KW" },
  { text: "Kyrgyzstan", value: "KG" },
  { text: "Lao People'S Democratic Republic", value: "LA" },
];

type Option = {
  text: string;
  value: string;
};

export const ColumnChartWithFilter: FC<ColumnChartWithFilterProps> = (
  props
) => {
  const {
    title,
    subheader,
    chartSeries,
    chartOptions,
    chartHeight = 300,
    dataPointSelectionHandler
  } = props;
  const theme = useTheme();
  const defaultChartOptions = useChartOptions(theme, dataPointSelectionHandler);
  const selectedChartOptions = chartOptions
    ? chartOptions
    : defaultChartOptions;

  /**
   *
   * @param chartSeries
   * @returns
   */
  const createFilterOptions = (chartSeries: ChartSeries): Option[] => {
 
    return chartSeries[0].data.map((series) => {
      return { text: series.x, value: series.y.toString() };
    });
  };

  return (
    <Card>
      <CardHeader
        sx={{ marginBottom: 0 }}
        title={title}
        subheader={subheader}
        action={
          <>
            <Stack
              width={400}
              direction={{ xs: "row", lg: "row" }}
              spacing={{ xs: 1, sm: 2, md: 2 }}
            >
              <Autocomplete
                size="medium"
                fullWidth
                getOptionLabel={(option: Option) => option.text}
                options={createFilterOptions(chartSeries)}
                renderInput={(params): JSX.Element => (
                  <TextField
                    {...params}
                    fullWidth
                    label="Show Region"
                    name="value"
                  />
                )}
              />
              <Autocomplete
                 size="medium"
                fullWidth
                getOptionLabel={(option: Option) => option.text}
                options={countries}
                renderInput={(params): JSX.Element => (
                  <TextField
                    {...params}
                    fullWidth
                    label="Sort by"
                    name="country"
                  />
                )}
              />
            </Stack>
          </>
        }
      />
      <Stack
        direction={{ lg: "column" }}
        justifyContent={"center"}
        alignItems={"center"}
        paddingLeft={2}
        paddingRight={2}
        sx={{ width: "100%" }}
      >
        <Chart
          sx={{ width: "100%" }}
          height={chartHeight}
          options={selectedChartOptions}
          series={chartSeries}
          type="bar"
        />
      </Stack>
    </Card>
  );
};

ColumnChartWithFilter.propTypes = {
  chartSeries: PropTypes.array.isRequired,
};
