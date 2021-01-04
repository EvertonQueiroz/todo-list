export default class Entity {
  #validationResults;

  constructor(){
    this.#validationResults = [];
  }

  get id() {
    return this._id;
  }
  
  set id(value){
    this._id = value;
  }

  get validationResults() {
    return this.#validationResults;
  }  
}
