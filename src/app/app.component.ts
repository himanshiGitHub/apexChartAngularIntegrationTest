import { Component, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexYAxis,
  ApexAnnotations,
  ApexLegend,
  ApexFill,
  ApexTooltip,
  ApexPlotOptions,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  dataLabels: ApexDataLabels;
  // grid: ApexGrid;
  stroke: ApexStroke;
  // title: ApexTitleSubtitle;
  colors: any;
  // annotations: ApexAnnotations;
  // labels: string[];
  legend: ApexLegend;
  // fill: ApexFill;
  tooltip: ApexTooltip;
  plotOptions: ApexPlotOptions;
  // responsive: ApexResponsive[];
  // markers: ApexMarkers;
  // noData: ApexNoData;
  // forecastDataPoints: ApexForecastDataPoints;
  // states: ApexStates;
  // subtitle: ApexTitleSubtitle;
  // theme: ApexTheme;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'apexChartAngularIntegrationTest';

  @ViewChild('chart') chart!: ChartComponent;
  // public chartOptions  = {};
  public chartOptions: ChartOptions = {
    chart: {
      height: 350,
      type: 'line',
      stacked: false,
    },
    dataLabels: {
      enabled: false,
    },
    colors: ['#FF1654', '#247BA0', '#FFA500'],
    series: [
      {
        name: 'Series A',
        data: [
          1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6, 1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8,
          4.6,
        ],
      },
      {
        name: 'Series B',
        data: [10, 19, 27, 32, 40, 49, 41, 18, 20, 29, 37, 36, 44, 45, 50, 58],
      },
      {
        name: 'Series C',
        data: [20, 29, 37, 36, 44, 45, 50, 58, 10, 19, 27, 32, 40, 49, 41, 18],
      },
    ],
    stroke: {
      width: [4, 4],
      curve: 'smooth',
    },
    plotOptions: {
      bar: {
        columnWidth: '20%',
      },
    },
    xaxis: {
      categories: [
        2000, 2001, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012,
        2013, 2014, 2015, 2016,
      ],
    },
    yaxis: [
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#FF1654',
        },
        labels: {
          style: {
            colors: '#FF1654',
          },
        },
        title: {
          text: 'Series A',
          style: {
            color: '#FF1654',
          },
        },
      },
      {
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#247BA0',
        },
        labels: {
          style: {
            colors: '#247BA0',
          },
        },
        title: {
          text: 'Series B &  Series C',
          style: {
            color: '#247BA0',
          },
        },
      },
    ],
    tooltip: {
      shared: false,
      intersect: true,
      x: {
        show: false,
      },
    },
    legend: {
      horizontalAlign: 'left',
      offsetX: 40,
    },
  };
  constructor() {}
}
