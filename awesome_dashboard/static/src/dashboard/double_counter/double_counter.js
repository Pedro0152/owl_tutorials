/** @odoo-module **/

import { Component, useState, xml } from "@odoo/owl";

export class DoubleCounter extends Component {
  static template = xml`
    <t t-esc="'selected: ' + state.selected + ', value: ' + state[state.selected]"/>
    <button t-on-click="incrementCounter1">increment count 1</button>
    <button t-on-click="incrementCounter2">increment count 2</button>
    <button t-on-click="changeCounter">Switch counter</button>
  `;

  setup() {
    this.state = useState({ selected: "count1", count1: 0, count2: 0 });
  }

    incrementCounter1() {
        this.state.selected = "count1";
        this.state[this.state.selected]++;
    }

    incrementCounter2() {
        this.state.selected = "count2";
        this.state[this.state.selected]++;
    }

  changeCounter() {
    this.state.selected = this.state.selected === "count1" ? "count2" : "count1";
  }
}
