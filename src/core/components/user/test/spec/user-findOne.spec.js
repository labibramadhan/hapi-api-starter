import HttpStatus from 'http-status-codes';
import Qs from 'qs';
import {
  assert,
} from 'chai';

const setup = require('../../../../test/helpers/setup');
const mockUsers = require('../../../../test/helpers/mock-users');

const prefix = conf.get('prefix');

describe(`user findOne GET ${prefix}user`, () => {
  before(async function before() {
    await setup();
    await mockUsers.bind(this).apply();
  });

  it('works', async function it() {
    const {
      authenticated2,
    } = this.users;
    const {
      authenticatedRole,
    } = this.roles;

    const thisTestUrl = `${prefix}user?${Qs.stringify({
      where: {
        username: authenticated2.username,
      },
      include: JSON.stringify({
        model: 'role',
      }),
    }).toString()}`;

    const {
      result,
      statusCode,
    } = await server.inject({
      url: thisTestUrl,
      method: 'GET',
      credentials: {
        scope: ['user:findOne'],
      },
    });

    assert.equal(statusCode, HttpStatus.OK);
    assert.equal(result.id, authenticated2.id);
    assert.equal(result.roles[0].id, authenticatedRole.id);
  });
});
