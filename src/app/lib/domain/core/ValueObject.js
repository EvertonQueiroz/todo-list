export default class ValueObject {
  constructor(){
    this._validationResults = [];
  }

  get validationResults() {
    return this._validationResults;
  }
}
