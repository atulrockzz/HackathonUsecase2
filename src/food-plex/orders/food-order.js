import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-tabs/paper-tab.js';
import '@polymer/paper-tabs/paper-tabs.js';
import '@polymer/iron-pages/iron-pages.js'
/**
 * @customElement
 * @polymer
 */
class FoodOrder extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
      <paper-tabs selected="{{selected}}" scrollable>
          <template is="dom-repeat" items={{availableItems}}>
            <paper-tab name="{{item.category}}"> {{item.category}}</paper-tab>
          </template>
      </paper-tabs>
      <iron-pages selected="{{selected}}">
          <template is="dom-repeat" items={{availableItems}}>
            <div name="{{item.category}}">
            item:{{item.name}}
            Price:{{item.price}}
            </div>
          </template>
      </iron-pages>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'food-order'
      },
      availableItems:{
        type:Array,
       // value:[{name:"Dosa",price:"50",category:"food"},{name:"Dosa",price:"500",category:"c"},{name:"Dosa",price:"509",category:"b"},{name:"Dosa",price:"50",category:"a"}, {name:"Dosa",price:"50",category:"food"},{name:"Dosa",price:"500",category:"c"},{name:"Dosa",price:"509",category:"b"},{name:"Dosa",price:"50",category:"a"},{name:"Dosa",price:"50",category:"food"},{name:"Dosa",price:"500",category:"c"},{name:"Dosa",price:"509",category:"b"},{name:"Dosa",price:"50",category:"a"},{name:"Dosa",price:"50",category:"food"},{name:"Dosa",price:"500",category:"c"},{name:"Dosa",price:"509",category:"b"},{name:"Dosa",price:"50",category:"a"},{name:"Dosa",price:"50",category:"food"},{name:"Dosa",price:"500",category:"c"},{name:"Dosa",price:"509",category:"b"},{name:"Dosa",price:"50",category:"a"},{name:"Dosa",price:"50",category:"food"},{name:"Dosa",price:"500",category:"c"},{name:"Dosa",price:"509",category:"b"},{name:"Dosa",price:"50",category:"a"},{name:"Dosa",price:"50",category:"food"},{name:"Dosa",price:"500",category:"c"},{name:"Dosa",price:"509",category:"b"},{name:"Dosa",price:"50",category:"a"},{name:"Dosa",price:"50",category:"food"},{name:"Dosa",price:"500",category:"c"},{name:"Dosa",price:"509",category:"b"},{name:"Dosa",price:"50",category:"a"},{name:"Dosa",price:"50",category:"food"},{name:"Dosa",price:"500",category:"c"},{name:"Dosa",price:"509",category:"b"},{name:"Dosa",price:"50",category:"a"},{name:"Dosa",price:"50",category:"food"},{name:"Dosa",price:"500",category:"c"},{name:"Dosa",price:"509",category:"b"},{name:"Dosa",price:"50",category:"a"}]
       value: [{name:"Dosa",price:"50",category:"Salad"},{name:"Dosa",price:"500",category:"Sandwich"},{name:"Dosa",price:"509",category:"Healthy bites"},{name:"Dosa",price:"50",category:"Soups"}, {name:"Dosa",price:"50",category:"Soups"},{name:"Dosa",price:"50",category:"Soups"}]
      },
      selected: {
        type: Number,
        value: 0
      }
    };
  }
}

window.customElements.define('food-order', FoodOrder);
