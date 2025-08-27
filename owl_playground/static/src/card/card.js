/** @odoo-module **/

import { Component, useState, xml } from "@odoo/owl";

export class Card extends Component {
    static template = "owl_playground.card";
    static props = {
        title: { type: String, optional: true },
        slots: {
            type: Object,
            shape: {
                default: true
            },
        }
    };
}
