// 搜索项目配置
export const searchConfig = {
  activity_name: {
    type: 'input',
    label: '活动名称'
  },
  org_id: {
    type: 'select',
    label: '发布组织',
    options: []
  },
  activity_status: {
    type: 'select',
    label: '活动状态',
    options: [
      {
        label: '待发布',
        value: '1'
      },
      {
        label: '报名未开始',
        value: '2'
      },
      {
        label: '报名中',
        value: '3'
      },
      {
        label: '报名已结束',
        value: '4'
      },
      {
        label: '进行中',
        value: '5'
      },
      {
        label: '已结束',
        value: '6'
      },
      {
        label: '已取消',
        value: '7'
      }
    ]
  }
}

/**
 * 列表表格配置
 */
export const initTableConfig = () => [
  {
    label: '标题',
    prop: 'title'
  },
  {
    label: '活动时间',
    prop: 'display_time'
  },
  {
    label: '作者',
    prop: 'author'
  }
]

// 操作按钮组
export const btnsGroup = [
  {
    label: '启用',
    type: 'start'
  },
  {
    label: '编辑',
    type: 'edit'
  },
  {
    label: '删除',
    type: 'delete'
  }
]

