import ArrowRightIcon from "@untitled-ui/icons-react/build/esm/ArrowRight";
import PlusIcon from "@untitled-ui/icons-react/build/esm/Plus";
import {
  Box,
  Button,
  Container,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid,
  useTheme,
  Tab,
  Tabs,
} from "@mui/material";
import { Seo } from "src/components/seo";
import { usePageView } from "src/hooks/use-page-view";
import { useSettings } from "src/hooks/use-settings";
import { AnalyticsStats } from "src/sections/dashboard/analytics/analytics-stats";
import type { Page as PageType } from "src/types/page";
import { ColumnChartWithFilter } from "src/components-new/charts/column-chart/column-chart-with-filter";
import CircleGuageChart from "src/components-new/charts/guage-chart/circle-guage-chart";
import { LineChartWithFilter } from "src/components-new/charts/line-chart/line-chart-with-filter";
import { useState } from 'react';

const Page: PageType = () => {
  const settings = useSettings();

  usePageView();
  const theme = useTheme();

  const primaryColumnColor = theme.palette.primary.main;
  const secondarChartColor = theme.palette.secondary.main;
  const localHealthJurisdictionState = useState('All Regions')
  const [localHj, setLocalHj] =  useState('All Regions')
  const [localHjValue, setLocalHjValue] =  useState(90)
  const [cumData, setCumData] =  useState([15, 21, 33, 36, 48, 56, 63, 78, 81, 84, 86, 91])
  const [switchData, setSwitchData] =  useState(false)

  const localHealthJurisdiction  = 'San Luis Obispo'

  const cumDataTempAlt1 = [18, 21, 31, 36, 51, 56, 63, 78, 81, 84, 86, 96]
  const cumDataTempAlt2 = [6, 17, 33, 36, 48, 56, 63, 78, 81, 84, 86, 91]
 
  const dataPointSelectionHandler = (event: any, chartContext: any, config: any):void => {
    const dataPointSelection = config.w.config.series[config.seriesIndex].data[config.dataPointIndex];
    console.log(`dataPointSelection: ${JSON.stringify(dataPointSelection, null, '\t')}`);
    setLocalHj(dataPointSelection.x)
    setLocalHjValue(dataPointSelection.y)
    if(!switchData) {
      setCumData(cumDataTempAlt1)
      setSwitchData(true)
    } else {
      setCumData(cumDataTempAlt2)
      setSwitchData(false)
    }
  }
 
 

  return (
    <>
      <Seo title="Dashboard: SRS Admin" />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={settings.stretch ? false : "lg"}>
          <Grid
            container
            spacing={{
              xs: 3,
              lg: 4,
            }}
          >
            {/* <!-- Header --> */}
            <Grid xs={12}>
              <Stack
                direction="row"
                justifyContent="space-between"
                spacing={4}
              >
                <Stack spacing={1}>
                  <Typography variant="h4">
                    Dashboard 7th & 8th Grade
                  </Typography>
                </Stack>
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={2}
                >
                  <Button
                    startIcon={
                      <SvgIcon>
                        <PlusIcon />
                      </SvgIcon>
                    }
                    variant="contained"
                  >
                    New Dashboard
                  </Button>
                </Stack>
              </Stack>
            </Grid>
            {/* <Grid xs={12}>
              <Tabs
                value={"reporting-summary"}
                // onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab
                  label="Reporting Summary"
                  value={"reporting-summary"}
                />
                <Tab label="Downloads" />
              </Tabs>
            </Grid> */}

            <Grid
              xs={12}
              lg={12}
            >
              <ColumnChartWithFilter
                title="Shots for School Reporting Summary"
                subheader="Percentage Reported by County and Local Health Jurisdiction"
                chartHeight={275}
                dataPointSelectionHandler={dataPointSelectionHandler}
                chartSeries={[
                  {
                    name: "School Year",
                    // data: [
                    //   48, 42, 46, 38, 47, 35, 39, 40, 49, 37, 48, 50, 44, 41,
                    //   45, 43, 35, 39, 36, 46, 37, 42, 40, 50, 47, 48, 38, 43,
                    //   44, 45, 41, 49, 39, 36, 50, 38, 45, 46, 37, 44, 40, 35,
                    //   49, 42, 47, 43, 41, 36, 39, 38, 48, 50, 37, 44, 46, 35,
                    //   40, 42, 43,
                    // ],

                    data: [
                      {
                        x: "CALIFORNIA",
                        fillColor: secondarChartColor,
                        y: 96,
                      },

                      { x: "Alameda", fillColor: primaryColumnColor, y: 84 },
                      { x: "Alpine", fillColor: primaryColumnColor, y: 78 },
                      { x: "Amador", fillColor: primaryColumnColor, y: 91 },
                      { x: "Butte", fillColor: primaryColumnColor, y: 89 },
                      { x: "Calaveras", fillColor: primaryColumnColor, y: 42 },
                      { x: "Colusa", fillColor: primaryColumnColor, y: 82 },
                      {
                        x: "Contra Costa",
                        fillColor: primaryColumnColor,
                        y: 95,
                      },
                      { x: "Del Norte", fillColor: primaryColumnColor, y: 77 },
                      { x: "El Dorado", fillColor: primaryColumnColor, y: 86 },
                      { x: "Fresno", fillColor: primaryColumnColor, y: 80 },
                      { x: "Glenn", fillColor: primaryColumnColor, y: 95 },
                      { x: "Humboldt", fillColor: primaryColumnColor, y: 75 },
                      { x: "Imperial", fillColor: primaryColumnColor, y: 81 },
                      { x: "Inyo", fillColor: primaryColumnColor, y: 90 },
                      { x: "Kern", fillColor: primaryColumnColor, y: 86 },
                      { x: "Kings", fillColor: primaryColumnColor, y: 92 },
                      { x: "Lake", fillColor: primaryColumnColor, y: 79 },
                      { x: "Lassen", fillColor: primaryColumnColor, y: 88 },
                      {
                        x: "Los Angeles",
                        fillColor: primaryColumnColor,
                        y: 75,
                      },
                      { x: "Madera", fillColor: primaryColumnColor, y: 94 },
                      { x: "Marin", fillColor: primaryColumnColor, y: 86 },
                      { x: "Mariposa", fillColor: primaryColumnColor, y: 97 },
                      { x: "Mendocino", fillColor: primaryColumnColor, y: 79 },
                      { x: "Merced", fillColor: primaryColumnColor, y: 83 },
                      { x: "Modoc", fillColor: primaryColumnColor, y: 96 },
                      { x: "Mono", fillColor: primaryColumnColor, y: 73 },
                      { x: "Monterey", fillColor: primaryColumnColor, y: 76 },
                      { x: "Napa", fillColor: primaryColumnColor, y: 90 },
                      { x: "Nevada", fillColor: primaryColumnColor, y: 80 },
                      { x: "Orange", fillColor: primaryColumnColor, y: 94 },
                      { x: "Placer", fillColor: primaryColumnColor, y: 84 },
                      { x: "Plumas", fillColor: primaryColumnColor, y: 89 },
                      { x: "Riverside", fillColor: primaryColumnColor, y: 87 },
                      { x: "Sacramento", fillColor: primaryColumnColor, y: 95 },
                      { x: "San Benito", fillColor: primaryColumnColor, y: 88 },
                      {
                        x: "San Bernardino",
                        fillColor: primaryColumnColor,
                        y: 81,
                      },
                      { x: "San Diego", fillColor: primaryColumnColor, y: 76 },
                      {
                        x: "San Francisco",
                        fillColor: primaryColumnColor,
                        y: 90,
                      },
                      {
                        x: "San Joaquin",
                        fillColor: primaryColumnColor,
                        y: 85,
                      },
                      {
                        x: "San Luis Obispo",
                        fillColor: primaryColumnColor,
                        y: 94,
                      },
                      { x: "San Mateo", fillColor: primaryColumnColor, y: 85 },
                      {
                        x: "Santa Barbara",
                        fillColor: primaryColumnColor,
                        y: 88,
                      },
                      {
                        x: "Santa Clara",
                        fillColor: primaryColumnColor,
                        y: 93,
                      },
                      { x: "Santa Cruz", fillColor: primaryColumnColor, y: 87 },
                      { x: "Shasta", fillColor: primaryColumnColor, y: 83 },
                      { x: "Sierra", fillColor: primaryColumnColor, y: 92 },
                      { x: "Siskiyou", fillColor: primaryColumnColor, y: 86 },
                      { x: "Solano", fillColor: primaryColumnColor, y: 79 },
                      { x: "Sonoma", fillColor: primaryColumnColor, y: 54 },
                      { x: "Stanislaus", fillColor: primaryColumnColor, y: 77 },
                      { x: "Sutter", fillColor: primaryColumnColor, y: 92 },
                      { x: "Tehama", fillColor: primaryColumnColor, y: 83 },
                      { x: "Trinity", fillColor: primaryColumnColor, y: 89 },
                      { x: "Tulare", fillColor: primaryColumnColor, y: 81 },
                      { x: "Tuolumne", fillColor: primaryColumnColor, y: 96 },
                      { x: "Ventura", fillColor: primaryColumnColor, y: 89 },
                      { x: "Yolo", fillColor: primaryColumnColor, y: 93 },
                      { x: "Yuba", fillColor: primaryColumnColor, y: 80 },
                    ],
                  },
                  // {
                  //   name: "Last year",
                  //   data: [26, 22, 19, 22, 24, 28, 23, 25, 24, 21, 17, 19, 26, 22, 19, 22, 24, 28, 23, 25, 24, 21, 17, 19, 26, 22, 19, 22, 24, 28, 23, 25, 24, 21, 17, 19],
                  // },
                ]}
                filterListSource={[]}
              />
            </Grid>

            {/* <!-- Analytics --> */}
            <Grid
              xs={12}
              md={5}
              lg={5}
              xl={5}
            >
              {/* <AnalyticsSocialSources
                chartSeries={[10, 10, 20]}
                labels={["Linkedin", "Facebook", "Instagram"]}
              /> */}
              <CircleGuageChart
                title="Immunization Rate by Local Health Juristiction"
                subheader="Percent of students with all requirements met from schools/facilities with reports submitted."
                value={localHj}
                currentPercentage={localHjValue} 
              />
            </Grid>
            <Grid
              xs={12}
              md={7}
              lg={7}
              xl={7}
            >
              <LineChartWithFilter 
                title="Cumulative Percent Reported by Date"
                subheader="Local Health Jurisdiction"
                value={localHj}
                chartSeries={[
                  {
                    data: cumData,
                  },
                ]}
                chartHeight={225}
             
              />
            </Grid>
            <Grid
              xs={12}
              md={12}
            >
              <AnalyticsStats
                action={
                  <Button
                    color="inherit"
                    endIcon={
                      <SvgIcon>
                        <ArrowRightIcon />
                      </SvgIcon>
                    }
                    size="small"
                  >
                    See traffic
                  </Button>
                }
                chartSeries={[
                  {
                    data: [
                      0, 245, 290, 187, 172, 106, 15, 210, 202, 19, 18, 3, 212,
                      0,
                    ],
                  },
                ]}
                title="Engagements"
                value="19K"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Page;
