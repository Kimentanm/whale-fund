<template>
  <div id="fund-search-result-item" :style="{backgroundColor: isSelected ? '#D1D1D2' : ''}">
    <div class="result-item">
      <div class="result-item-split result-item-top">
        <span>{{ fundNum }}</span>
        <span>{{ fundCode }}</span>
      </div>
      <div class="result-item-split result-item-bottom">
        <span>{{ fundName }}</span>
        <span style="color: #2d8cf0">{{ fundType }}</span>
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
    currentSelected: {
      type: Number,
      default: -1
    },
    slotProps: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      fundNum: this.slotProps.item[0],
      fundCode: this.slotProps.item[1],
      fundName: this.slotProps.item[2],
      fundType: this.slotProps.item[3],
    }
  },
  computed: {
    isSelected() {
      return this.currentSelected === this.slotProps.row
    },
    isPrev() {
      return this.currentSelected - 1 === this.slotProps.row
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
#fund-search-result-item {
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
      font-size: 12px;
    }

    &-bottom {
      color: #8E8E93;
    }
  }
}
</style>
