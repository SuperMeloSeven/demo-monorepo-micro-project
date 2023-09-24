import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'vue-app', // 必须与微应用注册名字相同
    entry: '//localhost:9999', // 入口路径，开发时为微应用所启本地服务，上线时为微应用线上路径
    container: '#container', // 微应用挂载的节点
    activeRule: '/micro-vue',// 当访问路由为 /micro-vue 时加载微应用
    props:{
      msg: "我是第一个微应用" // 主应用向微应用传递参数
   }
  },
  {
  name: 'react-app',
  entry: '//localhost:9000',
  container: '#container', // 微应用挂载的节点
  activeRule: '/micro-react',
  },
]);

start({
  prefetch: 'all', // 预加载
  sandbox: {
  experimentalStyleIsolation: true, //   开启沙箱模式,实验性方案
  },
});