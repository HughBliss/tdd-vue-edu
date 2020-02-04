import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const modules = {
  user: require('./modules/user')
};

export default new Vuex.Store({
  modules
})
