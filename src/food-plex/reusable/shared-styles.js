import '@polymer/polymer/polymer-element.js';
const template = document.createElement('template');
template.innerHTML = `<dom-module id="shared-styles">
  <template>
    <style>
    :host {
        display: block;
      }
     
    </style>
  </template>
</dom-module>`;

document.head.appendChild(template.content);
