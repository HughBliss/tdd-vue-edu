import userFixture from "../../../../tests/unit/fixtures/user.fixture";

export const state = {
  user: {}
};

export const actions = {
  // eslint-disable-next-line no-undef
  SEARCH_USER: jest.fn().mockResolvedValue(userFixture)
};
