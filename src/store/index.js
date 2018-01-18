import Vue from 'vue'
import Vuex from 'vuex'
import {
  mutations
} from './mutations'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const state = {
  publicKey: 'heUeV56dGhXWF6W14QC2rKgpPSFFcnQfxHnfRvTriwRDd7c6GsMfzVuD4Skma53vSgMnv9WDYcTPeUNDHXDMJJNy34JUy7Kuj',
  difficulty: 46272805830,
  blockReward: 5.61,
  throttle: 0.95,
  user: 'Admin',
  stats: [{}],
  nodes: [{
    id: 0,
    name: 'start',
    _color: 'orange'
  }],
  messages: ['booting up...'],
  minerProgress: 100
}

export default new Vuex.Store({
  plugins: [createLogger()],
  state,
  mutations
})
