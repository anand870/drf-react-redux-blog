# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-07-01 10:54
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app_models', '0003_images'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Images',
            new_name='PostImage',
        ),
    ]
