<template>
  <div id="yield-chart" ref="dom"></div>
</template>

<script>
import * as echarts from 'echarts'
import dayjs from 'dayjs'

const bgColor = '#fff';
const color = [
  '#0090FF',
  '#36CE9E',
  '#FFC005',
  '#FF515A',
  '#8B5CFF',
  '#00CA69'
];

const hexToRgba = (hex, opacity) => {
  let rgbaColor = '';
  const reg = /^#[\da-f]{6}$/i;
  if (reg.test(hex)) {
    rgbaColor = `rgba(${parseInt('0x' + hex.slice(1, 3))},${parseInt(
      '0x' + hex.slice(3, 5)
    )},${parseInt('0x' + hex.slice(5, 7))},${opacity})`;
  }
  return rgbaColor;
}

const option = {
  backgroundColor: bgColor,
  color: color,
  legend: {
    show: true
  },
  tooltip: {
    trigger: 'axis',
    formatter: function(params) {
      let html = `<div style="font-size: 16px;color: #000;font-weight: bold">${params[0].axisValue}</div>`;
      params.forEach(v => {
        html += `<div style="color: #666;font-size: 14px;line-height: 24px">
                <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${color[v.componentIndex]};"></span>
                ${v.seriesName}
                <span style="color:${color[v.componentIndex]};font-weight:700;font-size: 14px">${v.value}%</span>`;
      })
      return html
    },
    extraCssText: 'background: #fff; border-radius: 0;box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);color: #333;',
    axisPointer: {
      type: 'shadow',
      shadowStyle: {
        color: '#ffffff',
        shadowColor: 'rgba(225,225,225,1)',
        shadowBlur: 5
      }
    }
  },
  grid: {
    left: 32,
    right: 30,
    bottom: 30
  },
  // dataZoom: [
  //   {
  //     show: true,
  //     realtime: true,
  //     start: 0,
  //     end: 100
  //   },
  //   {
  //     type: 'inside',
  //     realtime: true,
  //     start: 0,
  //     end: 100
  //   }
  // ],
  xAxis: [{
    type: 'category',
    boundaryGap: false,
    axisLabel: {
      formatter: '{value}',
      fontWeight: 'bold',
      fontSize: 14,
      color: '#000'
    },
    axisLine: {
      lineStyle: {
        color: '#D9D9D9'
      }
    },
    data: []
  }],
  yAxis: [
    {
      type: 'value',
      position: 'right',
      axisLabel: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#000'
      },
      nameTextStyle: {
        color: '#666',
        fontSize: 12,
        lineHeight: 40
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: '#E9E9E9'
        }
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      }
    }],
  series: [
    {
      name: '',
      type: 'line',
      smooth: true,
      symbolSize: 8,
      zlevel: 3,
      lineStyle: {
        color: color[0],
        shadowBlur: 3,
        shadowColor: hexToRgba(color[0], 0.5),
        shadowOffsetY: 8
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(
          0,
          0,
          0,
          1,
          [{
            offset: 0,
            color: hexToRgba(color[0], 0.3)
          },
          {
            offset: 1,
            color: hexToRgba(color[0], 0.1)
          }
          ],
          false
        ),
        shadowColor: hexToRgba(color[0], 0.1),
        shadowBlur: 10
      },
      data: []
    },
    {
      name: '',
      type: 'line',
      smooth: true,
      symbolSize: 8,
      zlevel: 3,
      lineStyle: {
        color: color[1],
        shadowBlur: 3,
        shadowColor: hexToRgba(color[1], 0.5),
        shadowOffsetY: 8
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(
          0,
          0,
          0,
          1,
          [{
            offset: 0,
            color: hexToRgba(color[1], 0.3)
          },
          {
            offset: 1,
            color: hexToRgba(color[1], 0.1)
          }
          ],
          false
        ),
        shadowColor: hexToRgba(color[1], 0.1),
        shadowBlur: 10
      },
      data: []
    },
    {
      name: '',
      type: 'line',
      smooth: false,
      // showSymbol: false,
      symbolSize: 8,
      zlevel: 3,
      lineStyle: {
        color: color[2],
        shadowBlur: 3,
        shadowColor: hexToRgba(color[1], 0.5),
        shadowOffsetY: 8
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(
          0,
          0,
          0,
          1,
          [{
            offset: 0,
            color: hexToRgba(color[1], 0.3)
          },
          {
            offset: 1,
            color: hexToRgba(color[1], 0.1)
          }
          ],
          false
        ),
        shadowColor: hexToRgba(color[1], 0.1),
        shadowBlur: 10
      },
      data: []
    }
  ]
};

export default {
  name: 'YieldChart',
  components: {},
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      chart: undefined,
      fundData: [],
      avgData: [],
      hushen300Data: [],
      xData: []
    }
  },
  computed: {},
  watch: {},
  mounted() {
    this.chart = echarts.init(this.$refs.dom)
    this.chart.setOption(option)
  },
  created() {
    this.handleOption()
  },
  beforeDestroy() {
  },
  methods: {
    reload() {
      if (this.chart) {
        this.handleOption()
        this.chart.setOption(option)
      }
    },
    handleOption() {
      this.xData = this.data[0].data.map(item => dayjs(new Date(item[0])).format('YY/MM/DD'))
      this.fundData = this.data[0].data.map(item => item[1])
      this.avgData = this.data[1].data.map(item => item[1])
      this.hushen300Data = this.data[2].data.map(item => item[1])
      option.xAxis[0].data = this.xData
      option.series[0].name = this.data[0].name
      option.series[0].data = this.fundData
      option.series[1].name = this.data[1].name
      option.series[1].data = this.avgData
      option.series[2].name = this.data[2].name
      option.series[2].data = this.hushen300Data
    },
  }
}
</script>

<style lang="less">
#yield-chart {
  height: 100%;
  width: 100%;
}
</style>
