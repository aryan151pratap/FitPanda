import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const DataLabelsChart = ({ series, unit }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      dataLabels: {
        enabled: true,
        style: {
          cssClass: 'text-xs text-white font-medium',
        },
      },
      grid: {
        show: true,
        strokeDashArray: 4,
        padding: {
          left: 18,
          right: 5,
          top: 0,
        },
      },
      series: series,
      chart: {
        height: '100%',
        maxWidth: '100%',
        type: 'area',
        fontFamily: 'Inter, sans-serif',
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: true,
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: true,
        },
      },
      legend: {
        show: true,
      },
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.55,
          opacityTo: 0.11,
          shade: '#1C64F2',
          gradientToColors: ['#1C64F2'],
        },
      },
      stroke: {
        width: 1,
      },
      xaxis: {
        
        labels: {
          show: true,
        },
        axisBorder: {
          show: true,
        },
        axisTicks: {
          show: true,
        },
      },
      yaxis: {
        show: true,
        labels: {
          formatter: function (value) {
            return `${value + unit}`;
          },
        },
      },
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => chart.destroy();
  }, [series]);

  return(
    <>
      <div ref={chartRef} id="data-labels-chart" className="w-full h-[300px]" />      
    </>
  );
};

export default DataLabelsChart;
