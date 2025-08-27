/** @odoo-module **/

import { Component, useState, useRef, onMounted } from "@odoo/owl";
import { Todo } from "../todo/todo";

export class TodoList extends Component {
    static template = "owl_playground.todoList";
    static components = { Todo };

    setup() {
        this.nextId = 1;
        this.todos = useState([]);
        this.input = useRef("inputTodo");
        onMounted(()=> this.input.el.focus());
    }

    addTodo(ev) {
        if (ev.keyCode === 13 && ev.target.value != "") {
            this.todos.push({
                id: this.nextId++,
                description: ev.target.value,
                done: false
            });
            ev.target.value = "";
        }
    }

    toggleTodo(id) {
        const todo = this.todos.find((todo) => todo.id === id);
        if (todo){
        todo.done = !todo.done;
        }
    }
    removeTodo(id) {
        const index = this.todos.findIndex((todo) => todo.id === id);
        if (index >= 0) {
            this.todos.splice(index, 1);
        }
    }
}
