# Generated by Django 3.2.12 on 2023-01-21 21:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0010_banner_visiable'),
    ]

    operations = [
        migrations.RenameField(
            model_name='banner',
            old_name='visiable',
            new_name='visible',
        ),
    ]
