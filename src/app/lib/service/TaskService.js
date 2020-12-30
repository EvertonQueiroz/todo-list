export default class TaskService {
  constructor(
    unitOfWork,
    taskRepository,
  ) {
    this._unitOfWork = unitOfWork;
    this._taskRepository = taskRepository;
  }

  getAll() {
    return this._taskRepository.getAll();
  }

  add(task) {
    if (!task.isValid())
      throw new Error('Task is invalid!', task.validationResults());

    if (task.id)
      this._taskRepository.update(task);
    else
      this._taskRepository.add(task);

    this._unitOfWork.save();
  }

  remove(task) {
    this._taskRepository.remove(task);
  }

  close(){
    this._unitOfWork.close();
  }
}
