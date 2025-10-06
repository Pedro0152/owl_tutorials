# -*- coding: utf-8 -*-
{
    'name': 'OTM Confirmation',
    'version': '16.0.1.0.0',
    'summary': 'Añade confirmación al borrar líneas one2many',
    'author': 'ChatGPT',
    'category': 'Web',
    'depends': ['web'],
    'data': [],
    'assets': {
        'web.assets_backend': [
            'otm_confirmation/static/src/js/one2many_confirm_delete.js',
            'otm_confirmation/static/src/xml/confirm_dialog.xml',
        ],
    },
    'installable': True,
    'application': False,
}
