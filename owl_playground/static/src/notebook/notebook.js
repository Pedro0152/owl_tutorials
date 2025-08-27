/** @odoo-module **/

import { Component, useState, xml } from "@odoo/owl";

export class Notebook extends Component {
  static template = xml`
    <div class="notebook">
      <div class="tabs">
        <t t-foreach="tabNames" t-as="tab" t-key="tab_index">
          <span t-att-class="{active:tab_index === activeTab}" t-on-click="() => state.activeTab=tab_index">
            <t t-esc="props.slots[tab].title"/>
          </span>
        </t>
      </div>
      <div class="page">
        <t t-slot="{{currentSlot}}"/>
      </div>
    </div>`;

  setup() {
    this.state = useState({ activeTab: 0 });
    this.tabNames = Object.keys(this.props.slots);
  }

  get currentSlot() {
    return this.tabNames[this.state.activeTab];
  }
}