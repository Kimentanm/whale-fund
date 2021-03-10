<template>
  <div id="detail-title-bar">
    <Button v-if="showAddAttentionBtn" class="add-attention-btn" type="primary" @click="addAttentionToList()">添加到关注列表</Button>

    <success-modal v-model="showSuccessModal" />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import SuccessModal from '@/views/shared/successModal';
export default {
  name: 'DetailTitleBar',
  components: { SuccessModal },
  props: {},
  data() {
    return {
      showSuccessModal: false
    }
  },
  computed: {
    showAddAttentionBtn() {
      return this.selectedFundNum && this.fundAttentionList.findIndex(item => item[0] === this.selectedFundNum) === -1
    },
    selectedFundNum() {
      return this.$store.state.app.selectedFundNum
    },
    selectedFund() {
      return this.$store.state.app.selectedFund
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
    addAttentionToList() {
      this.showSuccessModal = true;
      this.addAttention(this.selectedFund)
      setTimeout(() => {
        this.showSuccessModal = false;
      }, 2000)
    }
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
