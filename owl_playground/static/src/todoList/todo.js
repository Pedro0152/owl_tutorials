/** @odoo-module **/

import { Component } from "@odoo/owl";

export class Todo extends Component {
    static template = "owl_playground.todo";
    static props = {
        todo: {
            type: Object,
            shape: { id: Number, description: String, done: Boolean }
        },
        toggleState: Function,
        removeState: Function,
    };
    onChange(){
        this.props.toggleState(this.props.todo.id);
    }
    onClick(){
        this.props.removeState(this.props.todo.id);
    }
}