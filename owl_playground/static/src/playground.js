/** @odoo-module **/

import { Component, markup } from "@odoo/owl";
import { Counter } from "./counter/counter";
import { TodoList } from "./todoList/todoList";
import { Notebook } from "./notebook/notebook";
import { Card } from "./card/card";

export class Playground extends Component {
    static template = "owl_playground.playground";
    static components = { Counter, TodoList, Notebook, Card };

}
