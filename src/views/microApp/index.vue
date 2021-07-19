<template>
  <div id="micro-app" ref="microApp">容器</div>
</template>

<script>
// import start from '../../qiankun'
import {
  // start,
  loadMicroApp
} from 'qiankun'
export default {
  components: {},
  data() {
    return {
      subApp: null
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    if (!window.qiankunStarted) {
      this.subApp = loadMicroApp({
        name: 'microApp-A',
        entry: '//localhost:9628/microApp/about/',
        // container: this.$refs.microApp
        container: this.$refs.microApp,
        props: {
          lalal: 'test'
        }
      })
    }
  },
  destroyed() {
    this.subApp.unmount()
  },
  methods: {}
}
</script>
<style scoped lang="scss">
/* @import url(); 引入公共css类 */
</style>
