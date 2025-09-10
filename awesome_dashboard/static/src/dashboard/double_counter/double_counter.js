/** @odoo-module **/

import { Component, useState } from "@odoo/owl";

export class DoubleCounter extends Component {
  static template = "awesome_dashboard.DoubleCounter";

  setup() {
    this.state = useState({
      selected: "count1",
      count1: 0,
      count2: 0,
    });
  }

  incrementCounter1() {
    this.state.selected = "count1";
    this.state.count1++;
  }

  incrementCounter2() {
    this.state.selected = "count2";
    this.state.count2++;
  }

  changeCounter() {
    this.state.selected = this.state.selected === "count1" ? "count2" : "count1";
  }
}
