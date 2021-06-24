const apps = [
  /**
   * name: 微应用名称 - 具有唯一性
   * entry: 微应用入口 - 通过该地址加载微应用
   * container: 微应用挂载节点 - 微应用加载完成后将挂载在该节点上
   * activeRule: 微应用触发的路由规则 - 触发路由规则后将加载该微应用
   */
  {
    name: 'microApp-A',
    entry: '//localhost:9628',
    container: '#micro-app',
    // activeRule: getActiveRule('/iframeBox'),
    activeRule: '/microApp',
    loader(loading) {
      console.log('匹配', loading)
    }
  }
  // ,
  // {
  //   name: 'microApp-B',
  //   entry: '//localhost:9528/',
  //   container: '#micro-app-about',
  //   activeRule: '/iframeBox/about',
  //   loader(loading) {
  //     console.log('匹配', loading)
  //   }
  // },
  // {
  //   name: 'microApp-C',
  //   entry: '//localhost:9528/',
  //   container: '#micro-app-detail',
  //   activeRule: '/iframeBox/detail',
  //   loader(loading) {
  //     console.log('匹配', loading)
  //   }
  // }
]
export default apps
