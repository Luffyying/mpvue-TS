import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
console.log('-----sdf')
export default{
  // 此处相当于原生小程序的app.json
  // config: {
  //   pages: [],
  //   window: {
  //     backgroundTextStyle: 'light',
  //     navigationBarBackgroundColor: '#fff',
  //     navigationBarTitleText: '第一个小程序',
  //     navigationBarTextStyle: 'black'
  //   }
  // }
}
