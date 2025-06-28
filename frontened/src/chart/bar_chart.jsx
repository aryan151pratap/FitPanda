import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const Bar_Chart = ({ series }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartConfig = {
      series: series,
      chart: {
        type: "bar",
        height: 270,
        toolbar: {
          show: true,
        },
      },
      title: {
        show: "",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#020617"],
      plotOptions: {
        bar: {
          columnWidth: "50%",
          borderRadius: 2,
        },
      },
      xaxis: {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
        },
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        // categories: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
      },
      yaxis: {
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#dddddd",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 0,
          right: 10,
          left: 10,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "dark",
      },
    };

    const chart = new ApexCharts(chartRef.current, chartConfig);
    chart.render();

    return () => chart.destroy();
  }, [series]);

  return (
    <div className="relative flex flex-col rounded-xl text-gray-700">
     
      <div className="pt-10 px-2 pb-0">
        <div ref={chartRef} id="bar-chart" />
      </div>
    </div>
  );
};

export default Bar_Chart;
