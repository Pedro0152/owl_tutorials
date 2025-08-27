/** @odoo-module **/

import { Component, useState, xml } from "@odoo/owl";

export class Card extends Component {
    static template = "owl_playground.card";
    static props = {
        title: { type: String, optional: true },
        isOpen: { type: Boolean, optional: true, default: true },
        slots: {
            type: Object,
            shape: {
                default: true
            },
        },
        //toggleContent: Function,
    };
    setup() {
        this.state = useState({ isOpen: true });
    }

    toggleContent() {
        this.state.isOpen = !this.state.isOpen;
    }
}
