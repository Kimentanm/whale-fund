export default {
  state: {
    selectedFundNum: '',
    fundAttentionList: []
  },
  mutations: {
    addAttention(state, fundNum) {
      state.fundAttentionList.push(fundNum)
    },
    setSelectedFundNum(state, fundNum) {
      state.selectedFundNum = fundNum
    }
  }
}
