/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import { Counter } from "./counter/counter";
import { Todo } from "./todo/todo";

export class Playground extends Component {
    static template = "owl_playground.playground";
    //state = useState({ value: 0, id: 3, description: "buy milk", done: false });

    increment() {
        this.state.value++;
    }

    static components = { Counter, Todo };
}
