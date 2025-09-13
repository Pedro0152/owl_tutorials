# -*- coding: utf-8 -*-

import logging
import random

from odoo import http
from odoo.http import request
from odoo import models, fields, api
logger = logging.getLogger(__name__)

class AwesomeDashboard(http.Controller):
    @http.route('/awesome_dashboard/statistics', type='json', auth='user')
    def get_statistics(self):
        """
        Returns a dict of statistics about the orders:
            'average_quantity': the average number of t-shirts by order
            'average_time': the average time (in hours) elapsed between the
                moment an order is created, and the moment is it sent
            'nb_cancelled_orders': the number of cancelled orders, this month
            'nb_new_orders': the number of new orders, this month
            'total_amount': the total amount of orders, this month
        """

        return {
            'average_quantity': random.randint(4, 12),
            'average_time': random.randint(4, 123),
            'nb_cancelled_orders': random.randint(0, 50),
            'nb_new_orders': random.randint(10, 200),
            'orders_by_size': {
                'm': random.randint(0, 150),
                's': random.randint(0, 150),
                'xl': random.randint(0, 150),
            },
            'total_amount': random.randint(100, 1000)
        }


class AwesomeDashboardController(http.Controller):
    @http.route("/awesome_dashboard/get_config", type="json", auth="user")
    def get_config(self):
        return {
            "disabledItems": request.env.user.dashboard_config and request.env.user.dashboard_config.split(",") or []
        }

    @http.route("/awesome_dashboard/set_config", type="json", auth="user")
    def set_config(self, disabledItems):
        request.env.user.dashboard_config = ",".join(disabledItems)
        return True


class ResUsers(models.Model):
    _inherit = "res.users"

    dashboard_config = fields.Text("Dashboard Config")

    @api.model
    def get_dashboard_config(self, user_id):
        user = self.browse(user_id)
        return {"disabledItems": (user.dashboard_config or "").split(",") if user.dashboard_config else []}

    @api.model
    def set_dashboard_config(self, user_id, disabled_items):
        user = self.browse(user_id)
        user.dashboard_config = ",".join(disabled_items)
        return True

