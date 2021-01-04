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

  isValid() {
    if (!this.#name)
      this.validationResults.push({
        property: 'name',
        message: 'Name is required',
      });

    return this.validationResults.length === 0;
  }
}
