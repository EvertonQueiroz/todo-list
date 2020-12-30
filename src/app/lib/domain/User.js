import Entity from "./core/Entity";

export default class User extends Entity {
  constructor(name) {
    this._name = name;
  }

  get name(){
    return this._name;
  }
}
