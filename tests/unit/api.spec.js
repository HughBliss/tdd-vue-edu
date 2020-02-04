import flushPromises from 'flush-promises'
import nock from 'nock'
import {searchUser} from '@/api/user'
import userFixture from './fixtures/user.fixture'

describe('api', () => {
  it('searches for the user', async () => {
    // arrange
    const expectedUser = 'kuroski';

    const request = nock(process.env.VUE_APP_BASE_API)
      .get(`/users/${expectedUser}`)
      .reply(200, userFixture);

    // act
    const result = await searchUser(expectedUser);
    await flushPromises();

    // assert
    expect(result).toEqual(userFixture);
    expect(request.isDone()).toBe(true)
  })
});
