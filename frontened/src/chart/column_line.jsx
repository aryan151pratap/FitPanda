import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const ColumnChartCard = ({ series }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      colors: ["#1A56DB", "#F05252", "#8b5cf6", "#31C48D"],
      series: series,
      chart: {
        type: "bar",
        height: 320,
        fontFamily: "Inter, sans-serif",
        toolbar: { show: true },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "50%",
          borderRadiusApplication: "end",
          borderRadius: 8,
        },
      },
      tooltip: {
        shared: true,
        intersect: false,
        style: {
          fontFamily: "Inter, sans-serif",
        },
      },
      states: {
        hover: {
          filter: { type: "darken", value: 1 },
        },
      },
      stroke: {
        show: true,
        width: 0,
        colors: ["transparent"],
      },
      grid: {
        show: true,
        strokeDashArray: 4,
        padding: { left: 2, right: 2, top: -14 },
      },
      dataLabels: { enabled: false },
      legend: { show: true },
      xaxis: {
        floating: false,
        labels: {
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
          },
        },
        axisBorder: { show: true },
        axisTicks: { show: true },
      },
      yaxis: { show: true },
      fill: { opacity: 1 },
    };

    if (chartRef.current) {
      const chart = new ApexCharts(chartRef.current, options);
      chart.render();
      return () => chart.destroy();
    }
  }, [series]);

  return <div className="w-full"><div ref={chartRef} id="column-chart" /></div>;
};

export default ColumnChartCard;