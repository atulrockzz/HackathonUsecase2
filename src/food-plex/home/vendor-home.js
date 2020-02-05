import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-tabs/paper-tab.js';
import '@polymer/paper-tabs/paper-tabs.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js';
import '@polymer/paper-input/paper-input.js';
import '../shared/API/ajax-call.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-item/paper-item.js';
/**
 * @customElement
 * @polymer
 */
class VendorHome extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
      <ajax-call id="ajax"></ajax-call>
      <paper-dialog id="modal">
            <h2>Enter Details</h2>
            <paper-dialog-scrollable>
                <iron-form id="form">
                    <form>
                        <paper-input type="number" label="Enter Name" name="itemName" required
                            error-message="ItemName is required"></paper-input>
                        <paper-input label="Enter Price" name="itemPrice" required error-message="Price is required"></paper-input>
                        <paper-dropdown-menu id="categories" name="categories" vertical-offset="60">
                        <paper-listbox slot="dropdown-content" class="dropdown-content" selected=0>
                            <paper-item>Beverages</paper-item>
                            <paper-item>Salad</paper-item>
                            <paper-item>Health Drinks</paper-item>
                            <paper-item>Juice</paper-item>
                            <paper-item>Milk Shake</paper-item>
                            <paper-item>Lassi</paper-item>
                        </paper-listbox>
                    </paper-dropdown-menu>
                        </form>
                </iron-form>
                <br />
            </paper-dialog-scrollable>
            <div class="buttons">
                <paper-button on-click="_handleSubmit">OK</paper-button>
                <paper-button dialog-dismiss>Cancel</paper-button>
            </div>
        </paper-dialog>
      <paper-button raised on-click="_handleAdd">Add Item</paper-button>
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
            <paper-icon-button id="deleteBtn" on-click="_handleDelete" icon="delete"></paper-icon-button>
            </div>
          </template>
      </iron-pages>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'vendor-home'
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
  connectedCallback()
  {
    super.connectedCallback();
    this.$.ajax._makeAjaxCall('get',`http://10.117.189.138:8085/foodplex/users`,null,'userData')  
  }
  /**
   * 
   * @param {*} event 
   */
  _handleAdd(event)
  {
    console.log(event)
    this.$.ajax._makeAjaxCall('get',`http://10.117.189.77:8085/foodplex/vendors`,null,'populateFields')
    this.$.modal.open()
  }
}

window.customElements.define('vendor-home', VendorHome);
