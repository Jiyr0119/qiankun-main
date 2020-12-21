<template>
  <div class="search-container">
    <el-form :inline="true" :model="form" class="form-inline" size="small">
      <template v-for="(val, name) in searchConfig">
        <el-form-item :key="name" :label="val.label">
          <el-input
            v-if="val.type === 'input'"
            v-model="form[name]"
            :placeholder="val.placeholder || '请输入' + val.label"
          />
          <el-select
            v-if="val.type === 'select'"
            v-model="form[name]"
            :placeholder="val.placeholder || '请选择' + val.label"
          >
            <el-option
              v-for="item in val.options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
      </template>
      <el-form-item>
        <el-button
          type="primary"
          icon="el-icon-search"
          @click="onSubmit"
        >查询</el-button>
        <el-button icon="el-icon-refresh" @click="onReset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    searchConfig: {
      required: true,
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      form: {}
    }
  },
  watch: {
    searchConfig: {
      immediate: true,
      deep: true,
      handler(newVal) {
        if (!newVal) return
        const keys = Object.keys(newVal)
        if (!(Array.isArray(keys) && keys.length > 0)) return
        keys.forEach(val => {
          const defaultVal = this.searchConfig[val].defaultValue
          this.$set(this.form, val, defaultVal === undefined ? '' : defaultVal)
        })
        this.defaultConfig = JSON.parse(JSON.stringify(this.form))
      }
    }
  },

  methods: {
    onSubmit() {
      this.$emit('onSubmit', this.form)
      console.log('submit!')
    },
    onReset() {
      this.form = Object.assign({}, this.defaultConfig)
      this.$emit('onSubmit', { type: 'reset', ...this.defaultConfig })
    }
  }
}
</script>

<style scoped lang="scss">
.form-inline {
  margin-top: 22px;
}
</style>
