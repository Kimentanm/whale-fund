const Store = require('electron-store');
const store = new Store();
import axios from 'axios';

export const getAllFundList = async() => {
  const res = await axios.get('http://fund.eastmoney.com/js/fundcode_search.js')
  const expression = res.data + ';return r;'
  // eslint-disable-next-line no-eval
  const result = eval('(function() {' + expression + '}())');
  store.set('fundList', result)
}

export const getFundDetailByFundCode = async(fundNum) => {
  const res = await axios.get(`http://fund.eastmoney.com/pingzhongdata/${fundNum}.js`)
  const expression = res.data + ';return { fundName: fS_name, fundNum: fS_code, yieldData: Data_grandTotal, yieldMonth: parseFloat(syl_1y)};'
  // eslint-disable-next-line no-eval
  const result = eval('(function() {' + expression + '}())');
  store.set('fundDetail', result)
  return result;
}

export const setFundAttentionList = (fundNum) => {
  const fundAttentionList = getFundAttentionList()
  if (fundAttentionList.indexOf(fundNum) === -1) {
    fundAttentionList.push(fundNum);
  }
  store.set('fundAttentionList', fundAttentionList)
}

export const getFundAttentionList = () => {
  return store.get('fundAttentionList') || [];
}
