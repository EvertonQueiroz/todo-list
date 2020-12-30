export default class Entity {
  constructor(){
    this._validationResults = [];
  }

  get id() {
    return this._id;
  }
  
  set id(value){
    this._id = value;
  }

  get validationResults() {
    return this._validationResults;
  }
}
