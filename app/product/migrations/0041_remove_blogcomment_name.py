# Generated by Django 3.2.12 on 2023-03-11 11:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0040_auto_20230311_1332'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='blogcomment',
            name='name',
        ),
    ]