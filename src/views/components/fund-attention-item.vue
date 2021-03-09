<template>
  <div id="attention-fund-item" :style="{backgroundColor: isSelected ? 'rgba(209, 209, 210, 0.5)' : ''}">
    <div class="result-item">
      <div class="result-item-split result-item-top">
        <span>{{ fundName }}</span>
        <span>{{ fundNum }}</span>
      </div>
      <div class="result-item-split result-item-bottom">
        <span>{{ fundType }}</span>
        <div class="yield-month" :style="{backgroundColor: yieldMonth >= 0 ? '#EC4D3D' : '#65C366'}">
          <span style="color: #fff">{{ yieldMonth }}</span>
        </div>
      </div>
    </div>
    <Divider :style="{background: (isSelected || isPrev) ? '#D1D1D2' : ''}" class="marL15" />
  </div>
</template>

<script>
export default {
  name: 'FundSearchResultItem',
  components: {},
  props: {
    selectedIndex: {
      type: Number,
      default: -1
    },
    currentIndex: {
      type: Number,
      default: -1
    },
    fundNum: {
      type: String,
      default: ''
    },
    fundCode: {
      type: String,
      default: ''
    },
    fundName: {
      type: String,
      default: ''
    },
    fundType: {
      type: String,
      default: ''
    },
    yieldMonth: {
      type: Number,
      default: 0
    },
  },
  data() {
    return {}
  },
  computed: {
    isSelected() {
      return this.selectedIndex === this.currentIndex
    },
    isPrev() {
      return this.selectedIndex - 1 === this.currentIndex
    }
  },
  watch: {},
  mounted() {
  },
  created() {
  },
  methods: {}
}
</script>

<style lang="less">
#attention-fund-item {
  .result-item {
    height: 64px;
    display: flex;
    flex-direction: column;
    padding: 10px 0;

    &-split {
      flex: 1;
      display: flex;
      align-items: center;
      color: #000;
      font-weight: 500;
      font-size: 12px;
      justify-content: space-between;
      padding: 0 16px;
    }

    &-top {
      color: #000;
      font-weight: bold;
      font-size: 14px;
    }

    &-bottom {
      color: #8E8E93;
    }

    .yield-month {
      width: 60px;
      border-radius: 5px;
      text-align: right;
      padding-right: 5px;
      font-weight: bold;
    }
  }
}
</style>
