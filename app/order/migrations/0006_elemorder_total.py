# Generated by Django 3.2.12 on 2023-02-18 12:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0005_order_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='elemorder',
            name='total',
            field=models.IntegerField(default=0),
        ),
    ]
