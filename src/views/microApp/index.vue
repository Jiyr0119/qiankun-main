<template>
  <div id="micro-app">容器</div>
</template>

<script>
// import start from '../../qiankun'
import { start } from 'qiankun'
export default {
  components: {},
  data() {
    return {

    }
  },
  computed: {},
  watch: {},
  created() {

  },
  mounted() {
    // loadMicroApp({
    //   name: 'microApp-A',
    //   entry: '//localhost:9529',
    //   container: '#micro-app' },)
    console.log('--------------------节点monunted-----------------', window.qiankunStarted, document.querySelector('#micro-app'))
    start()
    // if (!window.qiankunStarted) {
    //   window.qiankunStarted = true
    //   start()
    // }
  },
  methods: {

  }
}
</script>
<style scoped lang='scss'>
/* @import url(); 引入公共css类 */

</style>
