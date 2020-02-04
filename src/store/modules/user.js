import {searchUser} from "@/api/user";

export const state = {
  user: {}
};

export const mutations = {
  SET_USER(state, user) {
    state.user = {...user}
  }
};

export const actions = {
  SEARCH_USER({commit}, username) {
    return new Promise(async (resolve, reject) => {
      try {
        const user = await searchUser(username);
        commit('SET_USER', user);
        resolve(user)
      } catch (error) {
        reject(error)
      }
    })
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
