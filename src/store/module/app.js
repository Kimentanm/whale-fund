import { setFundAttentionList, getFundAttentionList } from '@/libs/fundHelper'
export default {
  state: {
    selectedFundNum: '',
    fundAttentionList: [],
    currentFundAttentionList: []
  },
  mutations: {
    addAttention(state, fundNum) {
      setFundAttentionList(fundNum)
      state.fundAttentionList.push(fundNum)
      state.currentFundAttentionList.push(fundNum)
    },
    setSelectedFundNum(state, fundNum) {
      state.selectedFundNum = fundNum
    },
    // 只能这样初始化fundAttentionList，直接写在state中会导致很卡，不知道为什么
    initFundAttentionList(state) {
      state.fundAttentionList = getFundAttentionList()
    }
  }
}
