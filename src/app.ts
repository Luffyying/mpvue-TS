import { Vue, Component } from 'vue-property-decorator'
import { State , Action } from 'vuex-class'
import { formatTime } from '@/utils/index'

declare module "vue/types/vue" {
  interface Vue {
    $mp: any;
  }
}

// 必须使用装饰器的方式来指定components
@Component({
  mpType: 'app', // mpvue特定
}as any)
class App extends Vue {
  @State HOME_MODULE:object;
  logs:any = []
  // @Action get_salt:()=>void;
  // @Action get_config:()=>void;
  // app hook
  async onLaunch() {
    //todo 展示本地存储能力
    const logs = (wx.getStorageSync('logs') || [])
    this.logs = logs.map(log => formatTime(new Date(log)))
    console.log('here is logs')
    console.log(this.logs)

    //todo 登录
    wx.login({
      success:res =>{
        console.log('return data')
        console.log(res)
        // 发送 res.code 到后台换取必要信息
      }
    })


    //todo 获取用户信息
    wx.getSetting({
      success:res =>{
        console.log('the user info:')
        console.log(res)
      }
    })
    // await this.get_salt();
  }

}

export default App
