# Generated by Django 3.2.12 on 2022-12-01 17:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0004_product_img'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProductImg',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img', models.ImageField(blank=True, null=True, upload_to='product_img', verbose_name='img')),
                ('title', models.CharField(blank=True, max_length=20, null=True)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='product.product')),
            ],
        ),
    ]