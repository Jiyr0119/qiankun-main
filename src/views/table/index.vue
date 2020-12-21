<template>
  <div class="app-container">
    <rich-table :search-config="searchConfig" :table-config="tableConfig" :get-list="getList" :btns-group="btnsGroup" @tap="handleTap">
      <div slot="page-operations">
        <el-button type="primary">新增</el-button>
      </div>
    </rich-table>
  </div>
</template>

<script>
import { getList } from '@/api/table'
import { searchConfig, initTableConfig, btnsGroup } from './data'
import RichTable from '@/components/RichTable'
export default {
  components: {
    RichTable
  },
  data() {
    return {
      // 搜索条件表单配置
      searchConfig,
      // 表格列配置
      tableConfig: initTableConfig(),
      // 异步数据请求api
      getList,
      // 表格行操作表格
      btnsGroup
    }
  },
  created() {
  },
  methods: {
    // 按钮点击事件
    handleTap(event) {
      const { btn, rowInfo } = event
      console.log(btn, rowInfo)
    }
  }
}
</script>
