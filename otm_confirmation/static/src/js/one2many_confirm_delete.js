/** @odoo-module **/

import Dialog from "web.Dialog";
import { patch } from "@web/core/utils/patch";
import { ListRenderer } from "@web/views/list/list_renderer";
import { _t } from "web.core";

const originalDeleteRecord = ListRenderer.prototype.onDeleteRecord;

patch(ListRenderer.prototype, "otm_confirmation_legacy_patch", {
    async onDeleteRecord(record) {
        const self = this;

        new Dialog(this, {
            title: _t("Confirmación"),
            size: "medium",
            $content: $("<p/>").text(_t("¿Estás seguro de que deseas eliminar esta línea?")),
            buttons: [
                {
                    text: _t("Cancelar"),
                    close: true,
                },
                {
                    text: _t("Eliminar"),
                    classes: "btn-primary",
                    close: true,
                    click: function () {
                          originalDeleteRecord.call(self, record);
                    },
                },
            ],
        }).open();
    },
});
