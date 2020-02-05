import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';
/**
 * @customElement
 * @polymer
 */
class UserHome extends PolymerElement {
  static get template() {
    return html`
      <style>
      :host {
        display: block;
        height:100vh;
        @apply --my-home-theme
      }
      .card-content {
        @apply --my-card-content
      }
  
      paper-card {
        max-width: 300px;
        margin: 10px;
  
        --paper-card-header-image: {
          height: 200px;
          background-size: contain;
        }
      }
      </style>
      <template is="dom-repeat" items={{users}}>
    <paper-card image="{{_getImage(item.gender,item.image)}}" elevation="2" animated-shadow="false">
      <div class="card-content">
        <p>Name: {{item.name}}</p>
        <p>Gender: {{item.gender}}</p>
        <p>Age: {{item.age}}</p>
      </div>
      <div class="card-actions">
        <paper-button id="like" raised on-click="_like">{{item.status}}</paper-button>
      </div>
    </paper-card>
  </template>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'user-home'
      }
    };
  }
}

window.customElements.define('user-home', UserHome);
