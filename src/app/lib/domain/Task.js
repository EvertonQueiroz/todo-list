import Entity from "./core/Entity";

export default class Task extends Entity {
  #title;
  #description;
  #comments;

  constructor(title){
    super();
    this.#title = title;
    this.#description = '';
    this.#comments = [];
  }

  get title() {
    return this.#title;
  }

  get description() {
    return this.#description;
  }

  set description(value) {
    this.#description = value;
  }  

  addComment(comment){
    this.#comments.push(comment);
  }

  isValid() {
    if (!this.#title)
      this.validationResults.push({
        property: 'title',
        message: 'Title is required',
      });

    return this.validationResults.length === 0;
  }
}