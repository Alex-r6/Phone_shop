# Generated by Django 3.2.12 on 2023-03-11 07:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0037_alter_contactinfo_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='contactinfo',
            name='name_form',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
    ]
