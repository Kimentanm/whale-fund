<template>
  <transition name="fade">
    <div v-if="show" id="success-modal">
      <Icon size="70" type="md-checkmark" />
      <p>已添加到关注列表</p>
    </div>
  </transition>
</template>

<script>
import { Icon } from 'view-design'
export default {
  name: 'SuccessModal',
  components: {
    Icon
  },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      show: this.value
    }
  },
  computed: {},
  watch: {
    value(val) {
      this.show = val
    },
    show(val) {
      this.$emit('input', val)
    }
  },
  mounted() {
  },
  created() {
  },
  methods: {}
}
</script>

<style lang="less">
#success-modal {
  height: 234px;
  width: 294px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 998;
  background: hsla(0, 0%, 92%, 0.75);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  color: #797777;

  p {
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
