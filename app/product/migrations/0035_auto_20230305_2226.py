# Generated by Django 3.2.12 on 2023-03-05 20:26

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('product', '0034_alter_faqinfo_visible'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='contactinfo',
            name='user',
        ),
        migrations.AlterField(
            model_name='contactinfo',
            name='name',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL),
        ),
    ]