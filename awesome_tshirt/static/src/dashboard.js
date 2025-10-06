/** @odoo-module **/

import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { Layout } from "@web/search/layout";
import { useSearchModel } from "@web/search/search_model";

class AwesomeDashboard extends Component {
    static template = "awesome_tshirt.clientaction";
    static components = { Layout };

    setup() {
        this.searchModel = useSearchModel("res.partner"); // modelo para el control panel
        this.display = {
            controlPanel: {
                "top-right": false,
                "bottom-right": false,
            },
        };
    }
}

registry.category("actions").add("awesome_tshirt.dashboard", AwesomeDashboard);
