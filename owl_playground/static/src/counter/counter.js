/** @odoo-module **/

import { Component, useState, xml } from "@odoo/owl";

export class Counter extends Component {
    static template = "owl_playground.counter";
    static props = {
        onChange: { type: Function, optional: true }
    };

    setup() {
        this.state = useState({ value: 1 });
    }

    increment() {
        console.log("Incrementing", this.state.value);
        this.state.value++;
        if (this.props.onChange) {
            this.props.onChange();
        }
    }
}