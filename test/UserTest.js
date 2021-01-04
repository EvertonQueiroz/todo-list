const assert = require('assert');
const { default: User } = require('../src/app/lib/domain/User');

describe('User', function() {
    it('should be possible create User', function() {
      const user = new User('Everton');
      assert(user.isValid());
    });
});