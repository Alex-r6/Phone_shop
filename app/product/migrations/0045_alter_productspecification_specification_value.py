# Generated by Django 3.2.12 on 2023-03-17 20:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0044_auto_20230317_2204'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productspecification',
            name='specification_value',
            field=models.TextField(null=True),
        ),
    ]
