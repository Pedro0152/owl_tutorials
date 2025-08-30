/** @odoo-module **/

import { Component, markup, useState } from "@odoo/owl";
import { Counter } from "./counter/counter";
import { TodoList } from "./todoList/todoList";
import { Notebook } from "./notebook/notebook";
import { Card } from "./card/card";

export class Playground extends Component {
    static template = "owl_playground.playground";
    static components = { Counter, TodoList, Notebook, Card };

    setup() {
        this.sum = useState({ value: 2 });
    }
    incrementSum() {
        console.log("Incrementing sum", this.sum.value);
        this.sum.value++;
    }
}
