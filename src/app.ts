import { Vue, Component } from 'vue-property-decorator'
import { State , Action } from 'vuex-class'

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
  @State COMMON_MODULE:object;
  @Action get_salt:()=>void;
  @Action get_config:()=>void;
  // app hook
  async onLaunch() {
    await this.get_salt();
    await this.get_config();
  }

}

export default App