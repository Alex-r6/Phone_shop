# Generated by Django 3.2.12 on 2023-03-11 11:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0038_contactinfo_name_form'),
    ]

    operations = [
        migrations.AddField(
            model_name='faqinfo',
            name='name_form',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
    ]
