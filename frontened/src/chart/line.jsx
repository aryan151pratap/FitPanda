import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const ProfitChartCard = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      series: [
        {
          name: "Income",
          color: "#31C48D",
          data: [1420, 1620, 1820, 1420, 1650, 2120],
        },
        {
          name: "Expense",
          data: [788, 810, 866, 788, 1100, 1200],
          color: "#F05252",
        }
      ],
      chart: {
        type: "bar",
        height: 400,
        toolbar: { show: false }
      },
      plotOptions: {
        bar: {
          horizontal: true,
          columnWidth: "100%",
          borderRadius: 6,
          borderRadiusApplication: "end",
          dataLabels: { position: "top" },
        },
      },
      dataLabels: { enabled: false },
      tooltip: {
        shared: true,
        intersect: false,
        formatter: value => `$${value}`
      },
      xaxis: {
        categories: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        labels: {
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
          },
          formatter: value => `$${value}`
        },
        axisTicks: { show: false },
        axisBorder: { show: false },
      },
      yaxis: {
        labels: {
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
          }
        }
      },
      grid: {
        show: true,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: 0
        },
      },
      legend: {
        show: true,
        position: "bottom",
      },
      fill: {
        opacity: 1,
      }
    };

    if (chartRef.current) {
      const chart = new ApexCharts(chartRef.current, options);
      chart.render();
      return () => chart.destroy();
    }
  }, []);

  return (
    <div className="max-w-sm w-full">
      <div ref={chartRef} id="bar-chart" />

    </div>
  );
};

export default ProfitChartCard;
