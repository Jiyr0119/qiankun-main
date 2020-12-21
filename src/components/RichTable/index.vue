<template>
  <div class="rt-wrapper">
    <div class="rt-header">
      <SearchWrapper :search-config="searchConfig" @onSubmit="handleSearch" />
      <slot name="page-operations" />
    </div>
    <div class="rt-content">
      <!-- 表格组件 -->
      <el-table :data="list" style="width: 100%" border>
        <template v-for="(item, index) in tableConfig">
          <el-table-column
            :key="index"
            :width="item.width"
            align="center"
            :prop="item.prop"
            :label="item.label"
            :formatter="item.formatter"
          />
        </template>
        <el-table-column align="center" label="操作">
          <template slot-scope="scope">
            <template v-for="(item,index) in btnsGroup">
              <!-- 删除按钮 -->
              <el-popconfirm
                v-if="btnsGroup[index].type==='delete'"
                :key="index"
                icon="el-icon-info"
                icon-color="red"
                :title="item.deleteTip?item.deleteTip:'您确定要删除本条数据吗？'"
                @onConfirm="handleClick(item,scope.row)"
              >
                <el-button
                  slot="reference"
                  style="marginLeft:10px;color:red;"
                  type="text"
                  size="mini"
                >{{ item.label }}</el-button>
              </el-popconfirm>
              <!-- 常规按钮 -->
              <el-button
                v-else
                :key="index"
                size="mini"
                type="text"
                @click="handleClick(item,scope.row)"
              >{{ item.label }}</el-button>
            </template>

          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="rt-footer">
      <el-pagination
        background
        layout="prev, pager, next,jumper"
        :total="1000"
        :page-size="pageSize"
        @current-change="handlePageChange"
      />
    </div>

  </div>
</template>

<script>
import SearchWrapper from '../SearchWrapper'
export default {
  components: {

    SearchWrapper
  },
  props: {
    // 搜索条件表单配置
    searchConfig: {
      type: Object,
      default() {
        return {}
      }
    },
    // 表格列配置
    tableConfig: {
      type: Array,
      default() {
        return []
      }
    },
    // 表格行操作按钮组
    btnsGroup: {
      type: Array,
      default() {
        return []
      }
    },

    // 列表数据异步请求api
    getList: {
      type: Function,
      required: true
    },

    // api 请求参数
    queryParams: {
      type: Object,
      default() {
        return {}
      }
    },
    pageSize: {
      type: Number,
      default: 10
    },
    // 异步请求完毕后回调函数
    cb: {
      type: Function,
      default: function(res) {
        return res
      }
    }
  },
  data() {
    return {
      // 搜索条件记录
      searchParams: {},
      // 表格数据
      list: [],
      // 当前页码
      currPage: 1
    }
  },
  async created() {
    this.queryList()
  },
  methods: {
    // 搜索
    handleSearch(searchParams) {
      this.page_num = 1
      this.searchParams = searchParams
    },
    // 分页
    handlePageChange(page) {
      this.currPage = page
      this.queryList()
    },

    // 行按钮点击事件
    handleClick(item, row) {
      this.$emit('tap', {
        btn: item,
        rowInfo: row
      })
    },

    // 数据列表请求
    async queryList() {
      try {
        if (!this.getList) return
        const defaultParams = { pageNum: this.currPage, pageSize: this.pageSize }
        const response = await this.getList({ ...defaultParams, ...this.queryParams, ...this.searchParams })
        const result = this.cb(response)
        if (result) {
          this.list = result.data.items
          return
        }
        this.list = response.data.items
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/styles/mixin.scss";
.rt-header{
   @include flex(space-between,center);
}
.rt-footer{
    @include flex(flex-end,center);
    margin:30px 0;
}
</style>
