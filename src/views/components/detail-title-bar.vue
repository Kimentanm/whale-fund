<template>
  <div id="detail-title-bar">
    <Button v-if="showAddAttentionBtn" class="add-attention-btn" type="primary" @click="addAttention(selectedFundNum)">添加到关注列表</Button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'DetailTitleBar',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {
    showAddAttentionBtn() {
      return this.selectedFundNum && this.fundAttentionList.indexOf(this.selectedFundNum) === -1
    },
    selectedFundNum() {
      return this.$store.state.app.selectedFundNum
    },
    fundAttentionList() {
      return this.$store.state.app.fundAttentionList
    },
  },
  watch: {},
  mounted() {
  },
  methods: {
    ...mapMutations([
      'addAttention'
    ]),
  }
}
</script>

<style lang="less">
#detail-title-bar {
  height: 52px;
  width: 100%;
  -webkit-app-region: drag;
  background-color: #EAEAEB;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  .add-attention-btn {
    margin-right: 10px;
    align-self: center;
  }
}
</style>
