export default class TaskService {
  constructor(taskDao) {
    this._taskDao = taskDao;
  }

  getAll() {
    return this._taskDao.getAll();
  }

  add(task) {
    if (!task.isValid())
      throw new Error('Task is invalid!', task.validationResults());

    if (task.id)
      this._taskDao.update(task);
    else
      this._taskDao.add(task);
  }

  remove(task) {
    this._taskDao.remove(task);
  }
}
