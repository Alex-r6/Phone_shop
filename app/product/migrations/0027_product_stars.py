# Generated by Django 3.2.12 on 2023-03-03 07:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0026_auto_20230302_2213'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='stars',
            field=models.IntegerField(default=0),
        ),
    ]
