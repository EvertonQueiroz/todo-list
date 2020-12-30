import ValueObject from "./core/ValueObject";

export default class Comment extends ValueObject {
  constructor(user, text){
    this._user = user;
    this._text = text;
  }

  get text(){
    return this._text;
  }

  get user(){
    return this._user;
  }

  isValid(){
    if (!this._text)
      this._validationResults.push({
        property: 'text',
        message: 'Text is required',
      });

    if (!this._user)
      this._validationResults.push({
        property: 'user',
        message: 'User is required',
      });

    return !this._validationResults.some();
  }
}
