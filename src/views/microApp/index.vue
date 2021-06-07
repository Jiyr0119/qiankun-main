<template>
  <div id="micro-app" ref="microApp">容器</div>
</template>

<script>
// import start from '../../qiankun'
import {
  // start,
  loadMicroApp } from 'qiankun'
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
    // loadMicroApp({
    //   name: 'microApp-A',
    //   entry: '//localhost:9529',
    //   container: '#micro-app' },)

    console.log(
      '--------------------节点monunted-----------------',
      window.qiankunStarted,
      document.querySelector('#micro-app'),
      this.$refs.microApp
    )
    // start()
    // if (!window.qiankunStarted) {
    //   window.qiankunStarted = true
    // start()
    // }
    this.subApp = loadMicroApp({
      name: 'microApp-A',
      entry: '//localhost:9628/microApp/',
      // container: this.$refs.microApp
      container: this.$refs.microApp
    })
    // this.subApp.mount()
  },
  destroyed() {
    // this.subApp.unmount()
  },
  methods: {}
}
</script>
<style scoped lang="scss">
/* @import url(); 引入公共css类 */
</style>
