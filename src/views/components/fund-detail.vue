<template>
  <div id="fund-detail">
    <div class="fund-detail-container">
      <div class="title">
        <div class="left">
          <span class="fund-name">{{ fundDetail.fundName }}</span>
          <span class="fund-code">{{ fundDetail.fundNum }}</span>
        </div>
        <div class="right">
          <span class="net-worth">26.05</span>
          <span class="net-worth-change">+0.25</span>
        </div>
      </div>
      <div class="fund-chart">
        <yield-chart
          v-if="fundDetail.yieldData"
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
  props: {
    fundNum: {
      type: String,
      default: () => ''
    }
  },
  data() {
    return {
      fundDetail: {},
      showLoading: false
    }
  },
  computed: {},
  watch: {
    fundNum(val) {
      this.getFundDetailByFundCode()
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
      this.fundDetail = await getFundDetailByFundCode(this.fundNum)
      console.log(this.fundDetail);
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

        .net-worth {
          font-size: 15px;
          margin-right: 10px;
          color: #000;
        }

        .net-worth-change {
          font-size: 12px;
          margin-right: 20px;
          color: #EC4D3D;
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
