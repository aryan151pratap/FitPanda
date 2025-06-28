import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const DoughnutChart = ({ series = [47, 23, 30], labels = ['Tailwind CSS', 'Preline UI', 'Others'] }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const mode = document.documentElement.classList.contains('dark') ? 'dark' : 'light';

    const options = {
      chart: {
        height: 230,
        width: 230,
        type: 'donut',
        zoom: { enabled: false },
      },
      plotOptions: {
        pie: {
          donut: { size: '76%' }
        }
      },
      series: series,
      labels: labels,
      legend: { show: false },
      dataLabels: { enabled: false },
      stroke: {
        width: 5,
        colors: [mode === 'dark' ? 'rgb(38,38,38)' : 'rgb(255,255,255)']
      },
      grid: {
        padding: { top: -12, bottom: -11, left: -12, right: -12 }
      },
      states: {
        hover: {
          filter: { type: 'none' }
        }
      },
      tooltip: {
        enabled: true,
        custom: function ({ series, seriesIndex }) {
          const label = labels[seriesIndex] || 'Unknown';
          const value = series[seriesIndex];
          return `<div class="text-sm p-2">${label}: <strong>${value}</strong></div>`;
        }
      },
      colors: mode === 'dark'
        ? ['#3b82f6', '#22d3ee', '#404040']
        : ['#3b82f6', '#22d3ee', '#e5e7eb']
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => chart.destroy();
  }, [series, labels]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div ref={chartRef} id="hs-doughnut-chart" />

      <div className="flex justify-center sm:justify-end items-center gap-x-4 mt-3 sm:mt-6">
        {labels.map((label, index) => {
          const colorClass = [
            'bg-blue-600',
            'bg-cyan-500',
            'bg-gray-300 dark:bg-neutral-700'
          ][index] || 'bg-gray-400';

          return (
            <div key={index} className="inline-flex items-center">
              <span className={`size-2.5 inline-block ${colorClass} rounded-sm me-2`}></span>
              <span className="text-[13px] text-gray-600 dark:text-neutral-400">
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DoughnutChart;
