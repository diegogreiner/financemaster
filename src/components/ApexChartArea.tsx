'use client'
import ApexChart from "react-apexcharts";

export default function ApexChartArea() {

  const options = {
    chart: {
      type: 'area' as const,
      zoom: {
        enabled: false
      },
      selection: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    xaxis: {
      type: 'datetime' as const,
      tooltip: {
        enabled: false,
      },
      labels: {
        datetimeUTC: false,
        format: 'dd MMM yyyy',
      }
    },
    yaxis: {
      type: 'numeric' as const,
      tooltip: {
        enabled: false,
      },
    },
    colors: ['#00b175'],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 0.2,
        opacityFrom: 0.7,
        opacityTo: 0.5,
      },
    },
    grid: {
      show: true,
      borderColor: '#27272a',
    },
    stroke: {
      width: 6,
    },
    markers: {
      hover: {
        size: 5,
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      style: {
        fontSize: '12px',
      },
      custom: ({ series, seriesIndex, dataPointIndex, w }: any) => {
        const hour = new Date(w.globals.initialSeries[0].data[dataPointIndex].x).getHours().toLocaleString('pt-BR', { minimumIntegerDigits: 2})
        const minute = new Date(w.globals.initialSeries[0].data[dataPointIndex].x).getMinutes().toLocaleString('pt-BR', { minimumIntegerDigits: 2})
        const value = series[seriesIndex][dataPointIndex].toFixed(2).replace('.', ',')

        return `
          <div style="background: #27272a; color: #fff; padding: 2px 5px; display: flex; flex-direction: column;">
            <span>Horário: ${hour}:${minute}</span>
            <span>${value} Moeda</span>
          </div>
        `
      }
    },  
  }

  const series = [{
    data: [{
      x: new Date('2023-01-29'),
      y: 75
    },
    {
      x: new Date('2023-04-29'),
      y: 77
    },
    {
      x: new Date('2023-06-29'),
      y: 76
    }, {
      x: new Date('2023-09-29'),
      y: 78
    },
    {
      x: new Date('2023-11-29'),
      y: 82
    },
    {
      x: new Date('2023-12-29'),
      y: 81
    },
    ]  
  }]

  return (
    <>
      {typeof window !== "undefined" && (
        <ApexChart
          options={options}
          series={series}
          type="area"
          height={"90%"}
        />
      )}
    </>
  )
}
