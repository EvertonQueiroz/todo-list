import Entity from "./core/Entity";

export default class Task extends Entity {
  constructor(title){
    this._title = title;
    this._description = '';
    this._comments = [];
  }

  get title() {
    return this._title;
  }

  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value;
  }  

  addComment(comment){
    this._comments.push(comment);
  }

  isValid() {
    if (!this._title)
      this._validationResults.push({
        property: 'title',
        message: 'Title is required',
      });

    return !this._validationResults.some();
  }
}