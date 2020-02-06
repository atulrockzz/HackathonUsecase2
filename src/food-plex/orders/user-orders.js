import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js';
import '../shared/API/ajax-call.js';
class UserOrders extends PolymerElement
    {
        static get template()
        {
            return html `
            <style>
            paper-card{
              width:400px;
            }
              :host {
                display: block;
              }
            </style>
            <h2>Hello [[prop1]]!</h2>
            <app-location route={{route}}></app-location>
            <ajax-call id="ajax"></ajax-call>
                <template is="dom-repeat" items={{myOrders}}>
                  <paper-card image=../../images/carousal2.jpg elevation="2" animated-shadow="false">
                  item:{{item.name}}
                  Price:{{item.price}}
                  </paper-card>
                </template>   `
        }
        static get properties() {
            return {
                myOrders:{
                    type:Array,
                    value: [{name:"Dosa",price:"50",category:"Salad"},{name:"Dosa",price:"50",category:"Salad"},{name:"Dosa",price:"500",category:"Sandwich"},{name:"Dosa",price:"509",category:"Healthy bites"},{name:"Dosa",price:"50",category:"Soups"}, {name:"Dosa",price:"50",category:"Soups"},{name:"Dosa",price:"50",category:"Soups"}]

                  },
            
             }
    }
    ready()
  {
    super.ready();
    this.addEventListener('getting-orders', (e) => this._gettingOrders(e))
  }
  connectedCallback()
  {
    super.connectedCallback();
    this.$.ajax._makeAjaxCall('get',`http://10.117.189.208:8080/foodplex/1/order`,null,'myOrders')  
  }
  _gettingOrders(){
      
  }
}
    customElements.define('user-orders',UserOrders)