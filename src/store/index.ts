import Vue from 'vue'
import Vuex from 'vuex'
import HOME_MODULE from './home'

Vue.use(Vuex)

interface State {
    HOME_MODULE:any
}

const store:any = new Vuex.Store<State>({
    modules:{
        HOME_MODULE        
    }
})

export default store;