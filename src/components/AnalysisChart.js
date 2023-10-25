// STEP 1 - Include Dependencies
// Include react
import React from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Chart from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const ChartComponent = () => {
  const chartConfigs = {
    type: "mscombi2D", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Sales Analytics",
        yAxisName: "Points",
        theme: "fusion",
        plotSpacePercent:'75',
        captionAlignment: 'left',
        drawAnchors: false,

      },
      // Chart Data
      dataset: [
        {
          seriesName: "Desktops",
          data: [
            {
              value: "27"
            },
            {
              value: "10"
            },
            {
              value: "20"
            },
            {
              value: "25"
            },
            {
              value: "15"
            },
            {
              value: "21"
            },
            {
              value: "38"
            },
            {
              value: "20"
            },
            {
              value: "20"
            },
            {
              value: "43"
            },
            {
              value: "33"
            }
          ]
        },
        {
          seriesName: "Laptops",
          renderAs: "spline",
          data: [
            {
              value: "25"
            },
            {
              value: "13"
            },
            {
              value: "23"
            },
            {
              value: "29"
            },
            {
              value: "19"
            },
            {
              value: "28"
            },
            {
              value: "50"
            },
            {
              value: "25"
            },
            {
              value: "33"
            },
            {
              value: "33"
            },
            {
              value: "37"
            }
          ]
        },
        {
          seriesName: "Tablets",
          renderAs: "area",
          data: [
            {
              value: "43"
            },
            {
              value: "25"
            },
            {
              value: "28"
            },
            {
              value: "25"
            },
            {
              value: "15"
            },
            {
              value: "21"
            },
            {
              value: "35"
            },
            {
              value: "20"
            },
            {
              value: "33"
            },
            {
              value: "33"
            },
            {
              value: '35'
            }
          ]
        }
      ],

      categories: [
        {
          category: [
            {
              label: "2003"
            },
            {
              label: "Feb/03"
            },
            {
              label: "Mar/03"
            },
            {
              label: "Apr/03"
            },
            {
              label: "May/03"
            },
            {
              label: "Jun/03"
            },
            {
              label: "Jul/03"
            },
            {
              label: "Aug/03"
            },
            {
              label: "Sep/03"
            },
            {
              label: "Oct"
            },
            {
              label: "Dec"
            }
          ]
        }
      ],
    }
  };
  return <ReactFC {...chartConfigs} />
}


export default ChartComponent;
