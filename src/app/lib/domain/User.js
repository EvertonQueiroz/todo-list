import Entity from "./core/Entity";
export default class User extends Entity {
  #name;

  constructor(name) {
    super();
    this.#name = name;
  }

  get name(){
    return this.#name;
  }
}
