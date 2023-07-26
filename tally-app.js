import { LitElement, html, css } from 'lit';

class TallyApp extends LitElement {
  static styles = css`
    :host {
      display: block;
      text-align: center;
      padding: 20px;
    }

    button {
      font-size: 24px;
      margin: 10px;
    }

    .normal {
      color: black;
    }

    .min-reached {
      color: green;
    }

    .max-reached {
      color: red;
    }
  `;

  static properties = {
    count: { type: Number },
  };

  constructor() {
    super();
    this.count = 0;
  }

  increment() {
    if (this.count < 10) {
      this.count++;
    }
  }

  decrement() {
    if (this.count > 0) {
      this.count--;
    }
  }

  render() {
    let stateClass = '';

    if (this.count === 0) {
      stateClass = 'normal';
    } else if (this.count === 10) {
      stateClass = 'max-reached';
    } else {
      stateClass = 'min-reached';
    }

    return html`
      <h1 class="${stateClass}">Tally App</h1>
      <h2 class="${stateClass}">Count: ${this.count}</h2>
      <button @click="${this.increment}" class="${stateClass}" ?disabled="${this.count === 10}">Increment</button>
      <button @click="${this.decrement}" class="${stateClass}" ?disabled="${this.count === 0}">Decrement</button>
    `;
  }
}

customElements.define('tally-app', TallyApp);
