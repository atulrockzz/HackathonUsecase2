import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-input/paper-input.js';
/**
 * @customElement
 * @polymer
 */
class LoginForm extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
      <div>
      <paper-input id="contact" label="Contact Name"></paper-input>
      <paper-input id="password" label="Password"></paper-input>
      <paper-button on-click="_signIn" raised id="loginBtn">LogIn</paper-button>
      </div>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'login-form'
      }
    };
  }
  _signIn(event)
  {
    const contact = this.$.contact.value;
    const password = this.$.password.value;
    this.$.ajax.ajaxCall('GET',`http://localhost:3000/users?userName=${userName}&&password=${password}`,null,'login')  
    
  } 
}

window.customElements.define('login-form', LoginForm);
