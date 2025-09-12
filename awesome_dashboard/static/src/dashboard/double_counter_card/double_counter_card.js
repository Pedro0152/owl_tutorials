/** @odoo-module **/

import { Component, useState } from "@odoo/owl";

export class DoubleCounterCard extends Component {
    static template = "awesome_dashboard.DoubleCounterCard";

    setup() {
        this.state = useState({ selected: "count1", count1: 0, count2: 0 });
    }

    incrementCount1() {
        this.state.selected = "count1";
        this.state[this.state.selected]++;
    }

    incrementCount2() {
        this.state.selected = "count2";
        this.state[this.state.selected]++;
    }

    changeCounter() {
        this.state.selected = this.state.selected === "count1" ? "count2" : "count1";
    }
}
