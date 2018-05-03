import {LitElement, html} from '../node_modules/@polymer/lit-element/lit-element.js';

export class MyLitElement extends LitElement {
  static get properties() {
    return {
      name: {
        Type: String
      }  
    }
  }

  constructor() {
    super();
    this.name = 'Explorers';
  }

  _render({name}) {
    return html`<h1>Hello ${name} from lit element!</h1>`;
  }  
}

customElements.define('my-lit-element', MyLitElement);