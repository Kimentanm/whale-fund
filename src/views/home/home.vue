<template>
  <div id="home">
    <div id="left" class="fund-list" :class="focus ? 'bg-transparent' : ''" :style="{ width: detailWidth + 'px' }">
      <title-bar></title-bar>
      <div class="fund-list-search" :class="focus ? 'bg-transparent' : ''">
        <Input v-model="searchValue" clearable prefix="ios-search" placeholder="搜索" class="width-100" />
      </div>
      <div v-show="searchValue" class="fund-list-content">
        <div class="fund-list-search-result">
          <div class="fund-list-search-result-title">
            <h1>{{ searchResultTitle }}</h1>
          </div>
          <Divider />
          <virtual-list
            v-if="searchResultList.length"
            v-slot="slotProps"
            class="virtual-list"
            :list-data="searchResultList"
            :estimated-item-size="30"
          >
            <fund-search-result-item
              :fund-num="slotProps.item[0]"
              :fund-code="slotProps.item[1]"
              :fund-name="slotProps.item[2]"
              :fund-type="slotProps.item[3]"
              :current-selected="currentSelectedFund"
              :slot-props="slotProps"
              @click.native="currentSelectedFund = slotProps.row"
            />
          </virtual-list>
        </div>
      </div>
      <div class="fund-footer">
        <Divider />
        <div class="fund-footer-content">
          <img
            src="../../assets/images/develop-logo.png"
            @click="goToGithub"
          />
          <span>已闭市</span>
        </div>
      </div>
    </div>
    <div id="resize"></div>
    <div id="right">
      <detail-title-bar />
      <fund-detail v-if="currentSelectedFund !== -1" :fund-num="searchResultList[currentSelectedFund][0]"></fund-detail>
    </div>
    <p></p>
  </div>
</template>

<script>
import TitleBar from '../components/title-bar'
import DetailTitleBar from '../components/detail-title-bar'
import FundSearchResultItem from '../components/fund-search-result-item'
import FundDetail from '../components/fund-detail'
import VirtualList from 'vue-virtual-listview'
const ipcRenderer = require('electron').ipcRenderer;
import Store from 'electron-store'
const store = new Store();
import _ from 'loadsh'
import { shell } from 'electron'

