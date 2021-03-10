import { setFundAttentionList, getFundAttentionList } from '@/libs/fundHelper'
export default {
  state: {
    selectedFundNum: '',
    selectedFund: [],
    fundAttentionList: getFundAttentionList(),
    currentFundAttentionList: []
  },
  mutations: {
    addAttention(state, fund) {
      setFundAttentionList(fund)
      state.fundAttentionList.push(fund)
      state.currentFundAttentionList.push(fund)
    },
    setSelectedFund(state, fundData) {
      state.selectedFund = fundData
    },
    setSelectedFundNum(state, fundNum) {
      state.selectedFundNum = fundNum
    }
  }
}
