# Generated by Django 3.2.12 on 2023-02-16 13:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0019_productvideo'),
    ]

    operations = [
        migrations.AddField(
            model_name='productcomment',
            name='product',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='product.product'),
        ),
    ]