export default {
  name: 'Home',
  components: {
    TitleBar,
    DetailTitleBar,
    FundSearchResultItem,
    VirtualList,
    FundDetail
  },
  data: function() {
    return {
      detailWidth: 300,
      focus: true,
      fundList: store.get('fundList'),
      searchValue: '',
      searchResultList: [],
      searchWorker: {},
      currentSelectedFund: -1
    };
  },
  computed: {
    searchResultTitle() {
      const val = this.searchValue
      // 判断是否是纯字母。
      const reg = /^\w+$/;
      // 判断是否是数字。
      const regNum = /^[0-9]+.?[0-9]*/;
      let title = ''
      if (regNum.test(val)) {
        title = '编号'
      } else if (reg.test(val)) {
        title = '代码'
      } else {
        title = '名称'
      }
      return title;
    }
  },
  watch: {
    searchValue: _.debounce(async function(val) {
      const res = await this.searchWorker.postMessage('searchFund', [val, this.fundList])
      this.searchResultList = []
      this.$nextTick(() => {
        this.searchResultList = res
        this.currentSelectedFund = -1
      })
    }, 1000)
  },
  mounted() {
    this.dragControllerDiv();
  },
  created() {
    ipcRenderer.on('onBlur', this.handleOnBlur);
    ipcRenderer.on('onFocus', this.handleOnFocus);
    this.initWorker()
  },
  beforeDestroy() {
    ipcRenderer.removeListener('onBlur', this.handleOnBlur);
    ipcRenderer.removeListener('onFocus', this.handleOnFocus);
  },
  destroyed() {
    this.searchWorker = null
  },
  methods: {
    goToGithub() {
      shell.openExternal('https://github.com/Kimentanm')
    },
    initWorker() {
      this.searchWorker = this.$worker.create([
        {
          message: 'searchFund',
          func: (val, fundList) => {
            const filterFundList = (val, flag, fundList) => {
              const result = []
              if (val) {
                fundList.forEach(fund => {
                  if (fund[flag].indexOf(val) > -1) {
                    result.push(fund)
                  }
                })
              }
              return result;
            }
            const handleSearchInput = (val, fundList) => {
              // 判断是否是纯字母。
              const reg = /^\w+$/;
              // 判断是否是数字。
              const regNum = /^[0-9]+.?[0-9]*/;
              let flag = 0
              if (regNum.test(val)) {
                flag = 0
                val = val.toUpperCase()
              } else if (reg.test(val)) {
                flag = 1
              } else {
                flag = 2
              }
              return filterFundList(val, flag, fundList)
            }
            return handleSearchInput(val, fundList)
          }
        },
      ])
    },
    handleOnBlur(result) {
      this.focus = false
    },
    handleOnFocus() {
      this.focus = true
    },
    dragControllerDiv() {
      // 保留this引用
      const data = this;
      const resize = document.getElementById('resize');
      resize.onmousedown = function(e) {
        let startX = e.clientX;
        resize.left = resize.offsetLeft;
        document.onmousemove = function(e) {
          // 计算并应用位移量
          const endX = e.clientX;
          const moveLen = endX - startX;
          startX = endX;
          let width = data.detailWidth + moveLen
          if (width <= 165) {
            width = 165
          }
          if (width >= 300) {
            width = 300
          }
          data.detailWidth = width;
        };
        document.onmouseup = function() {
          document.onmousemove = null;
          document.onmouseup = null;
        };
        return false;
      };
    }
  }
};
</script>

<style lang="less">
#home {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;

  .ivu-divider-horizontal {
    margin: unset;
    margin-bottom: -2px;
    background: #9E9E9F;
    transform: scale(1, 0.5);
  }

  .bg-transparent {
    background-color: transparent !important;
  }

  .fund-list {
    min-width: 165px;
    background-color: #EAEAEB;
    position: relative;

    &-search {
      height: 44px;
      padding: 0 11px;
      display: flex;
      align-items: center;
      background-color: #F5F5F5;

      input::-webkit-input-placeholder {
        color: #AEAEAE;
        /* placeholder字体大小 */
        font-size: 13px;
      }

      .ivu-input {
        height: 27px;
        border-radius: 6px;
        background-color: #E8E8E8;
        border: 1px solid #E8E8E8;
        font-size: 13px;
        color: black;
        font-weight: 500;
      }

      .ivu-input:focus {
        outline: 0;
        box-shadow: 0 0 0 4px #89AFE6;
      }

      .ivu-icon {
        line-height: 27px;
      }
    }

    .fund-footer {
      position: absolute;
      height: 38px;
      width: 100%;
      bottom: 0;

      &-content {
        height: calc(100% - 1px);
        display: flex;
        align-items: center;
        color: #8E8E93;
        font-weight: 500;
        font-size: 12px;
        justify-content: space-between;
        padding: 0 16px;

        img {
          cursor: pointer;
          height: 16px;
        }
      }
    }

    &-content {
      width: 100%;
      height: calc(100% - 96px);
      overflow-y: auto;
    }

    &-search-result {
      width: 100%;
      height: 100%;
      position: relative;

      .virtual-list {
        height: calc(100% - 94px);
      }

      &-title {
        height: 55px;
        display: flex;
        align-items: center;
        color: #000;
        padding-left: 16px;
      }
    }
  }
}

#left {
  height: 100%;
}

#resize {
  width: 1px;
  height: 100%;
  cursor: col-resize;
  background-color: #D7D7D7;
}

#right {
  height: 100%;
  background: #FFF;
  flex: 1;
}
</style>
