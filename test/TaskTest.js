var assert = require('assert');
const { default: Task } = require('../src/app/lib/domain/Task');

describe('Task', function () {
  describe('Assert', function () {
    it('should be valid when create task with title', function () {
      const task = new Task('Teste');
      assert(task.isValid());
    });

    it('should be invalid when create task without title', function () {
      const task = new Task('');
      assert(!task.isValid());
    });
  });
});