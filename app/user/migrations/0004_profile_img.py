# Generated by Django 3.2.12 on 2023-01-05 20:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0003_profile_role'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='img',
            field=models.ImageField(blank=True, null=True, upload_to='product_img', verbose_name='img'),
        ),
    ]
