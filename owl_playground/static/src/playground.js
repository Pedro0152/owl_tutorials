/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import { Counter } from "./counter/counter";

export class Playground extends Component {
    static template = "owl_playground.playground";
    state = useState({ value: 0 });

    increment() {
        this.state.value++;
    }
    static components = { Counter };
}
