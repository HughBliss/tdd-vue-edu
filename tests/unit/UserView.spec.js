jest.mock('../../src/store/modules/user');

import {shallowMount, createLocalVue} from '@vue/test-utils'
import Vuex from 'vuex'
import UserView from '@/views/UserView'
import VUserSearchForm from '@/components/VUserSearchForm'
import VUserProfile from '@/components/VUserProfile'
import {state as initialState, actions} from '@/store/modules/user'
import userFixture from './fixtures/user.fixture'


const localVue = createLocalVue();

localVue.use(Vuex);

describe('UserView', () => {
  let state;

  const build = () => {
    const wrapper = shallowMount(UserView, {
      localVue,
      store: new Vuex.Store({
        modules: {
          user: {
            namespaced: true,
            state,
            actions
          }
        }
      })
    });

    return {
      wrapper,
      userSearchForm: () => wrapper.find(VUserSearchForm),
      userProfile: () => wrapper.find(VUserProfile)
    }
  };

  beforeEach(() => {
    jest.resetAllMocks();
    state = {...initialState}
  });

  it('renders the component', () => {
    // arrange
    const {wrapper} = build();
    // assert
    expect(wrapper.html()).toMatchSnapshot()
  });

  it('renders main child components', () => {
    // arrange
    const {userSearchForm, userProfile} = build();

    // assert
    expect(userSearchForm().exists()).toBe(true);
    expect(userProfile().exists()).toBe(true)
  });

  it('passes a binded user prop to user profile component', () => {
    // arrange
    state.user = userFixture;

    const {userProfile} = build();

    // assert
    expect(userProfile().vm.user).toBe(state.user)
  });

  it('searches for a user when received "submitted"', () => {
    const expectedUser = 'huy';
    const {userSearchForm} = build();

    userSearchForm().vm.$emit('submitted', expectedUser);

    expect(actions.SEARCH_USER).toHaveBeenCalled();
    expect(actions.SEARCH_USER.mock.calls[0][1]).toEqual(expectedUser);
  })
});
