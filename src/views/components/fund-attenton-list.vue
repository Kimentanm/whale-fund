<template>
  <div class="fund-list">
    <fund-attention-item
      v-for="(item, index) in data"
      :key="index"
      :fund-num="item.fundNum"
      :fund-type="item.fundType"
      :fund-name="item.fundName"
      :selected-index="fundIndex"
      :slot-props="item"
      :current-index="index"
      @click.native="selectFund(item, index)"
    />
  </div>
</template>

<script>
import FundAttentionItem from '@/views/components/fund-attention-item';
import { mapMutations } from 'vuex';

export default {
  name: 'FundList',
  components: {
    FundAttentionItem
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    fundIndex: {
      type: Number,
      default: -1
    }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  mounted() {
  },
  async created() {
  },
  methods: {
    ...mapMutations([
      'setSelectedFund',
      'setSelectedFundNum'
    ]),
    selectFund(fund, index) {
      this.$emit('selectChange', index)
      this.setSelectedFund(fund)
      this.setSelectedFundNum(fund.fundNum)
    }
  }
}
</script>

<style lang="less">
.fund-list {

  .virtual-list {
    height: 100%;
  }
}
</style>
