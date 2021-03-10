<template>
  <div class="fund-list">
    <virtual-list
      v-slot="slotProps"
      class="virtual-list"
      :list-data="data"
      :estimated-item-size="30"
    >
      <fund-search-result-item
        :fund-num="slotProps.item[0]"
        :fund-code="slotProps.item[1]"
        :fund-name="slotProps.item[2]"
        :fund-type="slotProps.item[3]"
        :selected-index="fundIndex"
        :slot-props="slotProps"
        @click.native="selectFund(slotProps)"
      />
    </virtual-list>
  </div>
</template>

<script>
import FundSearchResultItem from '@/views/components/fund-search-result-item';
import VirtualList from 'vue-virtual-listview';
import { mapMutations } from 'vuex';

export default {
  name: 'FundList',
  components: {
    FundSearchResultItem,
    VirtualList,
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
  created() {},
  methods: {
    ...mapMutations([
      'setSelectedFundNum',
      'setSelectedFund'
    ]),
    selectFund(slotProps) {
      this.$emit('selectChange', slotProps.row)
      this.setSelectedFundNum(slotProps.item[0])
      this.setSelectedFund(slotProps.item)
    },
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
