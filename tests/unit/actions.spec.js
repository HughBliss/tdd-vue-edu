jest.mock('../../src/api/user.js');

import flushPromises from 'flush-promises'
import {actions} from '@/store/modules/user'
import {searchUser} from '@/api/user'
import userFixture from './fixtures/user.fixture'

describe('store actions', () => {
  let commit;

  beforeEach(() => {
    commit = jest.fn()
  });

  it('searches for user', async () => {
    // arrange
    const expectedUser = 'kuroski';

    // act
    await actions.SEARCH_USER({commit}, {username: expectedUser});
    await flushPromises();

    // assert
    expect(searchUser).toHaveBeenCalledWith(expectedUser);
    expect(commit).toHaveBeenCalledWith('SET_USER', userFixture)
  })
});
