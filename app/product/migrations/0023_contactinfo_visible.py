# Generated by Django 3.2.12 on 2023-03-02 14:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0022_faqinfo'),
    ]

    operations = [
        migrations.AddField(
            model_name='contactinfo',
            name='visible',
            field=models.BooleanField(default=True),
        ),
    ]
