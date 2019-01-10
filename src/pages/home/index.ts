import {Vue,Component} from 'vue-property-decorator'
import {State,Action,Mutation} from 'vuex-class'

import IndexSwiper from '@/pages/home/components/swiper.vue'

//必须使用装饰器的方式来指定组件 component
@Component({
  components:{
    IndexSwiper
  }
})
class Index extends Vue{
  @State HOME_MODULE: any;
  testData:string = 'index.ts'
  //hook
  async onLoad(){
    console.log('onload event')
    console.log(this.$store.state.HOME_MODULE.test)
    this.$store.commit('change','visa')
    console.log('调用了mutation')
    console.log(this.$store.state.HOME_MODULE.test)
  }
  //页面滚动事件
  onPageScroll(){
    console.log('scroll')
  }

}
export default Index

