import Vue from 'vue'
import Vuex from 'vuex'
// import HOME_MODULE from './home'
// import COMMON_MODULE from './common'
// import MINE_MODULE from './mine'
// import ORDER_MODULE from './order'
// import OTHERS_MODULE from './others'

Vue.use(Vuex)

interface State {
    // HOME_MODULE:any,
    // COMMON_MODULE:any,
    // MINE_MODULE:any,
    // OTHERS_MODULE:any
}

const store:any = new Vuex.Store<State>({
    modules:{
        // HOME_MODULE,
        // COMMON_MODULE,
        // MINE_MODULE,
        // ORDER_MODULE,
        // OTHERS_MODULE
        
    }
})

export default store;