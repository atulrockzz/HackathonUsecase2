import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-toast/paper-toast.js';
import '@polymer/iron-form/iron-form.js';
import '../shared/API/ajax-call.js';
import '@polymer/app-route/app-location.js';
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
          height:100vh;
          overflow-y:hidden;
          background-size:cover;
          background-image:url(../../../images/login.jpg)
        }
        .form
        {
          background:white;
          width:40%;
          margin:70px auto;
          padding:15px;
          box-shadow:0px 0px 5px 5px;
        }
        span{
          display:flex;
          margin-top: 10px;
          justify-content: center;
        }
      </style>
      <app-location route={{route}}></app-location>
      <paper-toast text={{message}} id="toast"></paper-toast>
      <ajax-call id="ajax"></ajax-call>
      <iron-form>
      <form class="form">
      <paper-input id="mobileNo" label="Mobile Number"></paper-input>
      <paper-input id="password" label="Password"></paper-input>
      <span>
      <paper-button on-click="_signIn" raised id="loginBtn">LogIn</paper-button></span>
      </form>
      </iron-form>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'login-form'
      },
      message:{
        type:String,
        value:''
      }
    };
  }
  ready()
  {
    super.ready();
    this.addEventListener('login-status', (e) => this._loginStatus(e))
  }
  _signIn(event)
  {
    const mobileNumber = this.$.mobileNo.value;
    const password = this.$.password.value;
    const postObj={mobileNumber,password}
    this.$.ajax._makeAjaxCall('post',`http://10.117.189.138:8085/foodplex/users`,postObj,'login')  
    
  } 
  _loginStatus(event)
  {
    const data=event.detail.data;
    this.message=`${data.message}`
    this.$.toast.open();
      sessionStorage.setItem('userId',data.userId)
      if(data.role=='USER')
      this.set('route.path','./user-home')
      else if(data.role=='VENDOR')
      this.set('route.path','./vendor-home')
  }
}

window.customElements.define('login-form', LoginForm);
