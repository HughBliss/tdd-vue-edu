import {createNamespacedHelpers} from 'vuex';

const {mapState, mapActions} = createNamespacedHelpers('user');

const computed = {
  ...mapState({
    mix_user_user: 'user'
  })
};

const methods = {
  ...mapActions({
    mix_user_searchUser: 'SEARCH_USER'
  })
};

export default {
  computed,
  methods
}
