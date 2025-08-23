/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import { Todo } from "../todo/todo";

export class TodoList extends Component {
    static template = "owl_playground.todoList";
    static components = { Todo };

    setup() {
        this.todos = useState([
            { id: 2, description: "write tutorial", done: true },
            { id: 3, description: "buy milk", done: false },
        ]);
    }
    }
