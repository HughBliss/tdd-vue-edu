import {mutations, state as initialState} from '@/store/modules/user'
import user from './fixtures/user.fixture'

describe('mutations', () => {
  let state;

  beforeEach(() => {
    state = {...initialState}
  });

  it('sets new user', () => {
    // arrange
    const expectedUser = user;

    // act
    mutations.SET_USER(state, expectedUser);

    // assert
    expect(state.user).toEqual(expectedUser);
    expect(state.user).not.toBe(expectedUser)
  })
});
