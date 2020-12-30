import RepositoryBase from "./base/RepositoryBase";

export default class TaskRepository extends RepositoryBase {
  constructor(context){
    this._context = context;
  }
}
