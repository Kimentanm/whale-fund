<template>
  <div v-if="init" class="fund-list">
    <fund-attention-item
      v-for="(item, index) in data"
      :key="index"
      :fund-num="item.fundNum"
      :fund-type="item.fundType"
      :fund-name="item.fundName"
      :yield-month="item.yieldMonth"
      :selected-index="fundIndex"
      :slot-props="item"
      :current-index="index"
      @click.native="selectFund(item.fundNum, index)"
    />
  </div>
</template>

<script>
import FundAttentionItem from '@/views/components/fund-attention-item';
import { mapMutations } from 'vuex';
import { getFundDetailByFundCode } from '@/libs/fundHelper';

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
    return {
      init: false
    }
  },
  computed: {},
  watch: {},
  mounted() {
  },
  async created() {
    const promiseList = this.data.map(item => {
      return getFundDetailByFundCode(item.fundNum)
    })
    const result = await Promise.all(promiseList)
    this.data.forEach(dataItem => {
      for (let i = 0; i < result.length; i++) {
        const item = result[i]
        if (item.fundNum === dataItem.fundNum) {
          dataItem.yieldMonth = item.yieldMonth
          break
        }
      }
    })
    this.init = true
  },
  methods: {
    ...mapMutations([
      'setSelectedFundNum'
    ]),
    selectFund(fundNum, index) {
      this.$emit('selectChange', index)
      this.setSelectedFundNum(fundNum)
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
