# Generated by Django 3.2.12 on 2023-03-13 20:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0007_chatorder'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chatorder',
            name='form_name',
            field=models.CharField(max_length=20, null=True),
        ),
    ]
