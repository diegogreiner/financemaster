'use client'
import ApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export default function ApexChartRadialBar() {

  const options = {
    options: {
      chart: {
        height: 350,
        type: 'radialBar',
      },
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          show: true,
          name: {
            fontSize: '18px',
            color: '#fff',
            offsetY: -30,
          },
          value: {
            fontSize: '35px',
            color: '#00b175',
            fontWeight: 'bold',
            offsetY: 0,
          },
        },
        hollow: {
          size: '60%',
        },
        track: {
          show: false,
          background: 'trasparent',
        }
      },
    },
    stroke: {
      lineCap: 'round',
    },
    labels: ['Total'],
    colors: ['#00b175'],
  }

  return (
    <>
      {typeof window !== "undefined" && (
        <ApexChart
          options={options as ApexOptions}
          series={[70]}
          type="radialBar"
        />
      )}
    </>
  )
}
