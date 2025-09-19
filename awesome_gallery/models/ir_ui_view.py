# -*- coding: utf-8 -*-
from odoo import fields, models


class View(models.Model):
    _inherit = 'ir.ui.view'

    type = fields.Selection(selection_add=[('gallery', "Awesome Gallery")])

    # def _get_view_info(self):
    #     """
    #     Override this method to add the gallery view's specific information.
    #     This ensures the backend is aware of the new view type and its properties.
    #     """
    #     _view_info = super()._get_view_info()
    #     _view_info['gallery'] = {
    #         'icon': 'fa-picture-o',  # Match the icon from your gallery_view.js
    #         'multi_record': True,
    #         'type': 'gallery',
    #     }
    #     return _view_info

    def _get_view_info(self):
        return {'gallery': {'icon': 'fa-picture-o', 'multi_record': True}} | super()._get_view_info()
