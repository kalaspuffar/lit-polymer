import {PolymerElement}
    from '../node_modules/@polymer/polymer/polymer-element.js';

export class MyElement extends PolymerElement {

  static get template() {
    return `<h1>This is my [[name]] app.</h1>`
  }

  constructor() {
    super();
    this.name = '3.0 preview';
  }

  static get properties() {
    name: {
      Type: String
    }
  }
}

customElements.define('my-element', MyElement);