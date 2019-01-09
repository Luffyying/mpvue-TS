import {Vue,Component} from 'vue-property-decorator'

import IndexSwiper from './components/swiper.vue'

//必须使用装饰器的方式来指定组件 component
@Component({
    components:{
        IndexSwiper
    }
})
class Index extends Vue{
    testData:string = 'index.ts'
}
export default Index

