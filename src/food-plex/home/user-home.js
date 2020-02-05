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
      paper-card {
        max-width: 400px;
        margin: 10px;
        cursor:pointer;
      }
      </style>
      <template is="dom-repeat" items={{vendors}}>
    <paper-card image=../../images/carousal2.jpg elevation="2" animated-shadow="false" on-click="_handleClick">
      <div class="card-content">
        <p>{{item.vendorName}}</p>
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
      },
      vendors:{
    type:Array,
    value:[{vendorName:"Snack It"},{vendorName:"Hunger box"},{vendorName:"Faasoos"}]
      }
    };
  }
  /**
   * 
   * @param {event} event 
   */
  _handleClick(event)
  {
    console.log(event.model.item)
    this.set('route.path','./order')
  }
}

window.customElements.define('user-home', UserHome);
