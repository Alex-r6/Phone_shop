# Generated by Django 3.2.12 on 2023-03-03 09:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0027_product_stars'),
    ]

    operations = [
        migrations.AddField(
            model_name='articlecategory',
            name='quantity',
            field=models.IntegerField(default=0),
        ),
    ]
