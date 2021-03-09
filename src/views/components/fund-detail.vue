<template>
  <div id="fund-detail">
    <div class="fund-detail-container">
      <div class="title">
        <div class="left">
          <span class="fund-name">{{ fundDetail.fundName }}</span>
          <span class="fund-code">{{ fundDetail.fundNum }}</span>
        </div>
        <div class="right">
          <div class="yield-month">
            <span class="yield-month-value" :style="{color: isYieldMonthPlus ? '#EC4D3D' : '#6DC66E'}">{{ fundDetail.yieldMonth }}%</span>
            <span class="yield-month-tip">近一月收益率</span>
          </div>
        </div>
      </div>
      <div class="fund-chart">
        <yield-chart
          v-if="fundDetail.yieldData"
          ref="yieldChart"
          :data="fundDetail.yieldData"
        ></yield-chart>
      </div>
    </div>
    <spinner v-if="showLoading"></spinner>
  </div>
</template>

<script>
import { getFundDetailByFundCode } from '@/libs/fundHelper';
import Spinner from '@/views/components/spinner';
import YieldChart from '@/views/components/yield-chart';

export default {
  name: 'FundDetail',
  components: { YieldChart, Spinner },
  props: {},
  data() {
    return {
      fundDetail: {},
      showLoading: false
    }
  },
  computed: {
    isYieldMonthPlus() {
      return (this.fundDetail.yieldMonth || 0) >= 0
    },
    selectedFundNum() {
      return this.$store.state.app.selectedFundNum
    }
  },
  watch: {
    async selectedFundNum() {
      await this.getFundDetailByFundCode()
      this.$refs.yieldChart.reload()
    }
  },
  mounted() {
  },
  async created() {
    await this.getFundDetailByFundCode()
  },
  methods: {
    async getFundDetailByFundCode() {
      this.showLoading = true;
      this.fundDetail = await getFundDetailByFundCode(this.selectedFundNum)
      this.showLoading = false;
    }
  }
}
</script>

<style lang="less">
#fund-detail {
  height: 100%;
  width: 100%;
  position: relative;

  .fund-detail-container {
    width: 680px;
    height: 100%;
    margin: 0 auto;

    .title {
      height: 55px;
      width: 100%;
      margin-bottom: 35px;
      position: relative;

      .left {
        position: absolute;
        left: 0;
        bottom: 0;
        font-weight: bold;

        .fund-name {
          font-size: 25px;
          color: #000;
          margin-right: 10px;
        }

        .fund-code {
          font-size: 15px;
          color: #808080;
        }
      }

      .right {
        position: absolute;
        right: 0;
        bottom: 0;
        font-weight: bold;

        .yield-month {
          height: 100%;
          display: flex;
          flex-direction: column;

          &-value {
            font-size: 15px;
          }

          &-tip {
            font-size: 12px;
            color: #808080
          }
        }
      }
    }

    .fund-chart {
      height: 300px;
      width: 100%;
    }
  }
}
</style>
